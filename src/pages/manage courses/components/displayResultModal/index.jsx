import React, { useState } from "react";
import { styled } from "styled-components";
import Close from "../../../../assets/svg/closeIcon";
import InfoIcon from "../../../../assets/svg/infoIcon";
import {
  Radio,
  ButtonComponent as Button,
} from "l-min-components/src/components";
import CustomDDatePicker from "../../../../components/custom date picker";
import Calendar2 from "../../../../assets/svg/calendar2";
import ClockIcon from "../../../../assets/svg/clock";

const DisplayResutModal = ({ close }) => {
  const [startDate, setStartDate] = useState("");
  const options = [
    {
      label:
        "Display results immediately to students for all AI assisted evaluations",
      value: "display",
    },
    {
      label: "Hide results from students for all AI assisted evaluations",
      value: "hide",
    },
  ];
  return (
    <Modal>
      <Container>
        <CloseWrap onClick={close}>
          <Close />
        </CloseWrap>
        <Content>
          <Header>
            <h2>
              <span>Result Display</span>
              <InfoIcon />
            </h2>
            <div className="select_wrap">
              <div className="wrap">
                <Radio
                  options={options}
                  direction="column"
                  color="#FEBF10"
                  defaultValue="display"
                />
              </div>
            </div>
          </Header>
          <Wrapper>
            <h2>
              <span>Test Date & Time</span>
              <InfoIcon />
            </h2>
            <div className="input_container">
              <div className="row_wrap">
                <span>Start</span>
                <div className="date_time_custom_input">
                  <div className="label">Date</div>
                  <div className="wrap">
                    <p>DD/MM/YYYY</p>
                    <Calendar2 />
                  </div>
                </div>
                <div className="date_time_custom_input">
                  <div className="label">Time</div>
                  <div className="wrap">
                    <p>10:00AM</p>
                    <ClockIcon />
                  </div>
                </div>
              </div>
              <div className="row_wrap">
                <span>Deadline</span>
                <div className="date_time_custom_input">
                  <div className="label">Date</div>
                  <div className="wrap">
                    <p>DD/MM/YYYY</p>
                    <Calendar2 />
                  </div>
                </div>
                <div className="date_time_custom_input">
                  <div className="label">Time</div>
                  <div className="wrap">
                    <p>10:00AM</p>
                    <ClockIcon />
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
          <Button
            text="Save changes"
            styles={{
              width: "100%",
              boxShadow: "0px 10px 20px 0px rgba(254, 191, 16, 0.25)",
            }}
          />
        </Content>
      </Container>
    </Modal>
  );
};

export default DisplayResutModal;

export const Modal = styled.div`
  display: grid;
  place-items: center;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 9999;
`;

const Container = styled.div`
  width: 660px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
`;

const CloseWrap = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Content = styled.div`
  border-radius: 40px;
  border: 1px solid #c6cccc;
  background: #fff;
  padding: 30px;
  padding-bottom: 45px;
  width: 100%;
  h2 {
    display: flex;
    gap: 15px;
    align-items: center;
    span {
      font-size: 18px;
    }
  }
`;

const Header = styled.div`
  margin-bottom: 31px;
  .select_wrap {
    margin-top: 23px;
  }
`;

const Wrapper = styled.div`
  .input_container {
    margin-top: 17px;
    margin-bottom: 28px;
    display: flex;
    flex-direction: column;
    gap: 17px;
    width: 100%;
    .row_wrap {
      display: flex;
      gap: 23px;
      padding-left: 43px;
      position: relative;
      span {
        position: absolute;
        display: inline-block;
        left: -30px;
        top: 28px;
        width: 80px;
        height: 23px;
        transform: rotate(-90deg);
        text-align: center;
        border-radius: 10px;
        background: rgba(254, 191, 16, 0.2);

        color: #636666;
        font-size: 14px;
        font-weight: 600;
      }
      .date_time_custom_input {
        width: 260px;
        flex-shrink: 0;
        .label {
          margin-bottom: 7px;
          font-weight: 600;
          font-size: 14px;
        }

        .wrap {
          display: flex;
          gap: 23px;
          width: 100%;
          border-radius: 12px;
          border: 1px solid #949999;
          padding: 11px 20px;
          align-items: center;
          justify-content: space-between;
          p {
            font-size: 16px;
            color: #adb2b2;
          }
        }
      }
    }
  }
`;
