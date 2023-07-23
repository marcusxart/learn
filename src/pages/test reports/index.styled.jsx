import { styled } from "styled-components";

export const TestReportsContainer = styled.div`
  h1 {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 11px 0 15px;
    margin-left: 22px;
    cursor: pointer;
    span {
      font-size: 22px;
      font-weight: 700;
      line-height: 40px;
    }
  }
`;

export const TestReportsContentContainer = styled.div`
  border-radius: 30px;
  background: #fff;
  width: 100%;
  padding: 25px 0;
  min-height: 600px;
  h2 {
    margin-left: 53px;
    margin-bottom: 25px;
    width: fit-content;
    span {
      font-size: 18px;
      line-height: 40px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        border-radius: 4px;
        background: #00c2c2;
        height: 5px;
        left: 0;
        right: 0;
        bottom: -5px;
      }
    }
  }
`;

export const TestReportsTable = styled.div`
  > .table_head,
  > .table_body {
    padding: 0 15px;
    p {
      line-height: 20px;
      font-size: 14px;
      width: 105px;
      text-align: center;
      &:first-child {
        flex: 1;
        padding-left: 28px;
        text-align: left;
      }
      &:last-child {
        padding-right: 28px;
        text-align: left;
        width: 120px;
      }
    }
    .sm {
      width: 70px;
      @media screen and (min-width: 1440px) {
        width: 105px;
      }
    }
  }
  > .table_head {
    margin-bottom: 15px;
    display: flex;
    background: rgba(0, 194, 194, 0.1);
    height: 54px;
    align-items: center;
    gap: 20px;
    p {
      color: #00c2c2;
      font-weight: 700;
    }
  }
  > .table_body {
    display: flex;
    width: 100;
    flex-direction: column;
    gap: 15px;
    .body_wrap {
      display: flex;
      gap: 20px;
      align-items: center;
      padding: 11px 0;
      background: #fff;
      box-shadow: 0px 3px 5px 0px rgba(212, 212, 212, 0.25);
      p {
        &.success {
          color: #30d468;
        }
        &.fail {
          color: #f95454;
        }

        &.published {
          color: #00c2c2;
        }
        &:first-child {
          color: #30d468;
          width: 90%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
`;
