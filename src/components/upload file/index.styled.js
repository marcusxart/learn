import styled from "styled-components";

export const UploadFileContainer = styled.div`
  p,
  span {
    font-size: 14px;
  }
  .label {
    margin-bottom: 8px;
    font-weight: 500;
  }
  input {
    display: none;
  }
`;

export const InputBox = styled.div`
  width: 226px;
  height: 144px;
  border-radius: 22px;
  border: 1px solid #dfe5e5;
  background: #f5f7f7;
  overflow: hidden;
  display: flex;
  .wrapper {
    flex: 1;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
      max-width: 130px;
      letter-spacing: 0.28px;
    }
    p,
    span {
      color: #febf10;
    }
  }

  .content {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      position: absolute;
    }
    svg:first-child {
      z-index: 2;
      cursor: pointer;
      right: 7.5px;
      top: 7.5px;
    }
    img,
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
