import { styled } from "styled-components";

export const VideoPlayerContainer = styled.div`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: #f5f7f7;
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  video {
    object-fit: cover;
  }
`;

export const VideoController = styled.div`
  position: absolute;
  padding: 22px 26px;
  z-index: 2;
  inset: 0;
  display: flex;
  align-items: flex-end;
  visibility: ${({ hide }) => (hide ? "hidden" : "visible")};
  .play_pause_wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    cursor: pointer;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const RangeContainer = styled.div`
  border-radius: 16.5px;
  width: 100%;
  height: 29.307px;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 6.5px 12.5px;
  gap: 15px;
  position: relative;
  p {
    position: absolute;
    color: #b0dcdc;
    font-size: 10px;
    left: 40px;
  }
  svg {
    cursor: pointer;
  }
  .range {
    border-radius: 9px;
    flex: 1;
    -webkit-appearance: none;
    appearance: none;
    overflow: hidden;
    &::-webkit-slider-runnable-track {
      height: 15px;
      background: rgba(198, 204, 204, 0.4);
      border-radius: 16px;
    }

    &::-moz-range-track {
      height: 15px;
      background: rgba(198, 204, 204, 0.4);
      border-radius: 16px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      height: 15px;
      width: 15px;
      background-color: #099;
      border-radius: 50%;
      border: 2px solid #099;
      box-shadow: -9999px 0 0 9993px #099;
    }

    &::-moz-range-thumb {
      height: 15px;
      width: 15px;
      background-color: #099;
      border-radius: 50%;
      border: 1px solid #099;
      box-shadow: -9999px 0 0 9993px #099;
    }
  }
  /* .range::-webkit-slider-thumb {
    box-shadow: 0 0 9999px ;
    border-radius: 9999px;
  } */
`;
