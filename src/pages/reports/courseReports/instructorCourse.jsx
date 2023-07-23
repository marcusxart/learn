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

const InstructorCourse = () => {
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
            <th>Contract</th>
            <th>Graded</th>
            <th>Hours spent</th>
            <th>Rating</th>
          </TableHead>
          <tr className="line__height"> </tr>

          {testArray.map((item, idx) => (
            <TableRow key={idx}>
              <td>
                <div className="name__section">
                  <img src={avatar} alt="" />
                  Alfreds Futterkiste
                </div>{" "}
              </td>
              <td>2 Months+</td>
              <td>15</td>
              <td>30Hrs</td>
              <td>4.5</td>
            </TableRow>
          ))}
        </Table>
      </TableCardContainer>
    </DashboardContainer>
  );
};

export default InstructorCourse;
