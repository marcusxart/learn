import ArrowLeft from "../../assets/svg/arrowLeft";
import UserSwitchHeader from "../../components/UserSwitchHeader";
import {
  StudentReportDetailsContainer,
  StudentReportDetailsContent,
  StudentReportDetailsContentHeader,
  StudentReportDetailsTableWrapper,
} from "./index.styled";
import { student1 } from "../../assets/images/students";
import { ButtonComponent as Button } from "l-min-components/src/components";
import { studentDetail } from "../../exports/reportsExports";
import PublishModal from "./components/publish modal";
import { useState } from "react";
import Pencil from "../../assets/svg/pencil";

const StudentReportDetails = () => {
  const [togglePublish, setTogglePublish] = useState(false);
  return (
    <>
      {togglePublish && (
        <PublishModal
          name="Shaney Miller"
          close={() => setTogglePublish(false)}
        />
      )}
      <StudentReportDetailsContainer>
        <UserSwitchHeader title="Frank Language Expert" />
        <h1>
          <ArrowLeft />
          <span>Shaney Miller Test Result</span>
        </h1>
        <StudentReportDetailsContent>
          <h2>Report card</h2>
          <StudentReportDetailsContentHeader>
            <div className="left">
              <img src={student1} alt="" />
              <div>
                <p>Shaney Miller</p>
                <p>shaneymiller@learngual.com</p>
              </div>
            </div>
            <div className="right">
              <p>
                Grade: <span>85%</span>
              </p>
              <Button
                text="Publish Grade"
                styles={{ padding: "7.5px 15px", fontSize: "14px" }}
                onClick={() => setTogglePublish(true)}
              />
            </div>
          </StudentReportDetailsContentHeader>
          <StudentReportDetailsTableWrapper>
            <div className="header_wrap">
              <h3>Test 1; History in conjuction with language</h3>
              {/* <p>Add Score or Comment</p> */}
              <p>Result Published on April 8, 2023</p>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Question</th>
                  <th></th>
                  <th>Score</th>
                  <th>Edit Score</th>
                </tr>
              </thead>
              <tbody>
                {studentDetail.map((content, idx) => (
                  <tr key={idx}>
                    <td>
                      {idx + 1}. {content.title}
                    </td>
                    <td>
                      {content.type && (
                        <div className="badge">
                          <span>{content.type}</span>
                        </div>
                      )}
                    </td>
                    <td
                      className={`score ${
                        content.score > 50 ? "correct" : ""
                      } ${typeof content.score !== "number" ? "empty" : ""}`}
                    >
                      {content.score || content.score === 0
                        ? content.score + "%"
                        : "---"}
                    </td>
                    <td className="edit_box">
                      <div>
                        <Pencil />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <div className="footer_wrap">
              <p>View 7 other Tests by Shaney</p>
              <p>Result Published on April 8, 2023</p>
            </div> */}
          </StudentReportDetailsTableWrapper>
        </StudentReportDetailsContent>
      </StudentReportDetailsContainer>
    </>
  );
};

export default StudentReportDetails;
