import { useState } from "react";
import {
  DropDownComponent as DropDown,
  ButtonComponent as Button,
  SearchComponent as SearchBar,
  Checkbox,
} from "l-min-components/src/components";
import image from "../../../../assets/images/enroll-image.png";
import {
  EnrollCoursesContainer,
  EnrollCoursesHeader,
  EnrollCourseContent,
  EnrollCourseListContainer,
  EnrollCourseList,
} from "./index.styled";
import { StarIcon } from "../../../../assets/svg/star";
import TrashIcon from "../../../../assets/svg/trashIcon2";
import WarningModal from "../../../../components/warning modal";

const EnrollCourses = () => {
  const [deleteModal, setDeleteModal] = useState(null);
  const dropdownData = [
    { value: "course 1", name: "Course 1" },
    { value: "course 2", name: "Course 2" },
  ];
  const testArr = [1, 1, 1, 1];
  return (
    <>
      {deleteModal && (
        <WarningModal
          message={`Are you sure you want to remove ${deleteModal?.name} from this course ?`}
          cancel={() => setDeleteModal(null)}
        />
      )}
      <EnrollCoursesContainer>
        <EnrollCoursesHeader>
          <div className="wrap">
            <p>Enroll student</p>
            <div>
              <DropDown
                dropdownData={dropdownData}
                inputPlaceHolder="Select course"
              />
            </div>
          </div>
          <Button
            text="Add to course"
            styles={{
              fontSize: "14px",
              height: "40px",
              boxShadow: "0px 10px 20px 0px rgba(254, 191, 16, 0.25)",
            }}
          />
        </EnrollCoursesHeader>
        <EnrollCourseContent>
          <div className="search">
            <SearchBar />
          </div>
          <EnrollCourseListContainer>
            <div className="all_select">
              <Checkbox color="#FEBF10" />
              <p>Course Enrolled</p>
            </div>
            <ul>
              {testArr.map((item, idx) => (
                <EnrollList
                  key={idx}
                  deleteAction={() => setDeleteModal({ name: "Shanlry" })}
                />
              ))}
            </ul>
          </EnrollCourseListContainer>
        </EnrollCourseContent>
      </EnrollCoursesContainer>
    </>
  );
};

const EnrollList = ({ deleteAction }) => {
  return (
    <EnrollCourseList>
      <div className="left">
        <Checkbox />
        <div className="content">
          <div className="img_box">
            <img src={image} alt="" />
          </div>
          <div className="info">
            <p>French for Beginners</p>
            <p>Course001</p>
            <div className="rate">
              <StarIcon
                height="18px"
                width="18px"
                fill="rgba(243, 155, 51, 1)"
              />
              <span>4.8</span>
            </div>
          </div>
        </div>
      </div>
      <TrashIcon onClick={deleteAction} />
    </EnrollCourseList>
  );
};
export default EnrollCourses;
