import { useState } from "react";
import {
  StudentEnrollContainer,
  StudentEnrollHeader,
  StudentEnrollTabs,
} from "./imdex.styled";
import { student1 } from "../../../assets/images/students";
import ArrowLeft from "../../../assets/svg/arrowLeft";
import UserSwitchHeader from "../../../components/UserSwitchHeader";
import { ButtonComponent as Button } from "l-min-components/src/components";
import EnrollCourses from "../components/enroll courses";
import { useNavigate } from "react-router-dom";
import EnrollAnalytics from "../components/enroll analytics";

const StudentEnroll = () => {
  const [switchTab, setSwitchTab] = useState(0);
  const navigate = useNavigate();
  return (
    <StudentEnrollContainer>
      <UserSwitchHeader title="Frank Language Expert" />
      <StudentEnrollHeader>
        <div className="left">
          <ArrowLeft />
          <div className="info">
            <img src={student1} alt="" />
            <div>
              <p>Shaney Miller</p>
              <span>@shaneymil</span>
            </div>
          </div>
        </div>
        <div className="right">
          <p>25 Courses Enrolled</p>
          <Button
            text="Message"
            styles={{
              width: "110px",
              fontSize: "14px",
              padding: "7px 15px ",
              boxShadow: "0px 10px 20px 0px rgba(254, 191, 16, 0.25)",
            }}
            onClick={() => navigate("/messages")}
          />
        </div>
      </StudentEnrollHeader>
      <StudentEnrollTabs>
        <p
          className={`${switchTab === 0 ? "active_tab" : ""}`}
          onClick={() => setSwitchTab(0)}
        >
          Courses
        </p>
        <p
          className={`${switchTab === 1 ? "active_tab" : ""}`}
          onClick={() => setSwitchTab(1)}
        >
          Analytics
        </p>
      </StudentEnrollTabs>
      {switchTab === 0 && <EnrollCourses />}
      {switchTab === 1 && <EnrollAnalytics />}
    </StudentEnrollContainer>
  );
};

export default StudentEnroll;
