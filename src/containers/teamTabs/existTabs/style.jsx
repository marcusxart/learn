import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* padding-top: 20px; */
  padding-bottom: 20px;
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 2%;
  /* margin-bottom: 20px; */

  .tabs{
    display: flex;
  }

  p {
    // width: 22%;
    color: #636666;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    span {
      color: #00C2C2;
    }

    .icon {
     color: red; 
     font-size: 12px;
    }
  }
`;

export const Tab = styled.div`
  border: none;
  outline: none;
  background: 0 0;
  padding: 10px;
  cursor: pointer;
  color: ${({ active }) => (active ? "#313333" : "#ADB3B3")};

// flex:  1 ;
  position: relative;

  span {
    color: ${({ active }) => (active ? "#00C2C2" : "#333")};
  }

  ${({ active }) =>
    active &&
    `&::after {
    content: "";
    width: 30%;
    height: 4px;
    border-radius: 4px;
    background: #00C2C2;
    position: absolute;
    bottom: 0;
    left: 28%;
  }`}
`;

export const ContentContainer = styled.div``;
