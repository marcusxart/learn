import { styled } from "styled-components";
import {
  StudentReportDetailsContainer,
  StudentReportDetailsContent,
} from "../student report details/index.styled";

export const StudentScoreAndCommentContainer = styled(
  StudentReportDetailsContainer
)``;

export const StudentScoreAndCommentContent = styled(
  StudentReportDetailsContent
)`
  padding: 20px 50px;
  > .content_header {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 17px;
    img {
      width: 43px;
      height: 43px;
      border-radius: 50%;
    }
    > div {
      display: flex;
      flex-direction: column;
      gap: 2px;

      p:first-child {
        color: #4a4d4d;
        font-size: 14px;
        line-height: 16px;
      }
      p:last-child {
        color: #adb2b2;
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
`;
