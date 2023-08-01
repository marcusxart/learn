import React from "react";
import { styled } from "styled-components";
import CloseIcon from "../../../../../assets/svg/closeIcon";

import {
  DropDownComponent as Dropdown,
  Radio,
  InputComponent as Input,
  Checkbox,
  ButtonComponent as Button,
} from "l-min-components/src/components";

const PracticeReadingSettings = ({ close }) => {
  return (
    <Modal>
      <Container>
        <span onClick={close}>
          <CloseIcon />
        </span>
        <Content>
          <h2>Reading Test Settings</h2>
          <Form>
            <Dropdown
              className="dropdown"
              inputPlaceHolder="!00%"
              header="Pronunciation Grading"
              dropdownData={[{ name: "yesss", value: "noo" }]}
            />
            <div className="evaluate_radio_select">
              <h3>Evaluation</h3>
              <Radio
                options={[
                  { label: "AI Assisted", value: "ai" },
                  { label: "Manually", value: "manually" },
                ]}
                color="#FEBF10"
              />
            </div>
            <div className="time_wrapper">
              <div className="input_wrap">
                <Input label="Duration" placeholder="10" />
              </div>
              <div className="time_type">
                <Checkbox label="Unlimited" color="#FEBF10" />
                <Dropdown className="dropdown" inputPlaceHolder="Minutes" />
              </div>
            </div>
            <div className="attempts_wrapper">
              <Dropdown
                className="dropdown"
                inputPlaceHolder="2"
                header="No of Attempts"
                dropdownData={[{ name: "2", value: "2" }]}
              />
            </div>
            <Button
              text="Save changes"
              styles={{
                boxShadow: "0px 10px 20px 0px rgba(254, 191, 16, 0.25)",
                marginTop: "32px",
                width: "100%",
              }}
            />
          </Form>
        </Content>
      </Container>
    </Modal>
  );
};

export default PracticeReadingSettings;

const Modal = styled.div`
  display: grid;
  place-items: center;
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.15);
`;

const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > span {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
`;

const Content = styled.div`
  padding: 45px 50px;
  margin-top: 8px;
  width: 100%;
  border-radius: 40px;
  background-color: #fff;
  h2 {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 25px;
  }
`;

const Form = styled.form`
  h3 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 7px;
  }
  .time_wrapper {
    display: flex;
    gap: 10px;
    padding: 15px 0;
    margin-bottom: 15px;
    border-bottom: 1px solid #dfe5e5;
    .input_wrap {
      flex: 1;
      > div {
        label {
          font-weight: 600;
        }
      }
    }
    .time_type {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 6px;
      .dropdown {
        h3 {
          display: none;
        }
      }
      > label {
        svg {
          path {
            fill: #fff;
          }
        }
        span {
          color: #7c8080;
          font-size: 14px;
        }
      }
    }
  }
  .evaluate_radio_select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0 15px;
    border-bottom: 1px solid #dfe5e5;
    h3 {
      margin: 0;
    }
    label {
      span:last-child {
        font-size: 14px;
      }
    }
  }
  .dropdown {
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
      top: 40px;
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
