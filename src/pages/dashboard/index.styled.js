import styled from "styled-components";

export const DashboardContainer = styled.div`
  color: #313333;
  margin-left: auto;
  h1 {
    font-size: 22px;
    line-height: 40px;
    margin: 11px 0;
    text-align: left;
    margin-left: 24px;
  }
`;

export const MainContent = styled.div`
  padding: 25px 0 60px;
  width: 100%;
  border-radius: 30px;
  background: #ffffff;

  .top__info__wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 35px 0 38px;
    margin-bottom: 30px;
    p {
      font-size: 14px;
      line-height: 30px;
      font-weight: 700;
    }

    span {
      font-weight: 600;
      font-size: 12px;
    }
    .top__wrap {
      p {
        margin-bottom: 6px;
      }
      > div {
        height: 38px;
        width: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        border-radius: 8px;

        &.yellow {
          border: 0.772826px solid #febf10;
          background: rgba(254, 191, 16, 0.1);
          span {
            color: #febf10;
          }
        }

        &.green {
          border: 0.772826px solid #30d568;
          background: rgba(48, 212, 104, 0.1);
          span {
            color: #30d568;
          }
          svg {
            path {
              stroke: #30d568;
            }
          }
        }
      }
    }
  }
`;

export const GraphSection = styled.div`
  display: flex;
  width: 100%;
  padding: 0 26px 0 31px;
  gap: 30px;
  max-width: 824px;
  margin-bottom: 30px;
  @media screen and (max-width: 1280px) {
    gap: 22px;
  }
  > .graph__wrapper {
    flex: 1;
    width: 480px;
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
    max-width: 200px;
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
  }
`;

export const CoursesContainer = styled.div`
  width: 100%;
  padding: 0 65px 0 40px;
  max-width: 824px;
  .course__header {
    display: flex;
    width: 100%;

    justify-content: space-between;
    font-family: 700;
    font-size: 14px;
    line-height: 30px;
    align-items: center;
    margin-bottom: 10px;
    .view_all {
      color: #00c2c2;
      cursor: pointer;
    }
    > div {
      display: flex;
      gap: 14px;
      p {
        color: #adb2b2;
        cursor: pointer;

        &.active {
          color: #313333;
          position: relative;
          &::before {
            content: "";
            position: absolute;
            height: 4px;
            width: 30px;
            background-color: #00c2c2;
            border-radius: 4px;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px 20px;
  padding: 0;
  /* @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  } */
`;

export const CourseBox = styled.div`
  width: 220px;
  height: 108px;
  padding: 9px;
  border: 0.772828px solid #dfe6e6;
  border-radius: 18px;
  display: flex;
  gap: 9px;
  > .course__image {
    background: #dfe6e6;
    border-radius: 17px;
    overflow: hidden;
    width: 88px;
    height: 88px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  > .course__detail {
    width: 105px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    h3 {
      font-size: 12px;
      color: #313333;
      line-height: 15px;
    }
    > .score {
      color: #7c8080;
      font-size: 10px;
    }

    > .learners,
    .rating {
      color: #4a4d4d;
      font-size: 11px;
    }
    > .rating {
      display: flex;
      gap: 2px;
    }
  }
`;
