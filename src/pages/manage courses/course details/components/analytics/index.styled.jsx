import { styled } from "styled-components";

export const CourseAnalyticsContainer = styled.div`
  padding-top: 23px;
`;

export const CourseAnalyticsChartWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  width: 100%;
  margin-bottom: 30px;
  @media screen and (max-width: 1280px) {
    gap: 22px;
  }
  > .graph__wrapper {
    flex: 1;
    max-width: 600px;
    .line_graph {
      height: 10px;
      background-color: pink;
    }
    @media screen and (max-width: 1280px) {
      max-width: 400px;
    }
    .graph__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      h2 {
        font-size: 14px;
      }
    }
  }

  .graph_aside {
    flex: 1;
    max-width: 188px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    border: 1px solid #f5f7f7;
    background-color: #ffffff;
    border-radius: 15px;
    height: fit-content;
    gap: 8px;
    > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      font-size: 12px;
      p {
        color: #7c8080;
      }
      span {
        color: #00c2c2;
      }
    }

    @media screen and (max-width: 1380px) {
      max-width: 140px;
      > div {
        font-size: 8px;
      }
    }
  }
`;
