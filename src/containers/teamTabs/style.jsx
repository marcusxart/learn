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
  padding: 10px 2%;
  /* margin-bottom: 20px; */

  p {
    width: 22%;
    color: #4A4D4D;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    span {
      color: #00C2C2;
      cursor: pointer;
    }

    .icon {
     color: red; 
     font-size: 12px;
     cursor: pointer;
    }

    .cancel{
      cursor: pointer;
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

flex:  1 ;
  position: relative;

  span {
    color: ${({ active }) => (active ? "#00C2C2" : "#333")};
  }

  ${({ active }) =>
    active &&
    `&::after {
    content: "";
    width: 15%;
    height: 4px;
    border-radius: 4px;
    background: #00C2C2;
    position: absolute;
    bottom: 0;
    left: 15%;
  }`}
`;
export const ModalContent = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 22px;
  padding: 5%;
  text-align: center;
  // width: 50%;

  .success{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    img{
      margin-top: 40px;
    }
    p{
      font-size: 22px;
      font-weight: 600;
      margin-top: 30px;
    }
  }

  .edit{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    text-align: left !important;
    margin-left: -20px;
  }
`;

export const ModalText = styled.p`
  margin-bottom: 20px;
  margin-top: 20px;
  font-weight: 700;
font-size: 18px;
line-height: 24px;
color: #313333;

.warning{
  // width: 50%;
  line-height: 27px;
  span{
    color: #00C2C2;
  }
}
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;


export const ContentContainer = styled.div``;


export const DropdownItem = styled.div`
  padding: 10px 1px;
  overflow-y: scroll;

  &:hover {
    background-color: #f8f8f8;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;

  .course-list{
    color: #313333;
    margin-left: 10px;
    font-size: 14px;
  }
`;

export const CheckboxInput = styled.input`
  margin-right: 10px;
`;