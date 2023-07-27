import { ButtonComponent } from "l-min-components/src/components";
import ArrowLeft from "../../../assets/svg/arrowLeft";
import {
  CourseDetailsHeader,
  CourseDetailsMain,
  CourseDetailscontainer,
} from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import CourseOverview from "./components/overview";
import CourseModules from "./components/module";
import UserSwitchHeader from "../../../components/UserSwitchHeader";
import CourseAnalytics from "./components/analytics";
// import DeleteIcon from "../../assets/svg/delete2";
// import DeleteCourseModal from "./components/deleteModal";

const CourseDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <>
      {/* {<DeleteCourseModal />} */}
      <CourseDetailscontainer>
        <UserSwitchHeader title="Frank Language Expert " />
        <CourseDetailsHeader>
          <div className="course_details_back" onClick={() => navigate(-1)}>
            <ArrowLeft />
            <h1>French for complete beginners</h1>
          </div>
          <div className="course_details_actions">
            {(activeTab === "overview" || activeTab === "analytics") && (
              <div className="btn_group">
                {state === "active-row" && activeTab === "overview" && (
                  <ButtonComponent
                    text="Participants"
                    type="secondary"
                    styles={{
                      padding: "5px 15px",
                      fontSize: "14px",
                    }}
                  />
                )}
                <ButtonComponent
                  text="Edit course"
                  styles={{
                    padding: "5px 15px",
                    fontSize: "14px",
                  }}
                />
              </div>
            )}
            {activeTab === "module" && (
              <ButtonComponent
                text="Add Module"
                type="secondary"
                styles={{
                  boxShadow: "none",
                  background: "transparent",
                  padding: "5px 15px",
                  fontSize: "14px",
                }}
              />
            )}
            {/* <ButtonComponent
              text="Manage class"
              styles={{
                padding: "5px 15px",
                fontSize: "14px",
              }}
            />
            <DeleteIcon /> */}
          </div>
        </CourseDetailsHeader>
        <CourseDetailsMain>
          <div className="course_details_tabs">
            <div
              className={`course_details_tab ${
                activeTab === "overview" ? "active" : ""
              }`}
              onClick={() => setActiveTab("overview")}
            >
              <span>Course overview</span>
              <span></span>
            </div>
            <div
              className={`course_details_tab ${
                activeTab === "module" ? "active" : ""
              }`}
              onClick={() => setActiveTab("module")}
            >
              <span>Module</span>
              <span></span>
            </div>
            <div
              className={`course_details_tab ${
                activeTab === "analytics" ? "active" : ""
              }`}
              onClick={() => setActiveTab("analytics")}
            >
              <span>Analytics</span>
              <span></span>
            </div>
          </div>
          {activeTab === "overview" && <CourseOverview />}
          {activeTab === "module" && <CourseModules />}
          {activeTab === "analytics" && <CourseAnalytics />}
        </CourseDetailsMain>
      </CourseDetailscontainer>
    </>
  );
};
export default CourseDetails;
