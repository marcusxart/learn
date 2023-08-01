import { styled } from "styled-components";

export const AddTestContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 100px;
  h1 {
    font-size: 22px;
    line-height: 40px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding-left: 10px;
    margin: 11px 0;
    cursor: pointer;
  }
  .add_question {
    margin-top: 30px;
    margin-bottom: 50px;
    position: relative;
    button {
      position: relative;
      z-index: 12;
      border-radius: 8px;
      border: 1px solid #00c2c2;
      width: 325px;
      gap: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      padding: 9px 0;
      cursor: pointer;
      span {
        color: #00c2c2;
      }
      svg {
        path {
          stroke: #00c2c2;
        }
      }
    }

    ul {
      position: absolute;
      top: 41.5px;
      z-index: 10;
      list-style: none;
      padding: 25px;
      border-radius: 10px;
      border: 1px solid #c6cccc;
      width: 325px;
      background: #fff;
      display: flex;
      flex-direction: column;
      gap: 24px;
      li {
        color: #0c0d0d;
        font-size: 16px;
      }
    }
  }
`;

export const AddTestContent = styled.div`
  background-color: #fff;
  padding: 33px 40px;
  border-radius: 30px;
`;

export const AddTestHeader = styled.div`
  .top {
    display: flex;
    align-items: center;
    height: 75px;
    .action_wrap {
      display: flex;
      align-items: flex-end;
      gap: 15px;
      button {
        background: rgba(254, 191, 16, 0.2);
        border: none;
        padding: 9px 15px;
        margin-bottom: 4px;
      }
    }
  }
  label {
    font-weight: 600;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;
    .wrap {
      display: flex;
      gap: 10px;
      align-items: center;
      p {
        font-size: 14px;
        font-weight: 600;
      }
      svg {
        cursor: pointer;
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 10px;
    p {
      font-size: 12px;
      span {
        color: #00c2c2;
      }
    }
  }
`;

export const AddTestTableWrapper = styled.div`
  margin-top: 15px;
  .row {
    display: grid;
    grid-template-columns: 50px 50% 1fr 100px;
    align-items: center;
    gap: 20px;
  }
  .t_head {
    padding: 14px 35px;
    border-radius: 10px;
    border: 1px solid #000000;
    background: #fff;
    margin-bottom: 10px;
    p {
      font-size: 16px;
      color: #0c0d0d;
    }
  }

  .t_body {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .row {
      padding: 12px 35px;
      border-radius: 10px;
      background: #f4fbfb;
      div {
        display: flex;
        align-items: center;
        gap: 20px;
        svg {
          width: 25px;
          height: 25px;
          cursor: pointer;

          &:first-child {
            width: 20px;
            height: 20px;
            path {
              stroke: #00c2c2;
            }
          }
        }
      }
    }
  }
`;
