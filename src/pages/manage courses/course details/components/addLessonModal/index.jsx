import React from "react";
import { styled } from "styled-components";
import Close from "../../../../../assets/svg/closeIcon";
import {
  InputComponent as Input,
  ButtonComponent as Button,
} from "l-min-components/src/components";
import ArrowRight from "../../../../../assets/svg/arrowRight";

const AddLessonModal = ({ close, onClick }) => {
  return (
    <Modal>
      <Container>
        <CloseWrap onClick={close}>
          <Close />
        </CloseWrap>
        <Content>
          <div className="title_wrap">
            <h2>Add a new lesson</h2>
            <p>Let us know what it is and we’ll give you a feedback</p>
          </div>
          <Input style={{ width: "472px" }} placeholder="Enter lesson title" />
          <Button
            text="Proceed to add lectures"
            onClick={onClick}
            styles={{
              padding: "8px 19px",
              marginTop: "70px",
            }}
            icon={{
              jsx: ArrowRight,
              right: true,
            }}
          />
        </Content>
      </Container>
    </Modal>
  );
};

export default AddLessonModal;

const Modal = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
  inset: 0;
  z-index: 999;
  display: grid;
  place-items: center;
`;

const Container = styled.div`
  width: 780px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
`;

const CloseWrap = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 50px 0 68px;
  width: 100%;
  background: #fff;
  border-radius: 40px;
  border: 1px solid #c6cccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .title_wrap {
    margin-bottom: 30px;
    h2 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 8px;
      line-height: 22px;
    }
    p {
      color: #adb2b2;
      font-size: 14px;
      font-weight: 600;
    }
  }
`;
