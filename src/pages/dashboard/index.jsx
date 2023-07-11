import { useState } from "react";
import { Link } from "react-router-dom";

import {
  DashboardContainer,
  MainContent,
  GraphSection,
  CoursesContainer,
  CourseBox,
  Grid,
} from "./index.styled";
import coursePhoto from "./../../assets/images/course_photo.png";
import Graph from "../../components/graph";
import UserSwitchHeader from "../../components/UserSwitchHeader";
import { FlashIcon } from "./../../assets/svg/flash";
import { StarIcon } from "../../assets/svg/star";
import { graphSideData } from "../../exports/dashboardExports";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);
  const lists = [1, 2, 3, 4, 5, 6];
  return (
    <DashboardContainer>
      <UserSwitchHeader title="Frank Language Expert " />
      <h1>Dashboard</h1>
      <MainContent>
        <div className="top__info__wrapper">
          <div className="top__wrap">
            <p>Courses</p>
            <div className="yellow">
              <FlashIcon />
              <span>17</span>
            </div>
          </div>
          <div className="top__wrap">
            <p>Avg Courses/student</p>
            <div className="green">
              <FlashIcon />
              <span>3.4 Courses</span>
            </div>
          </div>
          <div className="top__wrap">
            <p>Languages</p>
            <div className="green">
              <FlashIcon />
              <span>4 Languages</span>
            </div>
          </div>
          <div className="top__wrap">
            <p>Avg Interaction/Week</p>
            <div className="yellow">
              <FlashIcon />
              <span>12 hours</span>
            </div>
          </div>
        </div>
        <GraphSection>
          <div className="graph__wrapper">
            <Graph
              graph={{
                style: {
                  height: "250px",
                },
              }}
            />
          </div>
          <div className="graph_aside">
            {graphSideData.map((item, idx) => (
              <div key={idx}>
                <p>{item.month}</p>
                <span>{item.time}</span>
              </div>
            ))}
          </div>
        </GraphSection>
        <CoursesContainer>
          <div className="course__header">
            <div>
              <p
                className={activeTab === 1 ? "active" : ""}
                onClick={() => setActiveTab(1)}
              >
                Active courses
              </p>
              <p
                className={activeTab === 2 ? "active" : ""}
                onClick={() => setActiveTab(2)}
              >
                Completed courses
              </p>
            </div>
            <Link className="view_all" to="/manage-courses">
              Sell all
            </Link>
          </div>
          <div className="course__wrapper">
            <Grid>
              {lists.map((item, idx) => (
                <CourseBox key={idx}>
                  <div className="course__image">
                    <img src={coursePhoto} alt="course image" />
                  </div>
                  <div className="course__detail">
                    <h3>French for beginner learners</h3>
                    <p className="score">Avg score: 80%</p>
                    <p className="learners">70k learners</p>
                    <div className="rating">
                      <StarIcon />
                      <span>4.8</span>
                    </div>
                  </div>
                </CourseBox>
              ))}
            </Grid>
          </div>
        </CoursesContainer>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
