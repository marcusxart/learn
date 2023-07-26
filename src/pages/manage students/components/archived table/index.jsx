import { styled } from "styled-components";
import { CourseTable } from "../../../manage courses/style/table.styled";
const ArchivedTable = () => {
  const testArr = [1, 1, 1, 1];
  return (
    <TableContainer>
      <div className="table_header">
        <p>Course Name</p>
        <p>Course Code</p>
        <p>Archived Students</p>
      </div>
      <div className="wrap_row">
        {testArr.map((item, idx) => (
          <div className="table_row" key={idx}>
            <p className="nowrap_text">French for Complete beginners</p>
            <p>Course 00{idx + 1}</p>
            <p>50{idx + 1} learners</p>
          </div>
        ))}
      </div>
    </TableContainer>
  );
};

export default ArchivedTable;

const TableContainer = styled(CourseTable)`
  min-height: 400px;
  .table_header,
  .table_row {
    p {
      width: 120px;
    }
  }

  .table_header {
    padding: 14px 40px;
    border-radius: 0;
  }

  .wrap_row {
    padding: 0 22px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
