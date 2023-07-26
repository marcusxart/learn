import { styled } from "styled-components";

export const ChatContainer = styled.div`
  background: #fff;
  box-shadow: 0px -1px 15px 0px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  flex: 1;
  padding: 10px 0 0;
  min-height: 646px;
  display: flex;
  flex-direction: column;
`;

export const ChatHeader = styled.div`
  padding: 0 10px;
  .header_wrap {
    border-radius: 20px;
    background: #00c2c2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    > .left {
      display: flex;
      align-items: center;
      gap: 15px;
      > .info_desc {
        h2,
        p {
          color: #fff;
          line-height: 20px;
        }
        h2 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        p {
          font-size: 14px;
          opacity: 0.6;
        }
      }
      > .img_box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        background-color: #fff;
        border-radius: 50%;
        svg,
        img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }
      }
    }
  }
`;

export const ChatHeaderDropdown = styled.div`
  position: relative;
  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
    path {
      fill: #fff;
    }
  }

  ul {
    position: absolute;
    z-index: 10;
    top: 28px;
    right: 0;
    list-style: none;
    display: inline-flex;
    padding: 10px 0px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 15px;
    border: 1px solid #dfe5e5;
    background: #f5f7f7;
    box-shadow: 0px 0px 20px 0px rgba(198, 204, 204, 0.05);
    width: 115px;
    li {
      padding: 4px 10px;
      color: #7c8080;
      font-size: 12px;
      font-weight: 600;
      line-height: 14.5px;
      cursor: pointer;
    }
  }
`;

export const ChatInputWrappper = styled.div`
  padding: 8px 20px 20px;
  box-shadow: 0px -1px 15px 0px rgba(0, 0, 0, 0.05);
  flex: 1;
  display: flex;
  .actions_wrap {
    flex: 1;
    display: flex;
    gap: 25px;
    .wrapper {
      border-radius: 15px;
      background: #f7f7f7;
      flex: 1;
      display: flex;
      align-items: center;
      padding: 0 24px;
      gap: 20px;
      svg {
        cursor: pointer;
        path {
          stroke: #adb3b3;
        }
      }

      input {
        flex: 1;
        padding: 0 4px;
        border: none;
        background: transparent;
        color: #666668;
        font-size: 16px;
        line-height: 20px;
      }
    }
    button {
      display: flex;
      padding: 14px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      background: #febf10;
      border: none;
      border-radius: 12px;
      cursor: pointer;
    }
  }
`;
