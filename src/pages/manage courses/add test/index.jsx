import React, { useState } from "react";
import {
  AddTestContainer,
  AddTestContent,
  AddTestHeader,
  AddTestTableWrapper,
} from "./index.styled";
import UserSwitchHeader from "../../../components/UserSwitchHeader";
import ArrowLeft from "../../../assets/svg/arrowLeft";
import {
  InputComponent as Input,
  ButtonComponent as Button,
} from "l-min-components/src/components";
import SettingIcon from "../../../assets/svg/settingIcon";
import EditIcon from "../../../assets/svg/editIcon";
import TrashIcon from "../../../assets/svg/trashIcon2";
import PlusIcon from "../../../assets/svg/plusIcon";
import DisplayResutModal from "../components/displayResultModal";
import { useNavigate } from "react-router-dom";

const AddTest = () => {
  const [toggleAddDropdown, setToggleAddDropdown] = useState(false);
  const [resultModal, setResultModal] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {resultModal && <DisplayResutModal close={() => setResultModal(false)} />}
      <AddTestContainer>
        <UserSwitchHeader />
        <h1 onClick={() => navigate("/manage-courses/details")}>
          <ArrowLeft />
          <span>Add Test</span>
        </h1>
        <AddTestContent>
          <AddTestHeader>
            <div className="top">
              <div className="action_wrap">
                <Input
                  label="Test Title"
                  placeholder="Mid term test"
                  style={{
                    width: "400px",
                  }}
                />
                <Button
                  text="Edit"
                  type="secondary"
                  icon={{
                    jsx: EditIcon,
                    left: true,
                  }}
                />
              </div>
              <div className="right">
                <div className="wrap">
                  <p>Test General Settings</p>
                  <SettingIcon onClick={() => setResultModal(true)} />
                </div>
              </div>
            </div>
            <div className="bottom">
              <p>
                Starts: <span>25th May 2023 | 10:00AM</span>
              </p>
              <p>
                Deadline: <span>25th May 2023 | 10:00AM</span>
              </p>
            </div>
          </AddTestHeader>
          <AddTestTableWrapper>
            <div className="t_head">
              <div className="row">
                <p>No</p>
                <p>Question Title</p>
                <p>Question Type</p>
                <p>Actions</p>
              </div>
            </div>
            <div className="t_body">
              <div className="row">
                <div>
                  <span>1</span>
                </div>
                <div>
                  <span>Write an essay on your first day...</span>
                </div>
                <div>
                  <span>Write Essay</span>
                </div>
                <div>
                  <EditIcon />
                  <TrashIcon />
                </div>
              </div>
              <div className="row">
                <div>
                  <span>2</span>
                </div>
                <div>
                  <span>Pronounce the word below</span>
                </div>
                <div>
                  <span>Sound Play</span>
                </div>
                <div>
                  <EditIcon />
                  <TrashIcon />
                </div>
              </div>
            </div>
          </AddTestTableWrapper>
          <div className="add_question">
            <button
              onClick={() => {
                setToggleAddDropdown(!toggleAddDropdown);
              }}
            >
              <PlusIcon />
              <span>Click to add question</span>
            </button>
            {toggleAddDropdown && (
              <ul>
                <li>Write Essay</li>
                <li>Sound Play</li>
                <li>Word Play</li>
                <li>Dialogue</li>
                <li>Practice Reading </li>
                <li>Q&A Quiz </li>
                <li>Match Pairs </li>
              </ul>
            )}
          </div>
          <Button
            text="Save Test"
            styles={{
              width: "100%",
              marginBottom: "150px",
              boxShadow: " 0px 10px 20px 0px rgba(254, 191, 16, 0.25)",
            }}
          />
        </AddTestContent>
      </AddTestContainer>
    </>
  );
};

export default AddTest;
