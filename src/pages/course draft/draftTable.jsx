import { DraftTableWrapper } from "./styles";
import { ButtonComponent as Button } from "l-min-components/src/components";
import { useNavigate } from "react-router-dom";

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
