import styled from "styled-components";

export const DashboardContainer = styled.div`
  .courses__tab {
    display: flex;
    position: relative;
    margin-bottom: 20px;
    align-items: center;
    h1 {
      margin-top: 0px;
      color: #313333;
      font-size: 24px;
      margin-right: 26px;
      font-weight: 700;
    }
    a {
      color: #adb2b2;
      margin-right: 26px;
      padding-bottom: 3px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      margin-top: 5px;

      &:hover {
        color: #313333;
        transition: 0.3s all;

        &::before {
          content: "";
          height: 30px;
          width: 3px;
          border-radius: 10px;
          position: absolute;
          top: 15px;
          left: 148px;
          display: block;
          background: #00c2c2;
          transform: rotate(90deg);
          transition: 0.3s all;
        }
      }

      &.active {
        color: #313333;
        transition: 0.3s all;

        &::before {
          content: "";
          height: 30px;
          width: 3px;
          border-radius: 10px;
          position: absolute;
          top: 15px;
          left: 148px;
          display: block;
          background: #00c2c2;
          transform: rotate(90deg);
        }
      }
    }

    a:nth-of-type(2) {
      color: #adb2b2;
      margin-right: 15px;
      padding-bottom: 3px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      margin-top: 5px;

      &:hover {
        color: #313333;

        &::before {
          content: "";
          height: 30px;
          width: 3px;
          border-radius: 10px;
          position: absolute;
          top: 15px;
          left: 237px;
          display: block;
          background: #00c2c2;
          transform: rotate(90deg);
        }
      }

      &.active {
        color: #313333;

        &::before {
          content: "";
          height: 30px;
          width: 3px;
          border-radius: 10px;
          position: absolute;
          top: 15px;
          left: 237px;
          display: block;
          background: #00c2c2;
          transform: rotate(90deg);
        }
      }
    }
  }

  .header__section {
    display: flex;
    align-items: center;
    h1 {
      margin-bottom: 10px;
      color: #313333;
      font-size: 22px;
      font-weight: 700;
      margin-right: 26px;
      display: flex;
      align-items: center;
      margin-left: 20px;

      svg {
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }

  .title__header {
    position: relative;
    h1 {
      color: #313333;
      margin-bottom: 28px;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      margin-top: 5px;
      &::before {
        content: "";
        height: 30px;
        width: 3px;
        border-radius: 10px;
        position: absolute;
        top: 15px;
        left: 43px;
        display: block;
        background: #00c2c2;
        transform: rotate(90deg);
      }
    }
  }
`;
export const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
  padding: 20px 20px;
  position: relative;

  .header__section {
    display: flex;
    align-items: center;
    h1 {
      margin-bottom: 10px;
      color: #313333;
      font-size: 22px;
      font-weight: 700;
      display: flex;
      align-items: center;
      margin-left: 0;

      svg {
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }

  .container__contents {
    display: flex;

    .section__details {
      width: 70%;
      margin-left: 30px;
    }
  }
  h4 {
    margin-bottom: 8px;
    color: #313333;
    font-size: 14px;
    font-weight: 700;
  }
  h2 {
    margin-bottom: 15px;
    color: #313333;
    font-size: 17px;
    font-weight: 700;
  }

  .students__profile {
    display: flex;
    margin-bottom: 12px;
    .avatar__img {
      width: 50px;

      img {
        width: 100%;
      }
    }

    .students__details {
      margin-left: 10px;
      h5 {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 4px;
        color: #4a4d4d;
      }
      h6 {
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 0;
        color: #adb2b2;
      }
    }
  }

  .reports__section {
    h3 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 18px;
      color: #313333;
    }

    .single__course_report {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      p {
        font-size: 14px;
        font-weight: 700;
        color: #313333;
      }
      span {
        font-size: 14px;
        font-weight: 700;
        color: #00c2c2;
        cursor: pointer;
      }
    }
  }
`;
export const AccordionStyledContainer = styled.div`
  .szh-accordion__item {
    margin-bottom: 11px;
  }

  .szh-accordion__item-heading button {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 11px 15px;
    font-size: 14px;
    text-align: left;
    color: #00c2c2;
    background-color: transparent;
    border: none;
    font-weight: 700;
    box-shadow: 0px 3px 5px rgba(212, 212, 212, 0.25);
  }

  .itemContent {
  }

  .itemPanel {
    padding: 1rem;
  }

  .chevron {
    margin-left: auto;
    color: #adb3b3;
    transition: transform 0.2s ease-in-out;
  }

  .szh-accordion__item--expanded
    .szh-accordion__item-heading
    .szh-accordion__item-btn
    .chevron {
    transform: rotate(180deg);
  }
`;

export const GraphContainer = styled.div`
  .graph__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .select__period {
      color: #febf10;
      font-size: 14px;
      font-weight: 700;
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      svg {
        color: #7c8080;
        margin-left: 5px;
      }
    }
  }
  .graph__score {
    display: flex;
    width: 100%;

    canvas {
      max-width: 550px;
      width: 100%;
    }

    .graph__score_step {
      padding: 30px;
      margin-left: auto;
      p {
        font-size: 12px;
        font-weight: 600;
        color: #4a4d4d;
      }
      span.yellow {
        color: #febf10;
        font-size: 30px;
        margin-right: 15px;
      }

      span.green {
        color: #30d568;
        font-size: 30px;
        margin-right: 15px;
      }
    }
  }
