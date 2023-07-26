import { useState } from "react";
import ArrowLeft from "../../../assets/svg/arrowLeft";
import UserSwitchHeader from "../../../components/UserSwitchHeader";
import {
  AddStudentBtnGroup,
  AddStudentContainer,
  AddStudentContent,
  AddStudentInputsWrappper,
} from "./index.styled";
import MultiSelectDropdown from "../../../components/selectCoursesDropdown";
import CopyIcon from "../../../assets/svg/copyIcon";
import { ButtonComponent as Button } from "l-min-components/src/components";

const AddStudent = () => {
  const [value, setValue] = useState([]);
  return (
    <AddStudentContainer>
      <UserSwitchHeader />
      <h1>
        <ArrowLeft />
        <span>Add Students</span>
      </h1>
      <AddStudentContent>
        <AddStudentInputsWrappper>
          <div className="input_container">
            <p className="label">Select course</p>
            <MultiSelectDropdown
              courses={[
                "French for Complete beginners",
                "French for Complete beginners2",
                "French for Complete beginners3",
                "French for Complete beginners4",
                "French for Complete beginners5",
              ]}
              onChange={setValue}
              value={value}
              audienceDropdown
            />
          </div>
          <div className="textarea_container">
            <p className="label">Enter email addresses</p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="seperate each email with a comma “,” e.g (example@gmail.com, example@gmail.com)"
            ></textarea>
          </div>
        </AddStudentInputsWrappper>
        <AddStudentBtnGroup>
          <div className="top">
            <span>OR</span>
            <Button
              text="Upload File"
              type="secondary"
              icon={{
                jsx: CopyIcon,
                left: true,
              }}
            />
          </div>
          <div className="bottom">
            <Button text="Add Students" />
          </div>
        </AddStudentBtnGroup>
      </AddStudentContent>
    </AddStudentContainer>
  );
};

export default AddStudent;
