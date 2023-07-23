import { styled } from "styled-components";

export const SoundPlayContainer = styled.div``;

export const SoundPlayHeader = styled.div`
  height: 42px;
  border-radius: 15px 15px 0px 0px;
  padding: 0 15px;
  background: #00c2c2;
  box-shadow: 0px 3px 5px 0px #d4d4d43f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    width: 20px;
  }
  > .left {
    display: flex;
    align-items: center;
    gap: 24px;
    p {
      color: #fff;
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
    }
    span {
      display: inline-flex;
      height: 24px;
      padding: 5px 20px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 12px;
      background: #d9f6f6;
      font-size: 12px;
    }
  }
`;
