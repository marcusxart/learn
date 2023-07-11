import { styled } from "styled-components";

export const CourseTable = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  .table_header,
  .table_row {
    display: flex;
    gap: 20px;
    padding: 14px 18px;
    border-radius: 10px;
    p {
      width: 90px;
      font-size: 14px;
      display: flex;
      gap: 6px;
      align-items: center;
    }
    p:first-child {
      flex: 1;
    }

    .sm {
      width: 60px;
    }
    .action {
      width: 30px;
      display: flex;
      align-items: center;
      position: relative;
      svg {
        position: relative;
        z-index: 1;
      }
      > .dropdown {
        list-style: none;
        top: 23px;
        z-index: 2;
        right: 0;
        width: 150px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 25px;
        position: absolute;
        border-radius: 25px;
        background: #ffffff;
        box-shadow: 0px 10px 20px 0px rgba(139, 139, 139, 0.25);
        li {
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
    .center {
      padding-left: 12px;
    }
    .nowrap_text {
      width: 360px;
      overflow: hidden;
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .table_row {
    cursor: pointer;
    background-color: #f5f7f7;
    transition: all 0.2s ease-in;
    border: 1px solid #dfe5e5;
    display: flex;
    width: 100%;
    align-items: center;
    p:first-child {
      color: #00c2c2;
      font-weight: 700;
    }
    p {
      font-weight: 600;
    }
    p,
    span {
      color: #7c8080;
    }

    &:hover,
    &.active {
      background-color: #00c2c2;
      p,
      span {
        color: #ffffff;
      }

      .action {
        svg {
          path {
            fill: #ffffff;
          }
        }
      }
    }
  }
  .table_header {
    background-color: #00c2c21a;
    p {
      color: #00c2c2;
      font-weight: 700;
    }
  }
`;
