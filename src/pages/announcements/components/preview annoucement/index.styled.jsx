import styled from "styled-components";

export const PreviewAnnoucementContainer = styled.div`
  h1 {
    margin-top: 8px;
    margin-bottom: 13px;
    padding-left: 8px;
    font-size: 22px;
    font-weight: 700;
    line-height: 40px;
    display: flex;
    align-items: center;
    width: fit-content;
    cursor: pointer;
    gap: 16px;
  }
`;

export const PreviewAnnoucementContent = styled.div`
  border-radius: 30px;
  background: #fff;
  padding: 30px 53px 48px;
  > .wrapper {
    padding: 15px 23px;
    display: flex;
    flex-direction: column;
    gap: 19px;
    width: 100%;
    border-radius: 18px;
    border: 0.8px solid #dfe5e5;
    h2 {
      font-size: 16px;
      font-weight: 700;
      line-height: 15px;
    }
    .content {
      color: #4a4d4d;
      font-size: 14px;
    }
    .footer {
      display: flex;
      justify-content: flex-end;
      font-size: 12px;
      font-weight: 600;
      p {
        color: #adb2b2;
      }
    }
  }
`;
