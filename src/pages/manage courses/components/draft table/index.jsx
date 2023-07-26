import { ButtonComponent as Button } from "l-min-components/src/components";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { CourseTable } from "../../style/table.styled";

const DraftTable = () => {
  const testArr = [1, 1, 1];
  const navigate = useNavigate();
  return (
    <DraftTableWrapper>
      <div className="table_header">
        <p>Courses</p>
        <p>Course Code</p>
        <p>Lessons</p>
        <p></p>
      </div>
      {testArr.map((item, idx) => (
        <div className={`table_row `} key={idx}>
          <p className="nowrap_text">French for Complete beginners</p>
          <p>Course 00{idx + 1}</p>
          <p>23 lessons</p>
          <Button
            text="Continue"
            onClick={() => navigate("/manage-courses/create-course")}
          />
        </div>
      ))}
    </DraftTableWrapper>
  );
};

export default DraftTable;

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
