import { styled } from "styled-components";

export const StudentReportDetailsContainer = styled.div`
  h1 {
    display: flex;
    align-items: center;
    margin: 11px 0 16px;
    margin-left: 22px;
    width: fit-content;
    gap: 16px;
    font-size: 22px;
    font-weight: 700;
    line-height: 40px;
    cursor: pointer;
  }
`;

export const StudentReportDetailsContent = styled.div`
  padding: 25px 45px;
  min-height: 650px;
  border-radius: 30px;
  background: #fff;
  h2 {
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 40px;
  }
`;

export const StudentReportDetailsContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 23px;
  > .left {
    display: flex;
    flex: 1;
    gap: 10px;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    > div {
      display: flex;
      flex-direction: column;
      gap: 2px;
      p:first-child {
        color: #4a4d4d;
        font-size: 14px;
        line-height: 16px;
      }
      p:last-child {
        color: #adb2b2;
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
  > .right {
    border-radius: 10px;
    border: 1px solid #fee398;
    padding: 11px 18px;
    display: flex;
    gap: 35px;
    align-items: center;
    p {
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      color: #636666;
      span {
        font-size: 16px;
        color: #00c2c2;
      }
    }
  }
`;

export const StudentReportDetailsTableWrapper = styled.div`
  .header_wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 19px;
    h3,
    p {
      font-size: 14px;
      font-weight: 700;
    }
    p {
      color: #00c2c2;
      &:nth-child(2) {
        font-weight: 400;
      }
    }
  }

  .footer_wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 27px;
    p {
      color: #00c2c2;
      font-size: 14px;
      font-weight: 600;
      &:last-child {
        width: 115px;
      }
    }
  }
  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    th {
      color: #00c2c2;
      border-bottom: 1px solid #c6cccc;
      padding: 11px 0;
    }
    td {
      border-bottom: 1.5px solid #ffffff;
      svg {
        cursor: pointer;
      }
      > .badge {
        span {
          display: inline-block;
          border-radius: 12px;
          background: #b3eded;
          width: fit-content;
          padding: 5px 20px;
          color: #636666;
          font-size: 12px;
        }
      }
      > .status_wrap {
        width: 100%;
        display: flex;
        justify-content: center;

        span {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          line-height: 20px;
          padding: 7px 11px;
          border-radius: 10px;
          height: 100%;
          background: #f9545419;
          color: #f95454;
          width: 80px;
          text-transform: capitalize;
          &.correct {
            color: #30d468;
            background: #30d46819;
          }
        }
      }
      &.score {
        color: #f95454;

        &.correct {
          color: #30d468;
        }
        &.empty {
          color: #4a4d4d;
        }
      }
    }
    th,
    td {
      font-size: 14px;
      padding: 11px 0;
      background: #f5f7f7;
      text-align: center;
      &:first-child {
        text-align: left;
        padding-left: 15px;
      }
      /* &:last-child {
      
        padding-right: 40px;
        width: 80px;
      } */
    }
  }
`;
