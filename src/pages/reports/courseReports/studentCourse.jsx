import { useState } from "react";
import {
  TableCardContainer,
  DashboardContainer,
  Table,
  TableRow,
  TableHead,
  SearchContainer,
} from "../index.styled";
import avatar from "../../../assets/images/dashboardImage.png";
import { NavLink } from "react-router-dom";
import { SearchComponent } from "l-min-components/src/components";
import ArrowLeft from "../../../assets/svg/arrowLeft";

const StudentsCourse = (props) => {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <DashboardContainer>
      <div className="courses__tab">
        <h1> Reports: </h1>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/reports"
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

      <div className="header__section">
        <h1>
          <ArrowLeft /> French for Beginners Report
        </h1>
      </div>
      <TableCardContainer>
        <SearchContainer>
          <SearchComponent
            placeholder="Search by Name / Email / Username"
            outlineColor="transparent"
          />
        </SearchContainer>
        <Table>
          <TableHead>
            <th>Name</th>
            <th>All courses</th>
            <th>Completion rate</th>
            <th>Grades</th>
            <th></th>
          </TableHead>
          <tr className="line__height"> </tr>

          {testArray.map((item, idx) => (
            <TableRow>
              <td>
                <div className="name__section">
                  <img src={avatar} alt="" />
                  Alfreds Futterkiste
                </div>{" "}
              </td>
              <td>23</td>
              <td>45%</td>
              <td>20%</td>
              <td>
                {" "}
                <div className="report__view"> View report </div>{" "}
              </td>
            </TableRow>
          ))}
        </Table>
      </TableCardContainer>
    </DashboardContainer>
  );
};

export default StudentsCourse;
