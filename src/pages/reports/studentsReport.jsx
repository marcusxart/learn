import { useState } from "react";
import {
  CardContainer,
  CourseListContainer,
  GraphContainer,
  DashboardContainer,
  DataItemDropdownContainer,
  DataItemDropdownUl,
  SlantArrow,
} from "./index.styled";
import photo from "../../assets/images/course_photo.png";
import { StarIcon } from "../../assets/svg/star";
import { useNavigate } from "react-router-dom";
import { GraphUpIcon } from "../../assets/svg/graphUp";
import { FlashIcon } from "../../assets/svg/flash";
import { GraphDownIcon } from "../../assets/svg/graphdown";
import GraphChart from "./graphdata";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const StudentsReport = (props) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);
  const [activeTab, setActiveTab] = useState(1);
  const [show, setShow] = useState(false);
  console.log(value);

  const testArray = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <DashboardContainer>
      <div className="courses__tab">
        <h1> Reports: </h1>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/reports/students"
        >
          Students
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeI" : "")}
          to="/reports/instructor"
        >
          Instructor
        </NavLink>
      </div>
      <CardContainer>
        <GraphContainer>
          <div className="graph__header">
            <h2>Learning statistics </h2>
            <div className="select__period" onClick={() => setShow(!show)}>
              This week <FaChevronDown />{" "}
            </div>
            {show && (
              <DataItemDropdownContainer>
                <DataItemDropdownUl>
                  <li>Week</li>
                  <li>Month</li>
                  <SlantArrow />
                </DataItemDropdownUl>
              </DataItemDropdownContainer>
            )}
          </div>
          <div className="graph__score">
            <GraphChart width={550} height={250} />
            <div className="graph__score_step">
              <p>
                <span className="green">.</span>
                French{" "}
              </p>
              <p>
                <span className="yellow">.</span> Mandarin
              </p>
            </div>
          </div>
        </GraphContainer>

        <CourseListContainer>
          <div className="sd_enterprise__info">
            <div className="sdei_container">
              <h4> Courses </h4>
              <div className="sdei__box" style={{ width: 115 }}>
                {" "}
                <FlashIcon /> 17
              </div>
            </div>
            <div className="sdei_container">
              <h4> Avg Courses/student </h4>
              <div className="sdei__box_green">
                <FlashIcon stroke={"#30D468"} /> 3.4 courses
              </div>
            </div>
            <div className="sdei_container">
              <h4> Avg Interaction/Week </h4>
              <div className="sdei__box">
                <FlashIcon /> 62
              </div>
            </div>

            <div className="sdei_container">
              <h4> Class Peformance </h4>
              <div className="sdei__box_green"> 67% Passed</div>
            </div>
            <div className="sdei_container">
              <h4> Student Improvement </h4>
              <div className="sdei__box">
                <GraphUpIcon /> 6.270
              </div>
            </div>
          </div>

          <h2> Average Grades </h2>

          <div className="course_list__contents">
            {testArray.map((item, idx) => (
              <div
                className="course__info_wrapper"
                onClick={() => navigate("/reports/students/id")}
              >
                <h3> French </h3>
                <div className="course__info_box">
                  <div className="progress__bar">
                    <CircularProgressbar
                      value={70}
                      text={"70%"}
                      maxValue={100}
                      styles={buildStyles({
                        rotation: 0.25,
                        strokeLinecap: "butt",
                        textSize: "18px",
                        pathTransitionDuration: 0.5,
                        textColor: "#4A4D4D",
                        trailColor: "#DFE5E5",
                      })}
                    />
                  </div>
                  <div className="clcd_grades_desc">
                    <div className="grades"> Grades</div>
                    <h5> Student’s average in this course</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="show__more">Show more</button>
        </CourseListContainer>
      </CardContainer>
    </DashboardContainer>
  );
};

export default StudentsReport;
