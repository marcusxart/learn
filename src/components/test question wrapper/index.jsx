import React from "react";
import { styled } from "styled-components";
import UserSwitchHeader from "../UserSwitchHeader";
import ArrowLeft from "../../assets/svg/arrowLeft";
import MonitorIcon from "../../assets/svg/monitor";
import CopyIcon from "../../assets/svg/copyIcon2";
import { ButtonComponent as Button } from "l-min-components/src/components";

const TestQuestionWrapper = ({
  onClickPreview,
  onClickCopyContent,
  title,
  children,
  onClickBack,
}) => {
  return (
    <Container>
      <UserSwitchHeader />
      <Header>
        <h1 onClick={onClickBack}>
          <ArrowLeft />
          <span>{title}</span>
        </h1>
        <div className="btn_group">
          <Button
            text="Preview"
            type="secondary"
            onClick={onClickPreview}
            icon={{
              jsx: MonitorIcon,
              left: true,
            }}
          />
          <Button
            text="Copy content"
            type="secondary"
            icon={{
              jsx: CopyIcon,
              left: true,
            }}
            onClick={onClickCopyContent}
          />
        </div>
      </Header>
      <>{children}</>
    </Container>
  );
};

export default TestQuestionWrapper;

export const Container = styled.div``;

export const Header = styled.div`
  padding: 11px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn_group {
    display: flex;
    align-items: center;
    gap: 20px;
    button {
      background: transparent;
      border: 1px solid #7c8080;
      color: #7c8080;
      font-size: 14px;
      padding: 10px 20px;
      svg {
        path {
          stroke: #7c8080;
        }
      }
    }
  }
  h1 {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 22px;
    cursor: pointer;
  }
`;
