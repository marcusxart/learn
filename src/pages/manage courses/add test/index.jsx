import React from "react";
import {
  AddTestContainer,
  AddTestContent,
  AddTestHeader,
} from "./index.styled";
import UserSwitchHeader from "../../../components/UserSwitchHeader";
import ArrowLeft from "../../../assets/svg/arrowLeft";
import {
  InputComponent as Input,
  ButtonComponent as Button,
} from "l-min-components/src/components";
import SettingIcon from "../../../assets/svg/settingIcon";

const AddTest = () => {
  return (
    <AddTestContainer>
      <UserSwitchHeader />
      <h1>
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
            </div>
            <div className="right">
              <div className="wrap">
                <p>Test General Settings</p>
                <SettingIcon />
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
      </AddTestContent>
    </AddTestContainer>
  );
};

export default AddTest;
