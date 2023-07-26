import { styled } from "styled-components";

export const AddStudentContainer = styled.div`
  min-height: 100vh;
  h1 {
    display: flex;
    align-items: center;
    width: fit-content;
    cursor: pointer;
    gap: 12px;
    margin-left: 10px;
    span {
      font-size: 22px;
      line-height: 40px;
      margin: 11px;
    }
  }
`;

export const AddStudentContent = styled.div`
  background-color: #fff;
  border-radius: 30px;
  padding: 30px 53px;
`;

export const AddStudentInputsWrappper = styled.div`
  .textarea_container,
  .input_container {
    .label {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 8px;
    }
  }

  .input_container {
    margin-bottom: 20px;
  }
  .textarea_container {
    margin-bottom: 28px;
    textarea {
      padding: 19px 20px;
      border-radius: 12px;
      border: 1px solid #949999;
      width: 100%;
      color: #adb2b2;
      font-size: 16px;
      font-weight: 400;
      &::placeholder {
        color: #adb2b2;
      }
    }
  }
`;

export const AddStudentBtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  margin-bottom: 45px;
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 24px;
    span {
      color: #2e2e2e;
      font-size: 16px;
      font-weight: 700;
    }
  }
  .bottom {
    button {
      width: 100%;
      box-shadow: 0px 10px 20px 0px rgba(254, 191, 16, 0.25);
    }
  }
`;
