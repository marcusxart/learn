import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 30px;
  background: #00c2c2;
  color: #fff;

  p {
    margin-right: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-right: auto;
  color: #ffffff;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  overflow: hidden;
  background: #fff;
  border-radius: 30px;
  width: 100%;
`;
export const Content = styled.div`
  overflow-y: scroll;
  padding: 5%;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
    border: 2px solid #f1f1f1;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const BackButton = styled.button`
  border: none;
  outline: none;
  background: 0 0;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 40px;
  color: #313333;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }
`;
