import UserSwitchHeader from "../../../components/UserSwitchHeader";
import { useNavigate } from "react-router-dom";
import {
  ButtonComponent as Button,
  SearchComponent as SearchBar,
} from "l-min-components/src/components";
import ArrowLeft from "../../../assets/svg/arrowLeft";
import { CourseDraftContainer, DraftContent } from "./index.styled";
import SelectDropdown from "../../../components/SelectDropdown";
import Sort from "../../../assets/svg/sort";

import DraftTable from "../components/draft table";

const CourseDraft = () => {
  const navigate = useNavigate();
  return (
    <CourseDraftContainer>
      <UserSwitchHeader title="Frank Language Expert" />
      <div className="header">
        <div className="action" onClick={() => navigate("/manage-courses")}>
          <ArrowLeft />
          <h1>Draft</h1>
        </div>
        <Button
          styles={{ paddingLeft: "15.5px", paddingRight: "15.5px" }}
          text="Create Course"
          onClick={() => navigate("/manage-courses/create-course")}
        />
      </div>
      <DraftContent>
        <div className="filter_section">
          <div>
            <SearchBar />
          </div>
          <SelectDropdown Icon={Sort} />
        </div>
        <div className="content">
          <DraftTable />
        </div>
      </DraftContent>
    </CourseDraftContainer>
  );
};

export default CourseDraft;
