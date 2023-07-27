import { styled } from "styled-components";

export const CourseParticipantsContainer = styled.div`
  h1 {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 10px 0;
    cursor: pointer;
    padding-left: 10px;
    span {
      font-size: 22px;
      line-height: 40px;
    }
  }
`;

export const CourseParticipantsContent = styled.div`
  padding: 30px;
  border-radius: 30px;
  background-color: #fff;
  .search {
    margin-bottom: 14px;
  }
  .paginate {
    margin-top: 24px;
  }
`;

export const CourseParticipantsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 490px;
  overflow-y: auto;
  li {
    border-radius: 14px;
    background: #f5f7f7;
    padding: 12px;
    display: flex;
    button {
      border-radius: 12px;
      background: rgba(254, 191, 16, 0.1);
      padding-left: 12px;
      padding-right: 12px;
      width: 170px;
      color: #febf10;
      svg {
        path {
          stroke: #febf10;
        }
      }

      &:hover {
        background: rgba(254, 191, 16, 0.1);
        color: #febf10;
        svg {
          path {
            stroke: #febf10;
          }
        }
      }
    }
    .left {
      display: flex;
      flex: 1;
      gap: 16px;
      align-items: center;
      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }
      .info {
        .name {
          font-size: 16px;
          color: #000;
          font-weight: 600;
        }
        .bottom_wrap {
          display: flex;
          align-items: center;
          gap: 15px;
          .tab {
            border-radius: 6px;
            background: rgba(212, 48, 206, 0.12);
            display: flex;
            padding: 0px 5px;
            align-items: center;
            gap: 5px;
            span {
              font-size: 12px;
              color: #636666;
            }
          }
          > span {
            color: #949999;
            font-size: 12px;
            font-weight: 600;
          }
        }
      }
    }
  }
`;
