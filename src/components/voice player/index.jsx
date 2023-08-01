import React from "react";
import Wave from "../../assets/svg/wave";
import Speaker from "../../assets/svg/speacker";
import PlayIcon from "../../assets/svg/play";
import { styled } from "styled-components";

const VoicePlayer = ({ onPlay }) => {
  return (
    <Container>
      <AudioController>
        <span>
          <Speaker />
        </span>
        <span className="line"></span>
        <Wave />
      </AudioController>
      <PlayIcon fill="#FEBF10" onClick={onPlay} />
    </Container>
  );
};

export default VoicePlayer;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  > svg {
    cursor: pointer;
    width: 25px;
    height: 25px;
  }
`;

const AudioController = styled.div`
  border-radius: 50px;
  background: #febf10;
  height: 45px;
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  .line {
    display: inline-block;
    width: 1px;
    height: 21px;
    background-color: #dfe5e5;
  }
`;
