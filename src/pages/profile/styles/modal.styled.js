import { styled } from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 20;
  overflow: hidden;
  display: grid;
  place-content: center;
`;

export const Modal = styled.div`
  width: 638px;
  .modal_header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    > div {
      width: 40px;
      cursor: pointer;
      height: 40px;
      border-radius: 50%;
      background-color: #fff;
      display: grid;
      place-content: center;
    }
  }

  .modal_content {
    background-color: #fff;
    border-radius: 30px;
    padding: 46px 22px 28px;

    h2 {
      text-align: center;
      font-size: 26px;
      line-height: 40px;
      color: #00c2c2;
      margin-bottom: 36px;
    }

    > .content {
      width: 100%;
      .content_header {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        gap: 45px;
        padding: 0 29px;
        margin-bottom: 17px;
      }
      > .content_form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 37px;
        width: 100%;
        button {
          box-shadow: 0px 10px 20px rgba(254, 191, 16, 0.25);
          width: fit-content;
        }
        .content_body {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 20px;
          .content_row {
            display: flex;
            width: 100%;
            gap: 65px;
            padding: 10px 42px 10px 15px;
            background-color: #f5f7f7;
            border-radius: 10px;
            p {
              flex: 1;
            }
          }
        }
      }
    }
  }
`;
