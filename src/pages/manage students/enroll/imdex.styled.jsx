import { styled } from "styled-components";

export const StudentEnrollContainer = styled.div`
  min-height: 100vh;
`;

export const StudentEnrollHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 24px 0 14px;
  .left {
    display: flex;
    align-items: center;
    gap: 16px;
    flex: 1;
    svg {
      cursor: pointer;
    }
    .info {
      display: flex;
      flex: 1;
      gap: 20px;
      img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
      }
      > div {
        display: flex;
        flex-direction: column;
        p {
          font-size: 18px;
          font-weight: 700;
          line-height: 24px;
        }
        span {
          color: #4a4d4d;
          font-size: 14px;
          line-height: 24px;
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 20px;
    p {
      color: #7c8080;
      font-size: 12px;
    }
  }
`;

export const StudentEnrollTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  padding-left: 40px;
  margin-bottom: 8px;
  p {
    color: #949999;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    line-height: 40px;

    &.active_tab {
      color: #00c2c2;
      position: relative;
      transition: all 0.3s ease-in;
      &::before {
        content: "";
        position: absolute;
        width: 39px;
        height: 5px;
        border-radius: 4px;
        background-color: #00c2c2;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;
