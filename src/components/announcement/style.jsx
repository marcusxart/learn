import styled from "styled-components";

export const AnnouncementContainer = styled.div`
  border: 2px solid #ccc;
  padding: 20px;
  position: relative;
  border-radius: 22px;
  display: flex;
`;

export const Heading = styled.h1`
  margin: 0 0 10px 0;
  color: #313333;
  font-style: normal;
font-weight: 700;
font-size: 16px;
`;

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const SubtitleDivider = styled.div`
  border-left: 1px solid #ccc;
  height: 20px;
  margin: 0 10px;
`;

export const SubtitleTitle = styled.h2`
  margin: 0;
  color: #ADB3B3;font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
`;
export const Contents = styled.h2`
font-size: 14px;
color: #4A4D4D;
margin: 10px 0;
font-weight: 400;

`;
export const Content = styled.p`
  font-size: 12px;
  margin: 10px 0;
  color: #4A4D4D;
  font-style: normal;
  font-weight: 400;

  .content{
    font-size: 12px;
  }

`;

export const Author = styled.div`
display: flex;
justify-content: space-between;
  margin: 0;
  color: #ADB3B3;
  font-weight: 600;
font-size: 12px;
line-height: 16px;

p{
  font-size: 12px;
}


`;

export const IconContainer = styled.div`
  position: absolute;
  top: 4%;
  right: 3%;
`;

export const OptionsIcon = styled.button`
  background-color: transparent;
  border: none;
  color: #000000;
  cursor: pointer;
  font-size: 18px;
  position: absolute;
  right: 3;
  top: 0;
  margin-top: 10px;
`;

export const OptionsList = styled.ul`
  background-color: #fff;
  border: 1px solid #bfbfbf;
  list-style: none;
  margin: 0;
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  right: 0;
  left: 2px;
  margin-left: -50px;
  top: 30px;
  min-width: 110px;
`;

export const OptionItem = styled.li``;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  color: #313333;
  cursor: pointer;
  font-size: 14px;
  line-height: 29px;
  transition: all 0.3s ease;

  &:hover {
    color: #373737;
  }
`;

export const DeleteOptionButton = styled.button`
  background-color: transparent;
  border: none;
  color: #313333;
  cursor: pointer;
  font-size: 14px;
  line-height: 29px;
  transition: all 0.3s ease;

  &:hover {
    color: #373737;
  }
`;
