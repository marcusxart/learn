import React, { useState } from "react";
import TestQuestionWrapper from "../../../components/test question wrapper";
import {
  WritingEssayContainer,
  WrittingEssayHeader,
  WritingEssayForm,
} from "./index.styled";
import {
  Radio,
  InputComponent as Input,
  ButtonComponent as Button,
} from "l-min-components/src/components";
import SettingIcon from "../../../assets/svg/settingIcon";
import WritingEssayPreview from "../components/preview modals/writing essay preview";
import WritingEssaySettings from "../components/test settings modals/writing essay settings";

const WritingEssay = () => {
  const [openPreview, setOpenPreview] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  return (
    <>
      {openPreview && (
        <WritingEssayPreview close={() => setOpenPreview(false)} />
      )}
      {openSettings && (
        <WritingEssaySettings close={() => setOpenSettings(false)} />
      )}
      <TestQuestionWrapper
        title="Write Essay Question"
        onClickPreview={() => setOpenPreview(true)}
      >
        <WritingEssayContainer>
          <WrittingEssayHeader>
            <div>
              <p>Select answer format</p>
              <Radio
                color="#FEBF10"
                options={[
                  { label: "Written", value: "Written" },
                  { label: "Scripted", value: "Scripted" },
                  { label: "Unscripted", value: "Unscripted" },
                ]}
              />
            </div>
            <SettingIcon onClick={() => setOpenSettings(true)} />
          </WrittingEssayHeader>
          <WritingEssayForm>
            <Input
              label="Question Title"
              placeholder="Review this topic and write an essay on it."
            />
            <div className="textarea_wrapper">
              <label>Instructions</label>
              <textarea
                name=""
                cols="30"
                rows="10"
                placeholder="write your instructions"
              ></textarea>
            </div>
            <Button text="Save changes" />
          </WritingEssayForm>
        </WritingEssayContainer>
      </TestQuestionWrapper>
    </>
  );
};

export default WritingEssay;
