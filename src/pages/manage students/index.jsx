import { useState } from "react";
import {
  ManageStudentContainer,
  ManageStudentWrapper,
  ManageStudentTableTabs,
} from "./index.styled";
import StudentsTable from "./components/students table";
import UserSwitchHeader from "../../components/UserSwitchHeader";
import SelectDropdown from "../../components/SelectDropdown";
import SortIcon from "../../assets/svg/sort";
import {
  ButtonComponent as Button,
  SearchComponent as SearchBar,
} from "l-min-components/src/components";
import ArchivedTable from "./components/archived table";
import PendingTable from "./components/pending table";
import StudentFilterModal from "./components/filter  modal";

const ManageStudents = () => {
  const [swtichTab, setSwitchTab] = useState(0);
  const [filterModal, setFilterModal] = useState(false);
  const tabs = ["Students (1.2k)", "Pending (150)", "Archived (50)"];
  return (
    <>
      {filterModal && (
        <StudentFilterModal close={() => setFilterModal(false)} />
      )}
      <ManageStudentContainer>
        <UserSwitchHeader title="Frank Language Expert" />
        <div className="header">
          <h1>Manage Students</h1>
          <Button
            text="Add Student"
            styles={{ fontSize: "14px", padding: "7px 15px" }}
          />
        </div>
        <ManageStudentWrapper>
          <div className="filter_section">
            <div className="search_wrap">
              <SearchBar placeholder="Search by Name / Email / Username" />
            </div>
            <span onClick={() => setFilterModal(true)}>
              <SelectDropdown Icon={SortIcon} />
            </span>
          </div>
          <ManageStudentTableTabs>
            {tabs.map((tab, idx) => (
              <p
                className={`${idx === swtichTab ? "active_tab" : ""}`}
                key={idx}
                onClick={() => setSwitchTab(idx)}
              >
                {tab}
              </p>
            ))}
          </ManageStudentTableTabs>
          {swtichTab === 0 && <StudentsTable />}
          {swtichTab === 1 && <PendingTable />}
          {swtichTab === 2 && <ArchivedTable />}
        </ManageStudentWrapper>
      </ManageStudentContainer>
    </>
  );
};

export default ManageStudents;
