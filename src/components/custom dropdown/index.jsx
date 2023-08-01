import React from "react";
import { styled } from "styled-components";
import { DropDownComponent as DropDown } from "l-min-components/src/components";

/**
 * @param {{
 * dropdownData: Array,
 * className: string,
 * header: string,
 * onSelect: Function,
 * inputPlaceHolder: string,
 * default: {name:  string | number, [key: string]: string | number}
 * }} props - properties of the dropdown component
 */
const CustomDropDown = (props) => {
  return (
    <Container>
      <DropDown
        className="dropdown"
        default={props.default}
        dropdownData={props.dropdownData}
        header={props.header}
        onSelect={props.onSelect}
        inputPlaceHolder={props.inputPlaceHolder}
      ></DropDown>
    </Container>
  );
};

export default CustomDropDown;

const Container = styled.div`
  .dropdown {
    > h3 {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    > div {
      border: 1px solid #949999;
      > p {
        color: #adb2b2;
      }
      > svg {
        path {
          stroke: #7c8080;
        }
      }
    }
    ul {
      left: 0;
      right: 0;
      padding: 0;
      top: 45px;
      z-index: 30;
      border-radius: 10px;
      border: 1px solid #c6cccc;
      background: #fff;
      overflow-y: auto;
      li {
        padding: 10px 20px;
        margin: 0;
        background-color: white;
        &:hover {
          span {
            color: white;
          }
          background: rgb(0, 194, 194);
        }
      }
    }
  }
`;