`;

export const CourseListContainer = styled.div`
  margin-top: 30px;
  width: 100%;

  .show__more {
    color: #febf10;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    border: 1px solid #febf10;
    background-color: transparent;
    padding: 8px 30px;
    margin: 20px auto 10px;
    display: flex;
  }
  .sd_enterprise__info {
    width: 100%;
    display: flex;
    column-gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 30px;

    .sdei_container {
      .sdei__box {
        background-color: rgba(254, 191, 16, 0.1);
        border-radius: 8px;
        border: 1px solid rgba(254, 191, 16, 1);
        text-align: center;
        font-size: 12px;
        margin-bottom: 16px;
        padding: 10px 17px;
        color: rgba(254, 191, 16, 1);
        width: 130px;
        display: flex;
        align-items: center;
        justify-content: center;

        & svg {
          margin-right: 5px;
        }
      }
      .sdei__box_green {
        background-color: rgba(48, 212, 104, 0.1);
        border-radius: 8px;
        border: 1px solid rgba(48, 212, 104, 1);
        text-align: center;
        font-size: 12px;
        margin-bottom: 16px;
        padding: 10px 17px;
        color: rgba(48, 212, 104, 1);
        width: 130px;
        display: flex;
        align-items: center;
        justify-content: center;

        & svg {
          margin-right: 5px;
        }
      }
    }
  }

  .course_list__contents {
    display: flex;
    flex-wrap: wrap;
    column-gap: 18px;
    row-gap: 16px;
    padding: 10px 0;

    .course__info_wrapper {
      border: 1px solid #fecfac;
      border-radius: 15px;
      width: 220px;
      padding: 15px;
      padding: 15px;
      cursor: pointer;
      h3 {
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 8px;
        color: #313333;
      }

      .course__info_box {
        display: flex;

        .progress__bar {
          width: 65px;

          .CircularProgressbar .CircularProgressbar-text {
            font-weight: 600;
          }

          .CircularProgressbar .CircularProgressbar-path {
            stroke: #febf10;
            stroke: linear-gradient(
              180deg,
              rgba(254, 191, 16, 1) 0%,
              rgba(255, 144, 41, 1) 50%,
              rgba(254, 191, 16, 1) 50%
            );
          }
        }

        .clcd_grades_desc {
          margin-left: 12px;

          .grades {
            border-radius: 18px;
            padding: 2px 15px;
            width: 81px;
            border: 1px solid rgba(254, 191, 16, 1);
            background-color: rgba(254, 191, 16, 0.1);
            color: rgba(254, 191, 16, 1);
            font-size: 11px;
            font-weight: 600;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 7px;
          }

          h5 {
            font-size: 10px;
            font-weight: 700;
            color: #7c8080;
            margin-bottom: 2px;
            line-height: 15px;
          }
        }
      }
    }
  }
`;

export const DataItemDropdownContainer = styled.div`
  width: 147px;
  position: absolute;
  right: 20px;
  top: 60px;
  background: #fff;
  border-radius: 18px;
  z-index: 2;
  border: 1px solid #c6cccc;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
