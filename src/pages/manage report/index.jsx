import UserSwitchHeader from "../../components/UserSwitchHeader";
import {
  ManageReportContainer,
  ReportTable,
  ReportTableContainer,
} from "./index.styled";
import { StarIcon } from "../../assets/svg/star";
import {
  // ButtonComponent as Button,
  SearchComponent as SearchBar,
} from "l-min-components/src/components";
import SelectDropdown from "../../components/SelectDropdown";
import Sort from "../../assets/svg/sort";

const ManageReport = () => {
  const testArr = [1, 2, 3, 4, 5];
  return (
    <ManageReportContainer>
      <UserSwitchHeader title="Frank Language Expert " />
      <ReportTableContainer>
        <div className="filter_header">
          <div className="search">
            <SearchBar placeholder="Search by Name / Email / Username" />
          </div>

          <SelectDropdown Icon={Sort} />
        </div>
        <ReportTable>
          <div className="table_header">
            <p>Courses</p>
            <p>Lessons</p>
            <p>Students</p>
            <p className="sm">Rating</p>
          </div>
          {testArr.map((item, idx) => (
            <div className="table_row" key={idx}>
              <p className="nowrap_text">French for Complete beginners</p>
              <p>23 lessons</p>
              <p>70k learners</p>
              <p className="sm">
                <StarIcon width="18.5px" height="18.5px" />
                <span>4.8</span>
              </p>
            </div>
          ))}
        </ReportTable>
      </ReportTableContainer>
    </ManageReportContainer>
  );
};

export default ManageReport;
