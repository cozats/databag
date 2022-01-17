package databag

import (
  "log"
  "sync"
	"net/http"
  "encoding/json"
  "github.com/gorilla/websocket"
  "databag/internal/store"
)

type accountRevision struct {
  ProfileRevision int64
  ContentRevision int64
  ViewRevision int64
  GroupRevision int64
  LabelRevision int64
  CardRevision int64
  DialogueRevision int64
  InsightRevision int64
}

var wsSync sync.Mutex
var wsExit = make(chan bool, 1)
var statusListener = make(map[uint][]chan<-[]byte)
var upgrader = websocket.Upgrader{}

func Status(w http.ResponseWriter, r *http.Request) {

  // accept websocket connection
  conn, err := upgrader.Upgrade(w, r, nil)
  if err != nil {
      log.Println("Status: failed upgrade connection")
      return
  }
  defer conn.Close()

  log.Println("CONNECTED")
  // receive announce message
  var act uint = 0

  // get revisions for the account
  var account accountRevision
  err = store.DB.Model(&store.Account{}).Where("ID = ?", act).First(&account).Error
  if err != nil {
    log.Println("Status - failed to get account revision")
//    return
  }
  rev := getRevision(account)

  // send current version
  var msg []byte
  msg, err = json.Marshal(rev)
  if err != nil {
    log.Println("Status - failed to marshal revision")
    return
  }
  err = conn.WriteMessage(websocket.TextMessage, msg)
  if err != nil {
    log.Println("Status - failed to send initial revision")
    return
  }

  // open channel for revisions
  c := make(chan []byte)
  defer close(c)

  // register channel for revisions
  AddStatusListener(0, c)
  defer RemoveStatusListener(act, c)

  // send revision until channel is closed
  for {
		select {
		case msg := <-c:
      err = conn.WriteMessage(websocket.TextMessage, msg)
      if err != nil {
        log.Println("Status - failed to send revision, closing")
        return
      }
		case <-wsExit:
			log.Println("Status - server exit")
      wsExit<-true
			return
		}
	}
}

func getRevision(rev accountRevision) Revision {
  var r Revision
  r.Profile = rev.ProfileRevision
  r.Content = rev.ContentRevision
  r.Label = rev.LabelRevision
  r.Group = rev.GroupRevision
  r.Card = rev.CardRevision
  r.Dialogue = rev.DialogueRevision
  r.Insight = rev.InsightRevision
  return r
}

func ExitStatus() {
  wsExit <- true
}

func SetStatus(act uint) {

  // get revisions for the account
  var ar accountRevision
  err := store.DB.Model(&Revision{}).Where("ID = ?", act).First(&ar).Error
  if err != nil {
    log.Println("SetStatus - failed to retrieve account revisions")
    return
  }
  rev := getRevision(ar)
  var msg []byte
  msg, err = json.Marshal(rev)
  if err != nil {
    log.Println("SetStatus - failed to marshal revision")
    return
  }

  // lock access to statusListener
  wsSync.Lock()
  defer wsSync.Unlock()

  // notify all listeners
  chs, ok := statusListener[act]
  if ok {
    for _, ch := range chs {
      ch <- msg
    }
  }
}

func AddStatusListener(act uint, ch chan<-[]byte) {

  // lock access to statusListener
  wsSync.Lock()
  defer wsSync.Unlock()

  // add new listener to map
  chs, ok := statusListener[act]
  if ok {
    chs = append(chs, ch)
  } else {
    statusListener[act] = []chan<-[]byte{ch}
  }
}

func RemoveStatusListener(act uint, ch chan<-[]byte) {

  // lock access to statusListener
  wsSync.Lock()
  defer wsSync.Unlock()

  // remove channel from map
  chs, ok := statusListener[act]
  if ok {
    for i, c := range chs {
      if ch == c {
        if len(chs) == 1 {
          delete(statusListener, act)
        } else {
          chs[i] = chs[len(chs)-1]
          statusListener[act] = chs[:len(chs)-1]
        }
      }
    }
  }
}

