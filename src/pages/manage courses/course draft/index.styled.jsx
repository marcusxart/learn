import { styled } from "styled-components";
import { CourseTable } from "../../manage courses/style/table.styled";

export const CourseDraftContainer = styled.div`
  margin-left: auto;
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
  }
`;

export const DraftContent = styled.div`
  padding: 20px 22px;
  border-radius: 30px;
  background-color: #fff;
  width: 100%;
  min-height: 500px;
  .filter_section {
    display: flex;
    width: 100%;
    gap: 120px;
    align-items: center;
    margin-bottom: 20px;
    > div:first-child {
      flex: 1;
    }
  }
`;

export const DraftTableWrapper = styled(CourseTable)`
  button {
    padding: 8px 15px;
    font-size: 14px;
    box-shadow: 0px 7.72825813293457px 15.45651626586914px 0px
      rgba(254, 191, 16, 0.25);
  }

  .table_row {
    padding-top: 12px;
    padding-bottom: 12px;
    cursor: default;
    &:hover,
    &.active {
      background-color: #f5f7f7;
      p:first-child {
        color: #00c2c2;
      }
      p,
      span {
        color: #7c8080;
      }
    }
  }
`;