export const DataItemDropdownUl = styled.ul`
  position: relative;
  padding: 12px 0;
  background: #fff;
  border-radius: 18px;

  li {
    padding: 4px 20px;
    font-size: 14px;
    font-weight: 400;
    list-style-type: none;
    color: rgba(124, 128, 128, 1);
    cursor: pointer;
    &:hover {
      color: rgba(0, 194, 194, 1);
      background: rgba(0, 194, 194, 0.1);
      transition: all 0.3s;
    }
  }
  > div {
    position: absolute;
    top: -10px;
    right: 20px;
  }
`;
export const SlantArrow = styled.div`
  width: 19px;
  height: 19px;
  transform: matrix(0.78, 0.62, -0.78, 0.62, 0, 0);
  background: #fff;
  border-left: 1px solid #c6cccc;
  border-top: 1px solid #c6cccc;
`;
export const Table = styled.table`
  width: 100%;
  font-family: "Nunito";
  border-collapse: collapse;
  margin-top: 22px;

  .line__height {
    height: 30px;
  }
`;
export const TableHead = styled.tr`
  width: 100%;
  background-color: rgba(176, 220, 220, 0.2);
  margin-bottom: 20px;

  th {
    color: #00c2c2;
    text-align: left;
    padding: 10px 25px;
    font-weight: 700;
    font-size: 14px;
  }
`;
export const TableRow = styled.tr`
  width: 100%;

  &:hover {
    background-color: #f5f7f7;
  }
  .name__section {
    display: flex;
    align-items: center;

    img {
      width: 36px;
      margin-right: 9px;
    }
  }
  .report__view {
    background-color: #febf10;
    border-radius: 10px;
    color: #ffffff;
    box-shadow: 0px 10px 20px rgba(254, 191, 16, 0.25);
    padding: 4px 10px;
    width: 96px;
    text-align: center;
    cursor: pointer;
  }

  td {
    padding: 10px 25px;
    font-weight: 400;
    font-size: 14px;
  }
`;

export const TableCardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
  padding-top: 18px;
  padding-bottom: 30px;
`;

export const ReportCardTable = styled.table`
  width: 100%;
  font-family: "Nunito";
  border-collapse: collapse;
  margin-top: 22px;
  background-color: #f5f7f7;

  th {
    color: #00c2c2;
    font-weight: 700;
    padding: 11px;
    text-align: left;
    border-bottom: 1px solid #c6cccc;
  }
  th:nth-of-type(2),
  th:nth-of-type(3),
  td:nth-of-type(2),
  td:nth-of-type(3) {
    text-align: center;
  }
  td {
    color: #7c8080;
    font-weight: 400;
    padding: 11px;
    text-align: left;
    border-bottom: 1px solid #ffffff;
  }

  div.incorrect {
    background-color: rgba(249, 84, 84, 0.1);
    color: rgba(249, 84, 84, 1);
    border-radius: 10px;
    text-align: center;
    padding: 5px 10px;
    width: 80px;
    margin: 0 auto;
    font-weight: 400;
  }
  div.correct {
    background-color: rgba(48, 212, 104, 0.1);
    color: rgba(48, 212, 104, 1);
    border-radius: 10px;
    text-align: center;
    padding: 5px 10px;
    width: 80px;
    margin: 0 auto;
    font-weight: 400;
  }
  td.correct {
    color: rgba(48, 212, 104, 1);
    text-align: center;
    margin: 0 auto;
    font-weight: 700;
  }
  td.incorrect {
    color: rgba(249, 84, 84, 1);
    text-align: center;
    margin: 0 auto;
    font-weight: 700;
  }
