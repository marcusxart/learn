import React from "react";
import { styled } from "styled-components";
import SearchIcon from "../assets/svg/searchIcon";

const SearchInput = ({ onChange, onSubmit, value, placeholder }) => {
  return (
    <Container onSubmit={onSubmit}>
      <SearchIcon />
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Container>
  );
};

export default SearchInput;

const Container = styled.form`
  width: 100%;
  align-items: center;
  gap: 22px;
  display: flex;
  padding: 10px 20px;
  border: 1px solid #dfe5e5;
  border-radius: 12px;
  input {
    font-size: 16px;
    background: transparent;
    width: 100%;
    border: none;
    outline: none;
    &::placeholder {
      color: #adb2b2;
    }
  }
`;
