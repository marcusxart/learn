import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  background-color: #fff;
  border: none;
  outline: none;
  color: #949999;

  border: 1px solid #949999;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 20px;
  text-align: left;
  width: 100%;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 90%;
  }
`;

export const DropdownMenu = styled.div`
  background-color: #fff;
  border: none;
  border-top: none;
  left: 0;
  border-radius: ${({ radius }) => radius || "15px"};
  position: absolute;
  top: 110%;
  padding: 20px 0;
  width: ${({ width }) => width || "100%"};
  margin-left: ${({ margin }) => margin || "0px"};
  z-index: 1;
  max-height: 400px;
  overflow-y: hidden;
`;

export const DropdownItem = styled.div`
  padding: 10px 20px;

  &:hover {
    background-color: #f8f8f8;
  }
  svg {
    path {
      fill: "#fff";
    }
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;

  .course-list {
    color: #313333;
    margin-left: 10px;
    font-size: 14px;
  }
`;

export const CheckboxInput = styled.input`
  margin-right: 10px;
`;
