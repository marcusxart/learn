import React from "react";
import { styled } from "styled-components";
import CloseIcon from "../../../../../assets/svg/closeIcon";
import PlayBtnIcon from "../../../../../assets/svg/playBtnIcon";
import Mircophone from "../../../../../assets/svg/mircophoneBig";

const SoundPlayPrevieq = ({ close }) => {
  return (
    <Modal>
      <Container>
        <span onClick={close}>
          <CloseIcon />
        </span>
        <Content>
          <Header>
            <p className="light_text">Pronouce the words</p>
            <h2>‘Hello there’</h2>
            <PlayBtnIcon />
          </Header>
          <RecordAction>
            <Mircophone />
            <p className="light_text">Click to begin recording</p>
          </RecordAction>
        </Content>
      </Container>
    </Modal>
  );
};

export default SoundPlayPrevieq;

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
  svg {
    cursor: pointer;
  }
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
  padding: 40px;
  flex: 1;
  margin-top: 8px;
  width: 100%;
  border-radius: 40px;
  background-color: #fff;
  .light_text {
    color: #adb2b2;
    font-weight: 600;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  margin-bottom: 160px;
  p {
    font-size: 20px;
    margin-bottom: 26px;
  }
  svg {
    position: absolute;
    right: 0;
    top: -5px;
  }
  h2 {
    font-size: 36px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0.7px;
  }
`;

const RecordAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  gap: 20px;
  p {
    font-size: 14px;
  }
`;
