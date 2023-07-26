import { styled } from "styled-components";

export const ArchiveStudentsContainer = styled.div`
  h1 {
    display: flex;
    align-items: center;
    padding-left: 10px;
    gap: 12px;
    margin: 11px 0;
    width: fit-content;
    span {
      font-size: 22px;
      line-height: 40px;
    }
  }
`;

export const ArchiveStudentsContent = styled.div`
  padding: 30px 0;
  border-radius: 30px;
  background-color: #fff;
  min-height: 460px;
`;

export const ArchiveHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 20px 0 30px;
  margin-bottom: 26px;
  .search {
    flex: 1;
    max-width: 410px;
  }
  .btn_group {
    display: flex;
    gap: 16px;
    button {
      padding: 10px;
    }
  }
`;

export const ArchiveTableContainer = styled.div`
  .check_wrap {
    margin-right: 10px;
    svg {
      path {
        fill: #ffffff;
      }
    }
  }
  .t_head {
    background-color: rgba(0, 194, 194, 0.1);
    height: 40px;
    padding: 0 25px;
    display: flex;
    margin-bottom: 13px;
    align-items: center;
    .row {
      flex: 1;
      display: grid;
      grid-template-columns: 40% 40% 20%;
      p {
        color: #00c2c2;
        font-size: 14px;
        font-weight: 700;
        margin-left: 15%;
      }
    }
  }

  .t_body {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    .body_row {
      padding: 8px 25px;
      display: flex;
      align-items: center;
      &:hover {
        background-color: #f5f7f7;
      }
      .row {
        flex: 1;
        display: grid;
        grid-template-columns: 40% 40% 20%;
        align-items: center;
        > div {
          p {
            color: #4a4d4d;
            font-size: 14px;
          }
          &:first-child {
            display: flex;
            align-items: center;
            width: calc(100% - 20px);
            p {
              margin-left: 10px;
              width: 90%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          &:nth-child(2) {
            width: calc(100% - 20px);
            p {
              width: 90%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          &.action {
            display: flex;
            align-items: center;
            gap: 26px;
            justify-content: flex-end;
            svg {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;
