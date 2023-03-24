import styled from 'styled-components';
import Colors from 'constants/Colors';

export const SessionWrapper = styled.div`
  height: 100%;
  width: 100%;

  .reframe {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .calling {
    position: absolute;
    top: 35%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 2;

    .calling-screen {
      width: 256;
      height: 256;
      background-color: yellow;
    }
  }

  .ringing {
    position: absolute;
    top: 20%;
    max-height: 15%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 2;

    .ringing-list {
      padding: 4px;
      border-radius: 4px;
      background-color: rgba(0,0,0,0.6);
      display: flex;
      flex-direction: column;

      .ringing-entry {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 8px;

        .ringing-accept {
          color: ${Colors.primary};
          font-size: 18;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${Colors.white};
          border-radius: 16px;
          margin: 8px;
          cursor: pointer;
        }

        .ringing-ignore {
          color: ${Colors.grey};
          font-size: 18;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${Colors.white};
          border-radius: 16px;
          margin: 8px;
          cursor: pointer;
        }
      
        .ringing-decline {
          color: ${Colors.alert};
          font-size: 18;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${Colors.white};
          border-radius: 16px;
          margin: 8px;
          transform: rotate(270deg);
          cursor: pointer;
        }

        .ringing-name {
          font-size: 16px;
          width: 192px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: flex;
          justify-content: center;
          color: ${Colors.white};
        }
      }
    }
  } 

  .spinner {
    position: absolute;
    width: 100%;
    height: calc(100% - 48px);
    z-index: 2;
    margin-top: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.1);
    widtH: 100%;
  }

  .desktop-layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    .left {
      min-width: 256px;
      max-width: 384px;
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      min-height: 0;

      .bottom {
        height: calc(100% - 48px);
      }
    }
    .center {
      flex-grow: 1;
      position: relative;
    }
    .right {
      min-width: 256px;
      max-width: 384px;
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
    }
  }

  .tablet-layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    .left {
      min-width: 256px;
      max-width: 384px;
      width: 30%;
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      min-height: 0;

      .bottom {
        height: calc(100% - 48px);
      }
    }
    .right {
      flex-grow: 1;
      position: relative;

      .drawer {
        padding: 0px;
      }
    }
  }

  .mobile-layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .top {
      flex-grow: 1;
      position: relative;
    }
    .bottom {
      height: 48px;
      position: relative;
      box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
    }
  }
`;
