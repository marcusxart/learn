import { styled } from "styled-components";

export const ChatContentContainer = styled.div`
  height: 478px;
  padding: 0 10px;
  overflow: auto;
  .date_notify {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #f5f7f7;
      border-radius: 37px;
    }
    span {
      display: inline-block;
      padding: 0 25px;
      border-radius: 5px;
      background: #f5f7f7;
      color: #666668;
      font-size: 10px;
      font-weight: 300;
      z-index: 3;
      position: relative;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    gap: 10px;
    li {
      width: fit-content;
      display: flex;
      gap: 4px;
      > .circle {
        display: inline-block;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background-color: #00c2c2;
      }
      > .message_box {
        border-radius: 10px;
        background: #00c2c2;
        padding: 4px 8px;
        h3,
        p {
          color: #fff;
        }
        h3 {
          font-size: 14px;
          font-weight: 700;
          line-height: 18px;
          margin-bottom: 4px;
        }
        .message_content {
          display: flex;
          gap: 8px;
          p {
            font-size: 14px;
            line-height: 20px;
            margin-bottom: 10px;
          }
          .time {
            font-size: 12px;
            line-height: normal;
            margin: 0;
            margin-top: auto;
          }
        }
      }
      .video_box {
        position: relative;
        width: 210px;
        height: 142px;
        border-radius: 10px;
        background: #00c2c2;
        padding: 4px;
        img {
          border-radius: 10px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        p {
          position: absolute;
          right: 10px;
          bottom: 10px;
          border-radius: 6px;
          background: rgba(0, 0, 0, 0.5);
          padding: 4px;
          width: fit-content;
          color: #fff;
          font-size: 10px;
        }
      }

      &.isYou {
        margin-left: auto;
        > .message_box {
          background-color: #f5f7f7;
          h3,
          p {
            color: #313333;
          }
        }
        > .video_box {
          background-color: #f5f7f7;
        }
      }
    }
  }
`;
