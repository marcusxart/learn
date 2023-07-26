import { CourseTable } from "../../style/table.styled";
import { StarIcon } from "../../../../assets/svg/star";

const ActiveCoursesTable = () => {
  const testArr = [1, 1, 1, 1];
  return (
    <CourseTable>
      <div className="table_header">
        <p>Courses</p>
        <p>Course Code</p>
        <p>Lessons</p>
        <p>Students</p>
        <p className="sm">Rating</p>
        <p className="sm">Size</p>
      </div>
      {testArr.map((item, idx) => (
        <div className="table_row" key={idx}>
          <p className="nowrap_text">French for Complete beginners</p>
          <p>Course 00{idx + 1}</p>
          <p>23 lessons</p>
          <p>70k learners</p>
          <p className="sm">
            <StarIcon width="18.5px" height="18.5px" />
            <span>4.8</span>
          </p>
          <p className="sm">200MB</p>
        </div>
      ))}
    </CourseTable>
  );
};

export default ActiveCoursesTable;