`;

export const AccordionBody = styled.div`
  width: 100%;
  transition: height 0.2s ease-in-out;
  padding: 10px 20px;

  .mt-20 {
    margin-top: 20px;
  }

  .fw-bold {
    font-weight: 700;
  }
  .question__section {
    h2 {
      color: #7c8080;
      font-family: 400;
      margin-bottom: 20px;
      font-size: 14px;
    }
    h3 {
      color: #313333;
      font-family: 400;
      margin-bottom: 15px;
      font-size: 14px;
      margin-top: 20px;
    }

    .no-comment {
      font-style: italic;
      font-weight: 400;
      color: #949999;
      font-size: 12px;
    }
  }

  .comments__section {
    padding: 30px;
    border: 1px solid #c6cccc;
    border-radius: 35px;
    margin-bottom: 10px;

    .comments__details {
      width: 100%;
      padding: 18px 20px;
      color: #4a4d4d;
      line-height: 18px;
      border: 1px solid #dfe6e6;
      border-radius: 15px;
      margin-bottom: 22px;
    }

    .social__handle {
      color: #30d468;
      border: 1px solid #c6cccc;
      padding: 14px 20px;
      border-radius: 10px;
      margin-bottom: 22px;
      font-size: 13px;
      font-weight: 400;
      display: inline-block;
    }
    .media__contents {
      display: flex;
      flex-wrap: wrap;

      .media__box {
        max-width: 200px;
        width: 100%;
        height: 204px;
        margin-right: 22px;
        border-radius: 10px 10px 15px 15px;
        position: relative;
        border: 1px solid #dfe5e5;

        p {
          color: #4a4d4d;
          font-size: 14px;
          font-weight: 400;
          padding: 13px;
        }

        .has__video {
          position: absolute;
          top: 70px;
          left: 35px;
          color: #ffffff;
          padding: 11px 35px;
          border-radius: 10px;
          border: 1px solid #ffffff;
          font-size: 12px;
          font-weight: 700;
          text-align: center;
        }

        img {
          width: 100%;
          height: 161px;
          border-radius: 10px;
        }
      }
    }
  }

  .answer__row {
    display: flex;
    align-items: center;
  }

  .answer__column {
    display: flex;
    flex-direction: column;
  }

  .answer__box_col {
    display: flex;
    flex-direction: column;
    row-gap: 11px;
  }

  .answer__box {
    display: flex;
    align-items: center;
    column-gap: 11px;
    margin-right: 40px;
    margin-bottom: 10px;
  }

  .answer__wrapper {
    color: #313333;
    padding: 10px 21px;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    border: 1px solid #dfe6e6;
    border-radius: 12px;
    align-self: flex-start;
  }
  .answer__wrapper_other {
    color: #313333;
    padding: 10px 21px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    border: 1px solid #dfe6e6;
    border-radius: 9px;
    align-self: flex-start;
  }
  .answer__details {
    padding: 16px 15px;
    font-size: 13px;
    color: #4a4d4d;
    line-height: 18px;
    font-weight: 700;
    border: 1px solid #dfe6e6;
    border-radius: 12px;
    width: 80%;
    align-self: flex-start;
    margin-bottom: 20px;
  }

  .answer__play {
    color: #313333;
    padding: 10px 12px;
    text-align: center;
    border: 1px solid #dfe6e6;
    border-radius: 12px;
    display: flex;
  }
  .answer__play_primary {
    color: #ffffff;
    padding: 10px 12px;
    text-align: center;
    border: 1px solid #dfe6e6;
    border-radius: 10px;
    display: flex;
    background-color: #00c2c2;
    font-size: 13px;
    font-weight: 400;

    & svg {
      margin-left: 10px;
    }
  }
  .answer__play_secondary {
    color: #4a4d4d;
    padding: 10px 12px;
    text-align: center;
    border: 1px solid #febf10;
    border-radius: 10px;
    display: flex;
    font-size: 13px;
    font-weight: 400;

    & svg {
      margin-left: 10px;
    }
  }

  .answer__grade_green {
    border: 1px solid #30d568;
    border-radius: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    padding: 10px 21px;
    color: #30d568;
    display: flex;
    align-items: center;

    & svg {
      margin-left: 10px;
    }
  }

  .answer__grade_red {
    border: 1px solid #f95454;
    border-radius: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    padding: 10px 21px;
    color: #f95454;
    display: flex;
    align-items: center;

    & svg {
      margin-left: 10px;
      margin-top: 1px;
    }
  }
`;

export const SearchContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  > div {
    border: 1px solid #dfe5e5;
    border-radius: 12px;
    padding: 0 10px;

    svg {
      font-size: 24px;
      margin-right: 12px;
    }
  }
`;
