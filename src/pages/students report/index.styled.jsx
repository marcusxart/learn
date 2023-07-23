import { styled } from "styled-components";
import { TestReportsContainer } from "../test reports/index.styled";

export const StudentsReportContainer = styled(TestReportsContainer)``;

export const StudentsReportContent = styled.div`
  border-radius: 30px;
  background: #fff;
  min-height: 600px;
  button {
    box-shadow: 0px 10px 20px 0px rgba(254, 191, 16, 0.25);
  }
`;

export const StudentsReportActionHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 50px;
  padding: 19px 28px 21px 40px;
  .filter_wrap {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 18px;
    .search {
      flex: 1;
    }
  }
`;

export const StudentsReportTable = styled.div`
  > .table_head {
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    background: rgba(0, 194, 194, 0.1);
    padding: 25px;
    gap: 10px;
    @media screen and (min-width: 1440px) {
      gap: 20px;
    }
    margin-bottom: 15px;
    p {
      text-align: center;
      color: #00c2c2;
      width: 90px;
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;

      @media screen and (min-width: 1300px) {
        font-size: 14px;
      }
      @media screen and (min-width: 1440px) {
        width: 120px;
      }

      &.action {
        width: 130px;
      }
      &:nth-child(1) {
        padding-left: 17px;
        flex: 1;
      }
      &:nth-child(1),
      &:nth-child(2) {
        text-align: left;
      }
    }
  }
  > .table_body {
    .body_wrap {
      display: flex;
      align-items: center;
      padding: 15px 25px;
      gap: 10px;
      width: 100%;
      @media screen and (min-width: 1440px) {
        gap: 20px;
      }
      &:first-child {
        background: #f5f7f7;
      }
      .info {
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
          color: #4a4d4d;
          font-size: 12px;
          @media screen and (min-width: 1300px) {
            width: 100%;
          }
          p {
            width: 70px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          @media screen and (min-width: 1300px) {
            width: 100%;
            p {
              width: 100%;
              font-size: 14px;
            }
          }
        }
      }
      .tab {
        width: 90px;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        flex-shrink: 0;
        color: #4a4d4d;
        @media screen and (min-width: 1300px) {
          font-size: 14px;
        }
        @media screen and (min-width: 1440px) {
          width: 120px;
        }
        &:nth-child(2) {
          text-align: left;
        }
        &.pulished {
          color: #00c2c2;
        }
      }
      .action {
        width: 130px;
        flex-shrink: 0;

        button {
          font-size: 12px;
          height: 24px;
          @media screen and (min-width: 1300px) {
            font-size: 14px;
          }
        }
      }
    }
  }
`;
