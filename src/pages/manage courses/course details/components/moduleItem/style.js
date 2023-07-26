import styled from "styled-components";

export const ModuleItemContainer = styled.div`
  .module_item_edit {
    display: flex;
    align-items: center;
    border-radius: 9.274px;
    background: rgba(254, 191, 16, 0.2);
    border: none;
    padding: 9px 10px;
    gap: 8px;
    cursor: pointer;

    span {
      color: #febf10;
      font-size: 14px;
      font-weight: 700;
    }
  }
`;

export const ModuleItemHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 12px;
  p {
    color: #313333;
    font-size: 16px;
    font-weight: 700;
    line-height: 40px;
    border-radius: 12px;
    padding: 5px 20px;
    border: 1px solid #dfe5e5;
  }
  .module_item_edit_action_header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    form {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    button {
      svg {
        path {
          stroke: #f95454;
        }
      }
    }
  }
`;

export const LessonContainer = styled.div`
  .module_item_lesson_header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 17px;
      p {
        color: #009999;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px; /* 150% */
      }
    }
    svg {
      cursor: pointer;
      path {
        stroke: #7c8080;
      }
    }
  }

  .module_item_lessons {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;

    li {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      .lesson_title {
        display: flex;
        align-items: center;
        p {
          color: #0c0d0d;
          font-size: 14px;
          font-weight: 400;
          line-height: 40px; /* 285.714% */
        }
      }

      .lesson_actions {
        display: flex;
        align-items: center;
        gap: 20px;
        svg {
          cursor: pointer;
        }
        svg:last-child {
          path {
            stroke: #7c8080;
          }
        }
      }
    }
  }
`;

export const ModuleItemTestContainer = styled.div`
  width: 672px;
  height: 74px;
  margin-bottom: 30px;
  flex-shrink: 0;
  border-radius: 13px;
  border: 1px solid #b0dcdc;
  background: #f4fbfb;
  position: relative;
  display: flex;
  align-items: center;
  .line {
    display: inline-block;
    width: 8px;
    height: 62px;
    border-radius: 21px;
    background: var(--secondary-color-main, #00c2c2);
  }

  .test_left_content {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: 16px;
    .test_title_wrap {
      h2 {
        color: #0c0d0d;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        margin-bottom: 2px;
      }
      > div {
        display: flex;
        gap: 8px;
        align-items: center;
        span {
          width: 6px;
          height: 6px;
          display: inline-block;
          background: #00c2c2;
          border-radius: 50%;
        }
      }
    }
  }

  .test_center_content {
    margin-left: 70px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    p {
      color: #00c2c2;
      font-size: 12px;
      line-height: 18px;
    }
  }

  .test_right_content {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-left: 54px;
  }
`;

export const AddDropDown = styled.div`
  position: relative;
  .add_action {
    width: 115px;
    height: 40px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
    padding-left: 12px;
    border: 1px solid #c6cccc;
    background: #f5f7f7;
  }

  .add_dropdown_container {
    position: absolute;
    background-color: #fff;
    left: 0;
    margin-top: 5px;
    span {
      display: inline-block;
    }
    ul {
      border-radius: 20px;
      box-shadow: 0px 10px 20px 0px rgba(139, 139, 139, 0.25);
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 20px;
      width: 147px;
      li {
        color: #7c8080;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        cursor: pointer;
      }
    }
  }
`;
