import { styled } from "styled-components";

export const ProfileEditContainer = styled.div`
  max-width: 824px;
  margin-left: auto;
  > .header {
    display: flex;
    align-items: center;
    width: fit-content;
    gap: 16px;
    cursor: pointer;
    margin-bottom: 20px;
    h1 {
      font-size: 22px;
    }
  }
`;

export const MainContentContent = styled.div`
  background: #ffffff;
  border-radius: 40px;
  padding: 20px 16px;
  padding-bottom: 55px;
`;

export const ProfileTopSection = styled.div`
  margin-bottom: 28px;
  svg {
    cursor: pointer;
  }
  > .cover_img_wrap {
    height: 154px;
    border-radius: 30px;
    width: 100%;
    overflow: hidden;
    position: relative;
    background-color: #c6cccc;
    .cover_img_overlay {
      background-color: #0c0d0d;
      position: absolute;
      inset: 0;
      img {
        opacity: 0.4;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    > .actions {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 15px;
      gap: 28px;
    }
  }

  > .profile_img_wrap {
    position: relative;
    width: 100%;
    height: 80px;

    .profile_box {
      background-color: #0c0d0d;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 110px;
      height: 110px;
      border-radius: 50%;
      overflow: hidden;
      > .action {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
      }
      > .img_wrap {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          opacity: 0.4;
          object-fit: cover;
        }
      }
    }
  }
`;

export const FormContainer = styled.form`
  button {
    box-shadow: 0px 10px 20px rgba(254, 191, 16, 0.25);
  }
  > .info_wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 33px;
  }
  > .social_inputs_wrap {
    margin-bottom: 55px;
    width: 100%;
    > .header {
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 20px;
    }

    .input_wrapper {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 16px;
    }
  }
`;
