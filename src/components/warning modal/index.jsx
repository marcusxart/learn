import styled from "styled-components";
import CloseIcon from "../../assets/svg/closeIcon";
import deleteImg from "../../assets/images/delete.png";
import { ButtonComponent as Button } from "l-min-components/src/components";

const WarningModal = ({
  cancel,
  message,
  onClick,
  btnText,
  footerbtnText,
  footerOnClick,
  messageStyles,
  subMessage,
  subMessageSyles,
  btnXl,
  noShadow,
}) => {
  return (
    <Container>
      <Wrapper>
        <span onClick={cancel}>
          <CloseIcon />
        </span>
        <Content>
          <img src={deleteImg} alt="" />
          {message && (
            <p className="message" style={messageStyles}>
              {message}
            </p>
          )}
          {subMessage && (
            <p style={subMessageSyles} className="sub_message">
              {subMessage}
            </p>
          )}
          <BtnGroup noShadow={noShadow}>
            <Button
              onClick={cancel}
              text="Cancel"
              type="secondary"
              styles={{
                width: btnXl ? "140px" : "auto",
              }}
            />
            <Button
              onClick={onClick}
              text={btnText || "Delete"}
              styles={{
                width: btnXl ? "140px" : "auto",
              }}
            />
          </BtnGroup>
          {footerbtnText && (
            <span onClick={footerOnClick} className="footer_action">
              {footerbtnText}
            </span>
          )}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default WarningModal;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.15);
`;

const Wrapper = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  span {
    display: inline-flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    background: #fff;
    svg {
      transform: scale(1.2);
    }
  }
`;

const Content = styled.div`
  border-radius: 30px;
  width: 100%;
  background: #fff;
  padding: 43px 0 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 90px;
    object-fit: contain;
    height: 92px;
  }
  text-align: center;
  .message {
    font-size: 18px;
    width: 218px;
    font-weight: 700;
    line-height: 24px;
    margin-top: 19px;
  }
  .sub_message {
    color: #4a4d4d;
    width: 277px;
    margin-top: 12px;
    line-height: 24px;
  }
  .footer_action {
    margin-top: 25px;
    color: #f95454;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }
`;

const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
  gap: 13px;
  margin-bottom: 5px;

  button {
    box-shadow: ${({ noShadow }) =>
      noShadow ? "none" : ` "0px 10px 20px 0px rgba(254, 191, 16, 0.25)`};
  }
`;
