import { styled } from "styled-components";

export const SoundPlayContainer = styled.div`
  border-radius: 30px;
  background: #fff;
  padding: 24px 50px;
  min-height: 590px;
`;

export const SoundPlayHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;

  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 40px;
  }
  svg {
    cursor: pointer;
    path,
    rect {
      stroke: #febf10;
    }
  }
`;

export const SoundPlayForm = styled.div`
  .title_input {
    padding-right: 48px;
    margin-bottom: 20px;
  }
  .question_wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    .wrap {
      display: flex;
      gap: 20px;
      width: 100%;
      align-items: center;
    }
    svg {
      cursor: pointer;
      margin-top: 34px;
    }
  }
  .add_btn {
    button {
      margin: 20px 44px 50px auto;
      font-size: 14px;
      padding: 10px 20px;
    }
  }
`;
