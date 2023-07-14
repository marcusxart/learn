import styled from "styled-components";

export const CourseDetailscontainer = styled.div``;
export const CourseDetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding: 0 24px 0 10px;

  .course_details_back {
    display: flex;
    align-items: center;
    h1 {
      margin-left: 10px;
      font-size: 22px;
      color: #313333;
    }
  }
  .course_details_actions {
    display: flex;
    gap: 14px;
    svg {
      cursor: pointer;
    }
    button {
      box-shadow: 0px 7.72825813293457px 15.45651626586914px 0px
        rgba(254, 191, 16, 0.25);
    }
  }
`;
export const CourseDetailsMain = styled.div`
  padding: 20px 40px;
  margin-top: 20px;
  background: white;
  border-radius: 38px;
  min-height: 1082px;

  .course_details_tabs {
    display: flex;
    gap: 20px;
    .course_details_tab {
      position: relative;
      span {
        color: rgba(173, 178, 178, 1);
        font-weight: 700;
      }
      &.active {
        span {
          color: rgba(49, 51, 51, 1);
          &:nth-child(1) {
            margin-bottom: 10px;
          }
          &:nth-child(2) {
            width: 39px;
            height: 5px;
            background: rgba(0, 194, 194, 1);
            position: absolute;
            bottom: -5px;
            border-radius: 4px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
`;
