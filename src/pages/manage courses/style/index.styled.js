import { styled } from "styled-components";

export const ManageContainer = styled.div`
  max-width: 824px;
  margin-left: auto;
  button {
    box-shadow: 0px 7.72826px 15.4565px rgba(254, 191, 16, 0.25);
    padding-left: 15.5px;
    padding-right: 15.5px;
  }

  > .header {
    width: 100%;
    margin: 16px 0 15px;
    padding-right: 25px;
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .action {
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      h1 {
        font-size: 22px;
      }
    }

    > .btn_wrap {
      display: flex;
      align-items: center;
      gap: 21px;

      button:last-child {
        color: #00c2c2;
        font-size: 16px;
        padding: 0;
        font-weight: 700;
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;
        box-shadow: none;
        transition: 0.3s color ease;
        &:hover {
          color: #0497a4;
        }
      }
    }
  }
`;

export const TableContainer = styled.div`
  padding: 22px;
  background: #ffffff;
  border-radius: 30.6696px;
  min-height: 660px;
`;

export const ActionHeader = styled.div`
  margin-bottom: 20px;
  .action_tabs {
    display: flex;
    gap: 15px;
    font-size: 14px;
    font-family: 700;
    line-height: 30px;

    p {
      position: relative;
      margin-bottom: 20px;
      cursor: pointer;
      &.active {
        &::before {
          content: "";
          position: absolute;
          height: 3.8px;
          width: 30px;
          border-radius: 3px;
          background-color: #00c2c2;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
        }
      }
    }
  }

  .filter_wrap {
    display: flex;
    width: 100%;
    gap: 123px;
    .search {
      width: 100%;
    }
  }
`;
