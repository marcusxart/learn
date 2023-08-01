import { useState } from "react";
import {
  ModuleItemContainer,
  ModuleItemHeader,
  LessonContainer,
  ModuleItemTestContainer,
  AddDropDown,
} from "./style";
import {
  ButtonComponent as Button,
  InputComponent as Input,
} from "l-min-components/src/components";
import EditIcon from "../../../../../assets/svg/editIcon";
import PlusIcon from "../../../../../assets/svg/plusIcon";
import ArrowUp from "../../../../../assets/svg/arrowUp";
import PlayMiniIcon from "../../../../../assets/svg/playMini";
import ExamIcon from "../../../../../assets/svg/examIcon";
import TrashIcon from "../../../../../assets/svg/trashIcon";
import TrashIcon2 from "../../../../../assets/svg/trashNoBorder";
import DeleteCourseModal from "../deleteModal";
import AddLessonModal from "../addLessonModal";
import EditLessonModal from "../editLessonModal";
import { useNavigate } from "react-router-dom";

const ModuleItem = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isToggleEdit, setTsToggleEdit] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [addLesson, setAddLesson] = useState(false);
  const [editLesson, setEditLesson] = useState(false);
  const navigate = useNavigate();
  const lessons = [
    "Greetings and salutation in French ",
    "Greetings and salutation in French ",
    "Greetings and salutation in French ",
    "Greetings and salutation in French ",
  ];

  return (
    <>
      {addLesson && <AddLessonModal close={() => setAddLesson(false)} />}
      {deleteModal && <DeleteCourseModal close={() => setDeleteModal(false)} />}
      {editLesson && <EditLessonModal close={() => setEditLesson(false)} />}
      <ModuleItemContainer>
        <ModuleItemHeader>
          {!isToggleEdit && (
            <>
              <p>Module 1</p>
              <div
                className="module_item_edit"
                onClick={() => setTsToggleEdit(true)}
              >
                <EditIcon />
                <span>Edit</span>
              </div>
            </>
          )}
          {isToggleEdit && (
            <div className="module_item_edit_action_header">
              <form action="">
                <Input
                  placeholder="Module 1"
                  style={{
                    width: "365px",
                  }}
                />
                <Button
                  text="Done"
                  type="secondary"
                  onClick={() => setTsToggleEdit(false)}
                  styles={{
                    height: "45px",
                    marginTop: "11px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                  }}
                />
              </form>
              <Button
                text="Delete"
                type="secondary"
                icon={{
                  jsx: TrashIcon2,
                  left: true,
                }}
                onClick={() => setDeleteModal(true)}
                styles={{
                  height: "45px",
                  marginTop: "11px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  color: "#F95454",
                  background: "rgba(249, 84, 84, 0.10)",
                  border: "none",
                }}
              />
            </div>
          )}
        </ModuleItemHeader>
        <LessonContainer>
          <div className="module_item_lesson_header">
            <div>
              <p>Lesson 1</p>
              <ArrowUp />
            </div>
            {isToggleEdit && <EditIcon onClick={() => setEditLesson(true)} />}
          </div>
          <ul className="module_item_lessons">
            {lessons?.map((lesson, idx) => (
              <li key={idx}>
                <div className="lesson_title">
                  <PlayMiniIcon />
                  <p>{lesson}</p>
                </div>
                {isToggleEdit && (
                  <div className="lesson_actions">
                    <TrashIcon onClick={() => setDeleteModal(true)} />
                    <EditIcon />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </LessonContainer>
        <ModuleItemTestContainer>
          <span className="line"></span>
          <div className="test_left_content">
            <ExamIcon />
            <div className="test_title_wrap">
              <h2>Mid Term Test</h2>
              <div>
                <span></span>
                <p>14 questions</p>
              </div>
            </div>
          </div>
          <div className="test_center_content">
            <p>
              <span>Starts:</span> 25th May 2023 | 10:00AM
            </p>
            <p>
              <span>Deadline:</span> 25th May 2023 | 10:00AM
            </p>
          </div>
          <div className="test_right_content">
            <div className="module_item_edit">
              <EditIcon />
              <span>Edit</span>
            </div>
            <TrashIcon />
          </div>
        </ModuleItemTestContainer>
        {!isToggleEdit && (
          <AddDropDown>
            <div className="add_action" onClick={() => setIsToggle(!isToggle)}>
              <PlusIcon />
              <span>Add</span>
            </div>
            {isToggle && (
              <div className="add_dropdown_container">
                <ul>
                  <li
                    onClick={() => {
                      setAddLesson(true);
                      setIsToggle(false);
                    }}
                  >
                    Add Lesson
                  </li>
                  <li onClick={() => navigate("/manage-courses/add-test")}>
                    Add Test
                  </li>
                  <li>Add Module</li>
                </ul>
              </div>
            )}
          </AddDropDown>
        )}
      </ModuleItemContainer>
    </>
  );
};
export default ModuleItem;
