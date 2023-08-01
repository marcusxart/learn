import { styled } from "styled-components";

export const PracticeReadingContainer = styled.div`
  padding: 25px 53px;
  border-radius: 30px;
  background-color: #fff;
  .header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;
    svg {
      cursor: pointer;
      path,
      rect {
        stroke: #febf10;
      }
    }
  }
`;

export const PracticeReadingForm = styled.form`
  margin-bottom: 50px;
  label {
    color: #313333;
    font-size: 14px;
    font-weight: 600;
  }
  .inputs_wrapper {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    gap: 8px;
    .wrapper {
      display: flex;
      flex-direction: column;
      border-radius: 12px;
      border: 1px solid #949999;
      padding: 20px;
      gap: 10px;

      &.active {
        border: 1px solid #00c2c2;
      }
      input {
        font-size: 18px;
        font-weight: 700;
      }
      textarea {
        font-size: 14px;
      }

      input,
      textarea {
        border: none;
        color: #adb2b2;
        outline: none;
        resize: none;
        &::placeholder {
          color: #adb2b2;
        }
      }
    }
  }
`;
