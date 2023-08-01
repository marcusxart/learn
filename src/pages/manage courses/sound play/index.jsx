import React, { useState } from "react";
import TestQuestionWrapper from "../../../components/test question wrapper";
import {
  SoundPlayContainer,
  SoundPlayHeader,
  SoundPlayForm,
} from "./index.styled";
import SettingIcon from "../../../assets/svg/settingIcon";
import {
  InputComponent as Input,
  ButtonComponent as Button,
} from "l-min-components/src/components";
import Delete from "../../../assets/svg/delete2";
import PlusIcon from "../../../assets/svg/plusIcon";
import InputWithCount from "../../../components/input  with count";
import SoundPlaySettings from "../components/test settings modals/sound play settings";
import SoundPlayPreview from "../components/preview modals/sound play preview";

const SoundPlay = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);
  return (
    <>
      {openSettings && (
        <SoundPlaySettings close={() => setOpenSettings(false)} />
      )}
      {openPreview && <SoundPlayPreview close={() => setOpenPreview(false)} />}
      <TestQuestionWrapper
        title="Sound Play Question"
        onClickPreview={() => setOpenPreview(true)}
      >
        <SoundPlayContainer>
          <SoundPlayHeader>
            <h2>Questions</h2>
            <SettingIcon onClick={() => setOpenSettings(true)} />
          </SoundPlayHeader>
          <SoundPlayForm>
            <div className="title_input">
              <Input
                label="Question Title"
                placeholder="Pronounce the following correctly"
              />
            </div>
            <div className="question_wrapper">
              <div className="wrap">
                <InputWithCount
                  placeholder="Input word/phrase/sentence here. Not more than 80 characters"
                  max={80}
                  label="Question 1"
                />
                <Delete />
              </div>
              <div className="wrap">
                <InputWithCount
                  placeholder="Input word/phrase/sentence here. Not more than 80 characters"
                  max={80}
                  label="Question 2"
                />
                <Delete />
              </div>
            </div>
            <div className="add_btn">
              <Button
                text="Add question"
                type="secondary"
                icon={{
                  jsx: PlusIcon,
                  left: true,
                }}
              />
            </div>
            <Button
              text="Save changes"
              styles={{
                width: "100%",
                boxShadow: " 0px 10px 20px 0px rgba(254, 191, 16, 0.25)",
              }}
            />
          </SoundPlayForm>
        </SoundPlayContainer>
      </TestQuestionWrapper>
    </>
  );
};

export default SoundPlay;
