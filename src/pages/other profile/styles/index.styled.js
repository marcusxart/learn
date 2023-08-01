import { styled } from "styled-components";

export const OtherProfileContainer = styled.div`
  margin-left: auto;
  > .header {
    display: flex;
    padding-left: 15px;
    gap: 19px;
    align-items: center;
    width: fit-content;
    margin-bottom: 22px;
    cursor: pointer;
    p {
      font-size: 24px;
      font-weight: 700;
      line-height: 40px;
    }
  }
`;

export const EnterprisesWrapper = styled.div`
  padding: 14px 25px;
  margin-bottom: 30px;
  border-radius: 40px;
  background-color: #ffffff;
  h2,
  p {
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 35px;
    margin-bottom: 25px;
  }
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 160px;
  overflow-y: auto;
  max-height: 150px;
  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    p {
      width: 250px;
      text-align: left;
      font-size: 16px;
      color: #4a4d4d;
      margin: 0;
    }
  }
`;
