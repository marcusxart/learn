import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonComponent as Button,
  SearchComponent as SearchBar,
} from "l-min-components/src/components";

import {
  ActionHeader,
  ManageContainer,
  TableContainer,
} from "./style/index.styled";
import UserSwitchHeader from "../../components/UserSwitchHeader";
import Sort from "./../../assets/svg/sort";
import SelectDropdown from "../../components/SelectDropdown";
import ActiveCoursesTable from "./components/ActiveCoursesTable";
import CompleteCousesTable from "./components/CompleteCousesTable";

const ManageCourses = () => {
  const navigate = useNavigate();
  const [switchTab, setSwitchTab] = useState(1);
  return (
    <ManageContainer>
      <UserSwitchHeader title="Frank Language Expert " />
      <div className="header">
        <div className="action">
          <h1>Manage Courses</h1>
        </div>
        <div className="btn_wrap">
          <Button
            text="Create Course"
            onClick={() => navigate("/manage-courses/create-course")}
          />
          <button onClick={() => navigate("/manage-courses/draft")}>
            Draft
          </button>
        </div>
      </div>

      <TableContainer>
        <ActionHeader>
          <div className="action_tabs">
            <p
              className={switchTab === 1 ? "active" : ""}
              onClick={() => setSwitchTab(1)}
            >
              Active courses
            </p>
            <p
              className={switchTab === 2 ? "active" : ""}
              onClick={() => setSwitchTab(2)}
            >
              Completed courses
            </p>
          </div>
          <div className="filter_wrap">
            <div className="search">
              <SearchBar placeholder="Search by Name / Email / Username" />
            </div>
            <SelectDropdown Icon={Sort} />
          </div>
        </ActionHeader>
        {switchTab === 1 ? <ActiveCoursesTable /> : <CompleteCousesTable />}
      </TableContainer>
    </ManageContainer>
  );
};

export default ManageCourses;
