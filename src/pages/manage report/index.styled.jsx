import { styled } from "styled-components";

import { CourseTable } from "../manage courses/style/table.styled";

export const ManageReportContainer = styled.div``;

export const ReportTable = styled(CourseTable)``;

export const ReportTableContainer = styled.div`
  margin-top: 20px;
  padding: 22px;
  background: #ffffff;
  border-radius: 30.6696px;
  min-height: 660px;
  .filter_header {
    display: flex;
    width: 100%;
    gap: 123px;
    margin-bottom: 20px;
    .search {
      width: 100%;
    }
  }
`;
