import { styled } from "styled-components";

export const EnrollAnalyticsContainer = styled.div`
  padding: 28px;
  border-radius: 30px;
  background-color: #fff;
`;

export const EnrollAnalyticsHeader = styled.div`
  padding-left: 42px;
  padding-right: 21px;
  display: flex;
  justify-content: space-between;
  gap: 70px;
  padding-bottom: 20px;
  border-bottom: 1.5px solid #f5f7f7;
  margin-bottom: 20px;
  .left {
    flex: 1;
    max-width: 330px;
  }
  .right {
    display: flex;
    align-items: center;
    gap: 24px;
    .desc {
      p {
        color: #7c8080;
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
        &:nth-child(2) {
          color: #fecf4c;
          font-weight: 700;
        }
      }
      span {
        background-color: #00c2c2;
        display: inline-block;
        padding: 0 16px;
        font-size: 14px;
        line-height: 24px;
        color: #fff;
        border-radius: 10px;
      }
    }
  }
`;

export const EnrollAnalyticsSKillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1.5px solid #f5f7f7;
  margin-bottom: 20px;
`;

export const EnrollAnalyticsSKillItem = styled.div`
  background: ${({ color2 }) => color2};
  border-radius: 23px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 18px;
  .desc {
    h2 {
      font-size: 16px;
      font-weight: 700;
      line-height: 28px;
    }
    .bottom {
      display: flex;
      gap: 10px;
      align-items: center;
      > div {
        display: grid;
        height: 34px;
        width: 120px;
        flex-shrink: 0;
        background-color: ${({ color3 }) => color3};
        place-items: center;
        border-radius: 10px;
        border: 1px solid ${({ color1 }) => color1};
        span {
          color: ${({ color1 }) => color1};
        }
      }
      p {
        color: #7c8080;
        font-size: 12px;
      }
    }
  }
`;

export const EnrollAnalyticsFooter = styled.div`
  border-radius: 25px;
  background: #f5f7f7;
  padding: 20px 0;
  .header {
    padding: 0 20px 18px;
    border-bottom: 1.5px solid rgba(223, 229, 229, 0.5);
    p {
      font-size: 16px;
      font-weight: 600;
    }
  }

  ul {
    list-style: none;
    margin-bottom: 30px;
    li {
      display: flex;
      padding: 12px 30px;
      justify-content: space-between;
      border-bottom: 1.5px solid rgba(223, 229, 229, 0.5);
      p {
        flex: 1;
        color: #00c2c2;
        font-size: 16px;
        font-weight: 600;
      }

      .right {
        display: flex;
        gap: 15px;
        .wrap {
          display: flex;
          align-items: center;
          gap: 13px;
          span {
            font-size: 14px;
            color: #7c8080;
          }
        }
      }
    }
  }
`;
