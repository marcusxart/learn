import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;

  .title {
    color: #009999;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 60px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 22px;
  color: #313333;
  font-weight: 700;
  font-size: 22px;
  line-height: 40px;
`;

export const Slot = styled.div`
  text-align: center;
  margin-top: 2%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  // width: auto;

  .slot {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f7f7;
    border-radius: 10px;
    padding: 10px 15px;
    p {
      margin-right: 15px;
      color: #4A4D4D;
    }
  }
`;

export const Cta = styled.button`
  border: none;
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export const ContentBox = styled.div`
  width: 100%;
  border-radius: 30px;
  /* padding: 20px; */
  background-color: #ffffff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.127);

  .search {
    padding: 20px;
  }
`;