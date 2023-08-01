import { styled } from "styled-components";

export const WritingEssayContainer = styled.div`
  border-radius: 30px;
  background-color: #fff;
  padding: 20px 52px 52px;
`;

export const WrittingEssayHeader = styled.div`
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

export const WritingEssayForm = styled.form`
  button {
    width: 100%;
    box-shadow: 0px 10px 20px 0px rgba(254, 191, 16, 0.25);
  }
  label {
    color: #313333;
    font-family: Nunito;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 7px;
  }
  .textarea_wrapper {
    margin-top: 20px;
    display: flex;
    margin-bottom: 90px;
    flex-direction: column;
    textarea {
      min-height: 111px;
      resize: none;
      border-radius: 12px;
      border: 1px solid #949999;
      padding: 20px;
      color: #adb2b2;
      font-size: 16px;
      &::placeholder {
        color: #adb2b2;
      }

      &:focus {
        border: 1px solid #00c2c2;
      }
      &:active {
        border: 1px solid #00c2c2;
      }
    }
  }
`;
