import { styled } from "styled-components";

export const AddTestContainer = styled.div`
  h1 {
    font-size: 22px;
    line-height: 40px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding-left: 10px;
    margin: 11px 0;
    cursor: pointer;
  }
`;

export const AddTestContent = styled.div`
  background-color: #fff;
  padding: 33px 40px;
  border-radius: 30px;
`;

export const AddTestHeader = styled.div`
  .top {
    display: flex;
    align-items: center;
    height: 75px;
  }
  label {
    font-weight: 600;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;
    .wrap {
      display: flex;
      gap: 10px;
      align-items: center;
      p {
        font-size: 14px;
        font-weight: 600;
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 10px;
    p {
      font-size: 12px;
      span {
        color: #00c2c2;
      }
    }
  }
`;
