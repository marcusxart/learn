import { styled } from "styled-components";

export const WordPlayContainer = styled.div`
  border-radius: 30px;
  background-color: #fff;
  padding: 28px 50px 52px;
`;

export const WordPlayHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  svg {
    cursor: pointer;
    path,
    rect {
      stroke: #febf10;
    }
  }
  > div {
    display: flex;
    align-items: center;
    gap: 20px;
    label {
      span {
        color: #313333;
        font-weight: 500;
      }
    }
    > p {
      color: #636666;
      font-size: 16px;
      font-weight: 600;
      padding-right: 20px;
      border-right: 1.5px solid #949999;
    }
  }
`;

export const WordPlayForm = styled.div`
  .answer_wrap {
    margin-top: 15px;
    padding: 15px;
    border-radius: 15px;
    border: 1px solid #949999;
  }
  .bottom_wrap {
    display: flex;
    align-items: flex-end;
    gap: 15px;
    margin-top: 20px;
    .dropdown_wrap {
      width: 180px;
    }
  }
  .audio_section {
    > svg {
      cursor: pointer;
    }
    height: fit-content;
    display: flex;
    align-items: center;
    gap: 30px;
    .audio_wrap {
      display: flex;
      align-items: center;
      gap: 35px;
      > svg {
        cursor: pointer;
      }

      .delete_wrap {
        display: flex;
        gap: 6px;
        width: fit-content;
        align-items: center;
        cursor: pointer;
        p {
          color: #f95454;
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
  }

  .add_btn {
    display: flex;
    justify-content: flex-end;
    button {
      margin-top: 30px;
      font-size: 14px;
      padding: 10px 20px;
    }
  }
`;

export const WordPlayOptionsWraooer = styled.div``;
