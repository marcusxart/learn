import { styled } from "styled-components";

export const CreateCourseContainer = styled.div`
  margin-left: auto;
  > .header {
    padding: 0 10px;
    display: flex;
    margin: 15px 0;
    align-items: center;
    width: fit-content;
    cursor: pointer;
    gap: 16px;
    h1 {
      font-size: 22px;
      line-height: 40px;
    }
  }
`;

export const CreateFormContainer = styled.div`
  padding: 52px;
  border-radius: 30.67px;
  background: #fff;
  .header {
    font-size: 18px;
    line-height: 40px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

export const CreateForm = styled.form`
  button {
    width: 100%;
    box-shadow: 0px 10px 20px 0px rgba(254, 191, 16, 0.25);
    padding: 20px;
    font-size: 16px;
  }
  > .first_section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  > .upload_section {
    display: flex;
    margin-top: 20px;
    gap: 52px;
  }
  > .last_section {
    .wrapper-1,
    .wrapper-2,
    .wrapper-3 {
      margin-bottom: 25px;
    }
    .wrapper-1 {
      .header {
        margin-top: 20px;
        margin-bottom: 12px;
      }
    }

    .wrapper-2 {
      .date-section {
        display: flex;
        margin-bottom: 15px;
        width: 100%;
        gap: 20px;
        > div {
          width: 100%;
          p {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 8px;
          }
        }
      }
    }

    .wrapper-3 {
      div {
        margin-top: 10px;
        > p {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
        }
      }
    }
  }
`;
