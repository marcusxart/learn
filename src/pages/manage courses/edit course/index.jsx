import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputComponent as InputField,
  DropDownComponent as DropDown,
  ButtonComponent as Button,
} from "l-min-components/src/components";
import {
  EditCourseContainer,
  EditFormContainer,
  EditForm,
} from "./index.styled";
import Checkbox from "../../../components/checkbox";
import UserSwitchHeader from "../../../components/UserSwitchHeader";
import ArrowLeft from "../../../assets/svg/arrowLeft";
import UploadFile from "../../../components/upload file";
import CustomDatePicker from "../../../components/custom date picker";
import DateInput from "../components/date input";

const EditCourse = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endtDate, setEndDate] = useState("");
  const navigate = useNavigate();
  // const [selected, setSelected] = useState();

  return (
    <EditCourseContainer>
      <UserSwitchHeader title="Frank Language Expert " />
      <div className="header" onClick={() => navigate("/manage-courses")}>
        <ArrowLeft />
        <h1>Edit Course</h1>
      </div>
      <EditFormContainer>
        <p className="header">Course details</p>
        <EditForm>
          <div className="first_section">
            <InputField label="Course name" />
            <InputField label="Course code" style={{ width: "316px" }} />
            <InputField label="Course description" />
          </div>
          <div className="upload_section">
            <UploadFile
              label="Course thumbnail"
              onSelect={setImage}
              value={image}
            />
            <UploadFile
              label="Course Introduction video/thumbnail"
              onSelect={setVideo}
              value={video}
              type="video"
            />
          </div>
          <div className="last_section">
            <div className="wrapper-1">
              <p className="header">Course Length</p>
              <div>
                <InputField label="Hours" placeholder="Enter total hours" />
              </div>
            </div>
            <div className="wrapper-2">
              <p className="header">Course duration</p>
              <div className="date-section">
                <div>
                  <p>Starts</p>
                  <CustomDatePicker
                    placeholder="DD/MM/YYYY"
                    CustomRender={DateInput}
                    setDate={setStartDate}
                    date={startDate}
                    label="Starts"
                  />
                </div>
                <div>
                  <p>Ends</p>
                  <CustomDatePicker
                    placeholder="DD/MM/YYYY"
                    CustomRender={DateInput}
                    setDate={setEndDate}
                    date={endtDate}
                    label="Starts"
                  />
                </div>
              </div>
              <Checkbox label="Users can only participate in the course between these dates" />
            </div>
            <div className="wrapper-3">
              <p className="header">Language</p>
              <div>
                <p>Course name</p>
                <DropDown
                  inputPlaceHolder="Le Francais"
                  dropdownData={["Le Francais", "Le Francais1"]}
                />
              </div>
            </div>
          </div>
          <Button text="Preview Course" />
        </EditForm>
      </EditFormContainer>
    </EditCourseContainer>
  );
};

export default EditCourse;
