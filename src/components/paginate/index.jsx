import { styled } from "styled-components";

const Paginate = () => {
  return (
    <Container>
      <ul>
        <li className="nav-link">Prev</li>
        <li>1</li>
        <li className="active_link">2</li>
        <li className="dot-link">...</li>
        <li>10</li>
        <li className="nav-link ">Next</li>
      </ul>
    </Container>
  );
};

export default Paginate;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    list-style: none;
    gap: 17px;
    li {
      cursor: pointer;
      display: flex;
      width: 40px;
      height: 40px;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      border: 1px solid #dfe5e5;
      background: #f5f7f7;
      font-size: 15px;
      font-weight: 700;
      color: #4a4d4d;
      &.nav-link {
        width: 76px;
      }
      &.active_link {
        background: #febf10;
        color: #fff;
      }
      &.dot-link {
        width: fit-content;
        background-color: transparent;
      }
    }
  }
`;
