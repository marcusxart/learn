import ArrowLeft from "../../assets/svg/arrowLeft";
import UserSwitchHeader from "../../components/UserSwitchHeader";
import {
  TestReportsContainer,
  TestReportsContentContainer,
  TestReportsTable,
} from "./index.styled";

const TestReports = () => {
  return (
    <TestReportsContainer>
      <UserSwitchHeader title="Frank Language Expert " />
      <h1>
        <ArrowLeft />
        <span>French for Beginners Report</span>
      </h1>
      <TestReportsContentContainer>
        <h2>
          <span>Tests</span>
        </h2>
        <TestReportsTable>
          <div className="table_head">
            <p>Test</p>
            <p>Questions</p>
            <p className="sm">Average Grade</p>
            <p>Submissions</p>
            <p className="sm">Result</p>
            <p>Due Date</p>
          </div>
          <div className="table_body">
            <div className="body_wrap">
              <p>Frenchist Test</p>
              <p>14 questions</p>
              <p className="sm success">84%</p>
              <p>14 Submissions</p>
              <p className="sm published">Published</p>
              <p>Jan 11 2023</p>
            </div>
            <div className="body_wrap">
              <p>Frenchist Test</p>
              <p>14 questions</p>
              <p className="sm fail">14%</p>
              <p>14 Submissions</p>
              <p className="sm published">Published</p>
              <p>Jan 11 2023</p>
            </div>
            <div className="body_wrap">
              <p>Frenchist Test</p>
              <p>14 questions</p>
              <p className="sm fail">14%</p>
              <p>14 Submissions</p>
              <p className="sm"></p>
              <p>Jan 11 2023</p>
            </div>
          </div>
        </TestReportsTable>
      </TestReportsContentContainer>
    </TestReportsContainer>
  );
};

export default TestReports;
