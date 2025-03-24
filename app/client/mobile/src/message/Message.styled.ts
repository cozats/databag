import {StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';

export const styles = StyleSheet.create({
  message: {
    paddingTop: 8,
    width: '100%',
    minWidth: 0,
    fontSize: 14,
    padding: 0,
  },
  topic: {
    paddingTop: 8,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingBottom: 8,
  },
  pad: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  longbone: {
    width: '100%',
    height: 12,
    borderRadius: 4,
    backgroundColor: Colors.placeholder,
    marginTop: 8,
  },
  shortbone: {
    width: '50%',
    height: 12,
    borderRadius: 4,
    backgroundColor: Colors.placeholder,
    marginTop: 8,
  },
  dot: {
    width: 64,
    height: 64,
    backgroundColor: Colors.placeholder,
    marginLeft: 48,
    borderRadius: 16,
  },
  error: {
    marginLeft: 52,
    marginTop: 8,
    marginBottom: 16,
    color: Colors.offsync,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: 8,
    paddingRight: 8,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 2,
    marginLeft: 8,
  },
  body: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'column',
    minWidth: 0,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    lineHeight: 16,
    gap: 16,
    position: 'relative',
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
  },
  handle: {
    fontSize: 14,
  },
  unknown: {
    fontSize: 14,
    color: Colors.placeholder,
  },
  locked: {
    fontStyle: 'italic',
    color: Colors.placeholder,
  },
  text: {
    fontSize: 16,
    minWidth: 0,
  },
  timestamp: {
    fontSize: 12,
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 8,
  },
  option: {
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
  },
  padding: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 4,
  },
  carousel: {
    paddingLeft: 16,
    paddingBottom: 16,
  },
  assets: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    paddingRight: 32,
  },
  item: {
    width: 64,
    height: 64,
    backgroundColor: 'yellow',
  },
  modal: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editArea: {
    position: 'relative',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    width:'80%',
    maxWidth: 500,
    padding: 16,
    borderRadius: 8,
  },
  editContent: {
    width: '100%',
    padding: 16,
  },
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 20,
    paddingLeft: 4,
    paddingBottom: 4,
  },
  controls: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 16,
    gap: 8,
  },
});
