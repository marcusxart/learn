import React, { useState } from "react";
import { styled } from "styled-components";

const RadioTextList = ({ defaultValue }) => {
  const [radioValue, setRadioValue] = useState(defaultValue || 0);
  const textArr = [1, 1, 1];
  return (
    <Container>
      {textArr.map((item, idx) => (
        <RadioTextWrapper
          key={idx}
          idx={idx}
          radioValue={radioValue}
          setRadioValue={setRadioValue}
        />
      ))}
    </Container>
  );
};

const RadioTextWrapper = ({ idx, radioValue, setRadioValue }) => {
  const [focusInput, setFocusInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Backspace" && inputValue.length >= 80) {
      const value = inputValue.substring(0, inputValue.length - 1);
      setInputValue(value);
    }
  };
  return (
    <RadioTextContainer>
      <p>Option 1</p>
      <Wrapper focus={focusInput}>
        <RadioInput
          checked={idx === radioValue}
          onChange={() => {
            setRadioValue(idx);
          }}
        />
        <InputWrapper>
          <InputWrapper>
            <InputText
              placeholder="Abhore"
              onKeyDown={handleKeyDown}
              value={inputValue}
              onChange={(e) => {
                if (inputValue.length >= 80) {
                  return setInputValue(inputValue);
                }
                return setInputValue(e.target.value);
              }}
              onFocus={() => {
                setRadioValue(idx);
                setFocusInput(true);
              }}
              onBlur={() => {
                setFocusInput(false);
              }}
            />
            <span>{inputValue.length || 0}/80</span>
          </InputWrapper>
        </InputWrapper>
      </Wrapper>
    </RadioTextContainer>
  );
};

export default RadioTextList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const RadioTextContainer = styled.div`
  > p {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.56px;
    margin-bottom: 12px;
  }
`;

const Wrapper = styled.div`
  border-radius: 12px;
  border: 1px solid ${({ focus }) => (focus ? "#00c2c2" : "#949999")};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
`;

const RadioInput = styled.input.attrs({ type: "radio" })`
  appearance: none;
  background-color: #fff;
  margin: 0;
  color: #febf10;
  width: 20px;
  height: 20px;
  border: 2px solid #febf10;
  border-radius: 50%;
  transform: translateY(-0.075em);
  cursor: pointer;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #febf10;
  }

  &:checked::before {
    transform: scale(1);
  }
`;

const InputWrapper = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  padding-right: 32px;
  height: 44px;
  span {
    position: absolute;
    right: -30px;
    bottom: 0;
    color: #adb2b2;
    text-align: center;
    font-size: 10px;
    font-weight: 300;
    line-height: 16px;
    letter-spacing: 0.2px;
  }
`;

const InputText = styled.input.attrs({ type: "text" })`
  width: 100%;
  color: #adb2b2;
  font-size: 18px;
  letter-spacing: 0.36px;
  height: 100%;
  border: none;
  outline: none;
  &::placeholder {
    color: #adb2b2;
  }
`;
