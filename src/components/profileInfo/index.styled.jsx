import { styled } from "styled-components";

export const ProfileInfoContainer = styled.div`
  border-radius: 24px 24px 40px 40px;
  background-color: #fff;
  padding-bottom: 26px;
  margin-bottom: 28px;
`;

export const ProfileInfoTopSection = styled.div`
  padding: 10px;
  padding-bottom: 0px;
  > .profile__cover__img {
    width: 100%;
    height: 154px;
    background: #c6cccc;
    border-radius: 24px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  > .profile__detail {
    height: 90px;
    padding-bottom: 15px;
    position: relative;
    .profile_img {
      width: 105px;
      height: 105px;
      border: 50%;
      position: absolute;
      bottom: 15px;
      left: 40px;

      img {
      }
    }
    .left_content {
      display: flex;
      padding-left: 167px;
      padding-top: 22px;
      justify-content: space-between;
      h2 {
        font-weight: 700;
        font-size: 18px;
      }
      .btn__wrap {
        display: flex;
        gap: 15px;
        button {
          padding-left: 13.5px;
          padding-right: 13.5px;
        }
      }
    }
  }
`;

export const ProfileInfoBottomSection = styled.div`
  color: #4a4d4d;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 28px;
  align-items: center;
  > p {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    max-width: 576px;
  }
  > .info_content {
    width: 100%;
    height: 90px;
    padding: 15px;
    background-color: #00c2c226;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    .lang__wrapper {
      display: flex;
      gap: 40px;
      .language {
        display: flex;
        align-items: center;
        gap: 10px;
        span {
          font-size: 16px;
        }
      }
    }

    .other_info_wrapper {
      display: flex;
      gap: 40px;
      > div {
        align-items: center;
        gap: 10px;
        display: flex;
        p {
          font-size: 18px;
        }
      }
    }
  }
`;
