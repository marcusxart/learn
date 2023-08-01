import React, { useState } from "react";
import { styled } from "styled-components";

/**
 * @param {{
 *  type: string,
 *  disabled: boolean,
 *  onClick: function,
 *  style: CSSProperties,
 *  required: boolean,
 *  value: string | number,
 *  onChange: function,
 *  placeholder: string,
 *  label: string,
 *  max: number,
 *  min: number
 * }} props - properties of Input Component
 *
 */

const InputWithCount = (props) => {
  const [inputFocus, setInputFocus] = useState(false);
  const [valueLength, setValueLength] = useState(0);

  const handleChange = (event) => {
    setValueLength(event.target.value.length);
    props.onChange(event);
  };

  return (
    <Container style={props.style}>
      {props.label && <Label>{props.label}</Label>}
      <InputWrapper focus={inputFocus}>
        <input
          value={props.value}
          required={props.onChange}
          type={props.type}
          placeholder={props.placeholder}
          max={props.max}
          min={props.min}
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          onChange={handleChange}
        />
        <span>
          {valueLength || 0}/{props.max || 0}
        </span>
      </InputWrapper>
    </Container>
  );
};

export default InputWithCount;

const Container = styled.div`
  flex: 1;
  width: 100%;
`;

const Label = styled.label`
  color: #313333;
  font-size: 14px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 12px;
`;

const InputWrapper = styled.div`
  border-radius: 12px;
  border: 1px solid ${({ focus }) => (focus ? "#00c2c2" : "#949999")};
  height: 44px;
  display: flex;
  align-items: flex-end;
  padding: 0 35px 0 15px;
  position: relative;
  input {
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    font-size: 18px;
    color: #adb2b2;
    &::placeholder {
      color: #adb2b2;
    }
  }
  span {
    right: 10px;
    bottom: 0;
    position: absolute;
    color: #adb2b2;
    text-align: center;
    font-size: 10px;
    font-weight: 300;
    line-height: 16.5px;
    letter-spacing: 0.2px;
  }
`;
