import { useState } from "react";
import {
  StudentsReportContainer,
  StudentsReportContent,
  StudentsReportActionHeader,
  StudentsReportTable,
} from "./index.styled";
import {
  SearchComponent as SearchBar,
  ButtonComponent as Button,
} from "l-min-components/src/components";
import UserSwitchHeader from "../../components/UserSwitchHeader";
import SelectDropdown from "../../components/SelectDropdown";
import ArrowLeft from "../../assets/svg/arrowLeft";
import Sort from "../../assets/svg/sort";
import { studentData } from "../../exports/reportsExports";
import PublishAllModal from "./components/publish all modal";

const StudentsReport = () => {
  const [togglePublishAll, setTogglePublishAll] = useState(false);
  return (
    <>
      {togglePublishAll && (
        <PublishAllModal close={() => setTogglePublishAll(false)} />
      )}

      <StudentsReportContainer>
        <UserSwitchHeader title="Frank Language Expert" />
        <h1>
          <ArrowLeft />
          <span>French for Beginners Report</span>
        </h1>
        <StudentsReportContent>
          <StudentsReportActionHeader>
            <div className="filter_wrap">
              <div className="search">
                <SearchBar />
              </div>
              <SelectDropdown Icon={Sort} />
            </div>
            <Button
              text="Publish Students’ Grades"
              styles={{
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              onClick={() => setTogglePublishAll(true)}
            />
          </StudentsReportActionHeader>
          <StudentsReportTable>
            <div className="table_head">
              <p>Name</p>
              <p>Rank</p>
              <p>Courses Enrolled</p>
              <p>Grade</p>
              <p>Result</p>
              <p className="action"></p>
            </div>
            <div className="table_body">
              {studentData.map((student, key) => (
                <div className="body_wrap" key={key}>
                  <div className="info">
                    <img src={student?.image} alt="" />
                    <div>
                      <p>{student.name}</p>
                    </div>
                  </div>
                  <p className="tab">{student?.rank}</p>
                  <p className="tab">{student?.coursesEnroll}</p>
                  <p className="tab">{student?.grade}</p>
                  <p className="tab pulished">
                    {student.isPublished ? "Pulished" : ""}
                  </p>
                  <div className="action">
                    <Button
                      text="View report"
                      styles={{ padding: "0px 15px" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </StudentsReportTable>
        </StudentsReportContent>
      </StudentsReportContainer>
    </>
  );
};

export default StudentsReport;
