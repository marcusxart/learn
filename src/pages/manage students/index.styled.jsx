import { styled } from "styled-components";

export const ManageStudentContainer = styled.div`
  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 11px 24px;
    h1 {
      font-size: 22px;
      font-weight: 700;
      line-height: 40px;
    }
    button {
      padding-left: 15.5px;
      padding-right: 15.5px;
      box-shadow: 0px 10px 20px 0px rgba(254, 191, 16, 0.25);
    }
  }
`;

export const ManageStudentWrapper = styled.div`
  padding: 20px 0;
  background-color: #fff;
  border-radius: 30px;
  .filter_section {
    padding: 0 30px;
    display: flex;
    gap: 12%;
    .search_wrap {
      flex: 1;
    }
  }
`;

export const ManageStudentTableTabs = styled.div`
  padding: 14px 30px;
  display: flex;
  align-items: center;
  gap: 22px;
  margin-bottom: 14px;
  p {
    color: #adb2b2;
    font-size: 14px;
    font-weight: 700;
    line-height: 30px;
    transition: all 0.3s ease-in;
    cursor: pointer;
    &.active_tab {
      color: #313333;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 30px;
        height: 4px;
        border-radius: 3px;
        background: #00c2c2;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;

export const ManageCourseTable = styled.div`
  .t_header {
    display: flex;
    background: rgba(0, 194, 194, 0.1);
    height: 40px;
    align-items: center;
    padding: 0 32px 0 30px;
    gap: 20px;
    margin-bottom: 13px;
    p {
      color: #00c2c2;
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      width: 120px;

      &.email {
        flex: 1;
      }
      &.name {
        flex: 1;
      }
      &.center {
        text-align: center;
      }
    }
  }
  .t_body {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 13px;
    .row {
      padding: 0 32px 0 30px;
      gap: 20px;
      height: 50px;
      align-items: center;
      display: flex;
      width: 100%;
      background: #fff;
      &:first-child {
        background-color: #f5f7f7;
      }

      > div {
        span {
          color: #4a4d4d;
          font-size: 14px;
          line-height: 20px;
          display: inline-block;
        }
        &.email {
          flex: 1;
          span {
            width: 80%;
          }
        }
        &.name {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 8px;
          img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
          }
          > div {
            flex: 1;
            display: flex;
            span {
              flex: 1;
              max-width: 80%;
            }
          }
        }
        &.center {
          text-align: center;
        }
        width: 120px;
        &.action {
          display: flex;
          align-items: center;
          gap: 24px;
          svg {
            cursor: pointer;
            width: 38px;
            height: 38px;
          }
        }
      }
    }
  }
`;
