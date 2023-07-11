import { useState } from "react";
import { CourseTable } from "./style/table.styled";
import { StarIcon } from "../../assets/svg/star";
import More from "../../assets/svg/more";

const CompleteCousesTable = () => {
  const [toggleRow, setToggleRow] = useState(null);
  const testArr = [1, 1, 1, 1];

  return (
    <CourseTable>
      <div className="table_header">
        <p>Courses</p>
        <p>Course Code</p>
        <p>Lessons</p>
        <p>End date</p>
        <p>Last rating</p>
        <p className="sm">Size</p>
        <p className="action"></p>
      </div>
      {testArr.map((item, idx) => (
        <div
          className={`table_row ${toggleRow === idx ? "active" : ""}`}
          key={idx}
        >
          <p className="nowrap_text">French for Complete beginners</p>
          <p>Course 00{idx + 1}</p>
          <p>23 lessons</p>
          <p>70k learners</p>
          <p className="last_rating">
            <StarIcon width="18.5px" height="18.5px" />
            <span>4.8</span>
          </p>
          <p className="sm">200MB</p>
          <div className="action">
            <More
              onClick={() => {
                toggleRow === idx ? setToggleRow(null) : setToggleRow(idx);
              }}
            />
            {toggleRow === idx && (
              <ul className="dropdown">
                <li>Edit course</li>
                <li>Delete course</li>
              </ul>
            )}
          </div>
        </div>
      ))}
    </CourseTable>
  );
};

export default CompleteCousesTable;
