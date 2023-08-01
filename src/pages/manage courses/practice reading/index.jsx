import React, { useState } from "react";
import { PracticeReadingContainer, PracticeReadingForm } from "./index.styled";
import {
  ButtonComponent as Button,
  InputComponent as Input,
} from "l-min-components/src/components";
import SettingIcon from "../../../assets/svg/settingIcon";
import PracticeReadingSettings from "../components/test settings modals/practice reading settings";
import PracticeReadingPreview from "../components/preview modals/practice reading preview";
import TestQuestionWrapper from "../../../components/test question wrapper";

const PracticeReading = () => {
  const [focusInput, setFocusInput] = useState({
    input: false,
    textarea: false,
  });
  const [toggleSettings, setToggleSetting] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);

  return (
    <>
      {openPreview && (
        <PracticeReadingPreview close={() => setOpenPreview(false)} />
      )}
      {toggleSettings && (
        <PracticeReadingSettings close={() => setToggleSetting(false)} />
      )}

      <TestQuestionWrapper
        title="Practice Reading Question"
        onClickPreview={() => setOpenPreview(true)}
      >
        <PracticeReadingContainer>
          <div className="header">
            <SettingIcon onClick={() => setToggleSetting(true)} />
          </div>
          <PracticeReadingForm>
            <Input
              label="Question Title"
              placeholder="Read the following text to assess your reading skills."
            />
            <div className="inputs_wrapper">
              <label htmlFor="">Article</label>
              <div
                className={`wrapper ${
                  focusInput.input || focusInput.textarea ? "active" : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="Title"
                  onFocus={() =>
                    setFocusInput({
                      ...focusInput,
                      input: true,
                    })
                  }
                  onBlur={() =>
                    setFocusInput({
                      ...focusInput,
                      input: false,
                    })
                  }
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Write your test here..."
                  onFocus={() =>
                    setFocusInput({
                      ...focusInput,
                      textarea: true,
                    })
                  }
                  onBlur={() =>
                    setFocusInput({
                      ...focusInput,
                      textarea: false,
                    })
                  }
                ></textarea>
              </div>
            </div>
            <Button
              text="Save changes"
              styles={{
                width: "100%",
                boxShadow: " 0px 10px 20px 0px rgba(254, 191, 16, 0.25)",
              }}
            />
          </PracticeReadingForm>
        </PracticeReadingContainer>
      </TestQuestionWrapper>
    </>
  );
};

export default PracticeReading;
