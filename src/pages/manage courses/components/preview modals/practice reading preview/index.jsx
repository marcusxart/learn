import React from "react";
import { styled } from "styled-components";
import CloseIcon from "../../../../../assets/svg/closeIcon";
import ClockIcon from "../../../../../assets/svg/clock";
import StopWatch from "../../../../../assets/svg/stopWatch";

const PracticeReadingPreview = ({ close }) => {
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
              Say the following word and get feedback on your pronunciation
            </p>
            <DescContent>
              <h2>Culture</h2>
              <p>
                Modern times have made it extremely challenging for people to
                understand their cultural backgrou nd, and many believe that
                speaking the language is the key to understanding them.
              </p>
              <p>
                A person's ability to comprehend culture can be mostly
                understood by their proficiency with language, but I think that
                there are more important things to keep in mind because adapting
                to a new culture is more than just the language.
              </p>
            </DescContent>
          </Desc>
        </Content>
      </Container>
    </Modal>
  );
};

export default PracticeReadingPreview;

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
  padding: 0 16px;
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
  p {
    color: #7c8080;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.3px;
  }
`;
