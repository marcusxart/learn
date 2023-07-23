import { useState } from "react";
import { styled } from "styled-components";

const UserSwitchHeader = ({ title }) => {
  const [switchUser, setSwitchUser] = useState(1);
  return (
    <Container>
      <p>{title}</p>
      <div className="btn__wrapper">
        <button
          className={switchUser === 1 ? "active" : ""}
          onClick={() => setSwitchUser(1)}
        >
          <span>My Account</span>
          <span className="circle"></span>
        </button>
        <button
          className={switchUser === 2 ? "active" : ""}
          onClick={() => setSwitchUser(2)}
        >
          <span>Affiliates</span>
          <span className="circle"></span>
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  width: 100%;
  background: #ffffff;
  border-radius: 25px;

  p {
    font-size: 20px;
    color: #00c2c2;
  }

  .btn__wrapper {
    background: #dfe6e6;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    button {
      font-size: 14px;
      line-height: 30px;
      font-weight: 700;
      padding: 4px 15px;
      color: #4a4d4d;
      display: flex;
      align-items: center;
      gap: 10px;
      border: none;
      background: transparent;
      cursor: pointer;
      transition-property: background, color;
      transition: 0.3s ease;
      span {
        color: #4a4d4d;
      }
      .circle {
        width: 8px;
        height: 8px;
        display: inline-block;
        background-color: #febf10;
      }
      &.active {
        background: #00c2c2;

        border-radius: 10px;
        span {
          color: white;
        }
      }
    }
  }
`;
export default UserSwitchHeader;
