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
          Personal
        </button>
        <button
          className={switchUser === 2 ? "active" : ""}
          onClick={() => setSwitchUser(2)}
        >
          Enterprise
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
    button {
      font-size: 14px;
      line-height: 30px;
      font-weight: 700;
      padding: 4px 15px;
      color: #4a4d4d;
      border: none;
      background: transparent;
      cursor: pointer;
      transition-property: background, color;
      transition: 0.3s ease;
      &.active {
        background: #00c2c2;
        color: white;
        border-radius: 10px;
      }
    }
  }
`;
export default UserSwitchHeader;
