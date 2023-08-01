import React from "react";
import TestQuestionWrapper from "../../../components/test question wrapper";
import {
  Radio,
  InputComponent as Input,
  ButtonComponent as Button,
} from "l-min-components/src/components";
import SettingIcon from "../../../assets/svg/settingIcon";
import {
  WordPlayContainer,
  WordPlayHeader,
  WordPlayForm,
  WordPlayOptionsWraooer,
} from "./index.styled";
import MicrophoneIcon from "../../../assets/svg/microphoneNoCircle";
import InputWithCount from "../../../components/input  with count";
import CustomDropDrown from "../../../components/custom dropdown";
import VoicePlayer from "../../../components/voice player";
import Delete from "../../../assets/svg/delete2";
import PlusIcon from "../../../assets/svg/plusIcon";
import RadioTextList from "../../../components/radio text list";

const WordPlay = () => {
  return (
    <TestQuestionWrapper title="Word Play Question">
      <WordPlayContainer>
        <WordPlayHeader>
          <div>
            <p>Select answer format</p>
            <Radio
              color="#FEBF10"
              options={[
                { label: "Multiple choice", value: "Multiple choice" },
                { label: "Text", value: "Text" },
              ]}
            />
          </div>
          <SettingIcon />
        </WordPlayHeader>
        <WordPlayForm>
          <div className="title_wrap">
            <Input
              label="Question Title"
              placeholder="Listen to the audio and write what you heard."
            />
          </div>
          <div className="answer_wrap">
            <InputWithCount label="Answer" placeholder="Abhore" />
            <div className="bottom_wrap">
              <div className="dropdown_wrap">
                <CustomDropDrown
                  header="Voice type"
                  default={{ name: "Use My Voice", value: "voice" }}
                  dropdownData={[
                    { name: "Use My Voice", value: "voice" },
                    { name: "Use AI", value: "ai" },
                  ]}
                />
              </div>
              <div className="audio_section">
                <MicrophoneIcon />
                <div className="audio_wrap">
                  <VoicePlayer />
                  <div className="delete_wrap">
                    <Delete />
                    <p>Delete recording</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="add_btn">
            <Button
              text="Add Question"
              type="secondary"
              icon={{
                jsx: PlusIcon,
                left: true,
              }}
            />
          </div>
          <WordPlayOptionsWraooer>
            <RadioTextList />
          </WordPlayOptionsWraooer>
        </WordPlayForm>
      </WordPlayContainer>
    </TestQuestionWrapper>
  );
};

export default WordPlay;
