import styled from "styled-components";

export const AdContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  background: #1ab1e0;
  border-radius: 18.5479px;
  padding: 20px 40px;
  margin-top: 50px;
  margin-bottom: 10px;
  width: 100%;
`;

export const AdImage = styled.img`
  width: 341px;
  height: 257px;
  object-fit: cover;
  border-radius: 8px;
  margin-left: 25%;
  margin-top: -7%;

  @media only screen and (max-width: 1336px) {
    width: 271px;
    height: 207px;
    margin-top: -12%;
    margin-left: 25%;
  }

  @media only screen and (max-width: 1400px) {
    width: 271px;
    height: 207px;
    margin-top: -11%;
    margin-left: 25%;
  }

  @media only screen and (max-width: 1500px) {
    width: 271px;
    height: 207px;
    margin-top: -9%;
    margin-left: 25%;
  }

  @media only screen and (max-width: 1700px) {
    width: 271px;
    height: 207px;
    margin-top: -9%;
    margin-left: 25%;
  }
`;

export const AdText = styled.p`
  font-weight: 700;
  font-size: 38px;
  line-height: 35px;
  width: 70%;
  color: #ffffff;
  margin-right: 16px;
  margin-bottom: 20px;

  @media only screen and (max-width: 1336px) {
    font-size: 30px;
    width: 150%;
  }
  @media only screen and (max-width: 1400px) {
    font-size: 34px;
    width: 150%;
  }
  @media only screen and (max-width: 1500px) {
    font-size: 34px;
    width: 80%;
  }
  @media only screen and (max-width: 1700px) {
    font-size: 38px;
    width: 120%;
  }
`;

export const AdButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  width: 95px;
  height: 40px;
  font-size: 16px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  cursor: pointer;
  // padding: 10px 20px;
  gap: 10px;

  &:hover {
    // background-color: #006666;
  }
`;
