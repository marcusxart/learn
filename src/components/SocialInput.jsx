import React from "react";
import { styled } from "styled-components";
import { InputComponent as TextField } from "l-min-components/src/components";

/**
 * @param {{
 *  type: string,
 *  disabled: boolean,
 *  onClick: function,
 *  style: CSSProperties,
 *  required: boolean,
 *  value: string | number,
 *  onChange: function,
 *  url: string
 * }} props - properties of Input Component
 *
 */

const SocialInput = (props) => {
  return (
    <Container>
      <div className="url_wrapper">
        <p>{props.url}</p>
      </div>
      <TextField style={{ width: "100%" }} {...props} />
    </Container>
  );
};

export default SocialInput;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #949999;
  border-radius: 12px;
  overflow: hidden;
  &:focus-within {
    border: thin solid #00c2c2;
  }
  .url_wrapper {
    background: #f5f7f7;
    border-right: 1px solid #949999;
    height: 100%;
    padding: 10px;
    p {
      color: #313333;
    }
  }
  label {
    margin: 0;
    display: none;
  }
  input {
    border: none;
    outline: none;

    &:focus {
      border: none;
      outline: none;
    }
    &:active {
      border: none;
      outline: none;
    }
  }
`;
