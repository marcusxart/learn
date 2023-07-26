import { styled } from "styled-components";

export const EnrollCoursesContainer = styled.div``;

export const EnrollCoursesHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 29px;
  width: 100%;
  height: 95px;
  flex-shrink: 0;
  border-radius: 30.67px;
  background: #fff;
  gap: 12%;
  padding: 0 30px;
  > .wrap {
    display: flex;
    gap: 32px;
    width: 100%;
    flex: 1;
    align-items: center;
    > p {
      font-size: 18px;
      font-weight: 700;
    }
    > div {
      flex: 1;
    }
  }
`;

export const EnrollCourseContent = styled.div`
  border-radius: 30px;
  background: #fff;
  padding: 36px 0;
  > .search {
    margin-bottom: 20px;
    padding: 0 30px;
    max-width: 488px;
  }
`;

export const EnrollCourseListContainer = styled.div`
  .all_select {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 8px 30px;
    background-color: rgba(0, 194, 194, 0.1);
    svg {
      path {
        fill: #fff;
      }
    }
    p {
      color: #00c2c2;
      font-size: 14px;
      font-weight: 700;
    }
  }
  ul {
    list-style: none;
    gap: 38px;
    margin-top: 38px;
    display: flex;
    flex-direction: column;
  }
`;
export const EnrollCourseList = styled.li`
  display: flex;
  align-items: center;
  padding: 0 30px;
  width: 100%;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
  .left {
    display: flex;
    align-items: center;
    gap: 20px;
    svg {
      path {
        fill: #fff;
      }
    }
    .img_box {
      width: 176px;
      height: 81px;
      border-radius: 15px;
      overflow: hidden;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        background-color: #0c0d0d;
        opacity: 0.4;
        inset: 0;
        z-index: 3;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      display: flex;
      gap: 28px;
      align-items: center;
      .info {
        p {
          font-size: 12px;
          line-height: 24px;
        }
        p:first-child {
          color: #4a4d4d;
          font-weight: 700;
        }
        p:nth-child(2) {
          color: #636666;
        }

        .rate {
          display: flex;
          align-items: center;
          gap: 2px;
          span {
            margin-top: 2px;
            color: #adb2b2;
            font-size: 11px;
          }
          svg {
            path {
              fill: #f39b33;
            }
          }
        }
      }
    }
  }
`;
