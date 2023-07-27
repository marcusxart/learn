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

export const CourseAnalyticsChartsSection = styled.div`
  .skill_item {
    display: flex;
    align-items: center;
    gap: 8px;
    p {
      font-size: 12px;
      font-weight: 600;
      span {
        color: #00c2c2;
      }
    }
    .box {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background-color: white;
      span {
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }
    }
  }
`;
export const CourseAnalyticsChartsHeader = styled.div`
  border-radius: 20px;
  background: #f5f7f7;
  padding: 19px 70px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  p {
    color: #7c8080;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }

  .right {
    display: flex;
    gap: 40px;
    align-items: center;
    .performance_wrapper {
      .header {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
    }
    .chart_wrap {
      font-size: 16px;
      font-weight: 600;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 6px;
      span {
        color: #00c2c2;
      }
    }
  }
`;

export const CourseAnalyticsSkillsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const CourseAnalyticsSkillsItem = styled.li`
  padding: 15px 30px;
  border-radius: 23px;
  display: flex;
  align-items: center;
  gap: 32px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "")};
  .content {
    flex: 1;
    min-height: 82px;
    .content_header {
      font-size: 16px;
      font-weight: 700;
      line-height: 28px;
      margin-bottom: 5px;
    }
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }
  }
`;
