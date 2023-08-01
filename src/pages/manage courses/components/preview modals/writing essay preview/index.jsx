import React from "react";
import { styled } from "styled-components";
import CloseIcon from "../../../../../assets/svg/closeIcon";
import StopWatch from "../../../../../assets/svg/stopWatch";

const WritingEssayPreview = ({ close }) => {
  return (
    <Modal>
      <Container>
        <span onClick={close}>
          <CloseIcon />
        </span>
        <Content>
          <TimeHeader>
            <StopWatch />
            <span className="light_text">40 mins</span>
          </TimeHeader>
          <Desc>
            <p className="light_text">
              Write on the topic below. A minimum of 60 word. No plagiarism.
            </p>
            <DescContent>
              <h2>Family and friends</h2>
              <div className="content"></div>
            </DescContent>
          </Desc>
        </Content>
      </Container>
    </Modal>
  );
};

export default WritingEssayPreview;

const Modal = styled.div`
  display: grid;
  place-items: center;
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.15);
`;

const Container = styled.div`
  width: 700px;
  min-height: 495px;
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
  padding: 36px 60px;
  flex: 1;
  margin-top: 8px;
  width: 100%;
  border-radius: 40px;
  background-color: #fff;
  .light_text {
    color: #adb2b2;
    font-size: 16px;
    font-weight: 600;
  }
`;

const TimeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;

  span {
    line-height: 40px;
  }
`;

const Desc = styled.div`
  margin-top: 27px;
  > p {
    text-align: center;
    line-height: 33px;
    margin-bottom: 19px;
  }
`;

const DescContent = styled.div`
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 700;
    text-align: center;
  }
  .content {
    background-color: #f5f7f7;
    border-radius: 21px;
    height: 275px;
  }
`;
