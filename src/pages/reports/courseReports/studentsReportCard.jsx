import { useState } from "react";
import {
  CardContainer,
  DashboardContainer,
  ReportCardTable,
} from "../index.styled";
import ArrowLeft from "../../../assets/svg/arrowLeft";
import avatar from "../../../assets/images/dashboardImage.png";

const StudentsReportCard = (props) => {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <DashboardContainer>
      <div className="header__section">
        <h1>
          <ArrowLeft /> Shaney Miller Test Result
        </h1>
      </div>
      <CardContainer>
        <div className="title__header">
          <h1>Report card </h1>
        </div>
        <div className="students__profile">
          <div className="avatar__img">
            <img src={avatar} alt="" />
          </div>

          <div className="students__details">
            <h5> Shaney Miller</h5>
            <h6>shaneymiller@learngual.com </h6>
          </div>
        </div>

        <div className="reports__section">
          <h3>Here's how Shaney Miller is doing </h3>
          <div className="single__course_report">
            <p> Test 1; History in conjuction with language</p>{" "}
            <span> Add Grade or Comment</span>
          </div>
        </div>

        <div className="report__card_wrapper">
          <ReportCardTable>
            <tr>
              <th> Question (Essay, essay, dailogue e.t.c) </th>
              <th> Status </th>
              <th> Grades</th>
            </tr>

            <tr>
              <td> Word play </td>
              <td>
                {" "}
                <div className="incorrect"> incorrect</div>{" "}
              </td>
              <td className="incorrect"> 9%</td>
            </tr>
            <tr>
              <td> Essay </td>
              <td>
                {" "}
                <div className="correct"> incorrect</div>{" "}
              </td>
              <td className="correct"> 7%</td>
            </tr>
          </ReportCardTable>
        </div>
      </CardContainer>
    </DashboardContainer>
  );
};

export default StudentsReportCard;
