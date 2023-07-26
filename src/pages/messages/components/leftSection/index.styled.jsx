import { styled } from "styled-components";

export const MessageLeftWrapper = styled.div`
  width: 270px;
  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    h1,
    .edit {
      cursor: pointer;
    }
    h1 {
      font-size: 22px;
      line-height: 40px;
      display: flex;
      gap: 6px;
      align-items: center;
    }
    .edit {
      height: 32px;
      svg {
        width: 32px;
        height: 32px;
        path {
          stroke: #00c2c2;
        }
      }
    }
  }
`;

export const MessagesListWrapper = styled.div`
  background-color: #fff;
  border-radius: 30px;
  .search_section {
    padding: 20px;
  }
  .wrap_list {
    height: 474px;
    overflow: auto;
  }
`;

export const UserMessagesWrapper = styled.div`
  .s_header {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 20px;
    margin-bottom: 5px;
    p {
      color: #949999;
      font-size: 12px;
      font-weight: 600;
    }
  }
`;
