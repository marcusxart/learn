import { styled } from "styled-components";
import Close from "../../../../../assets/svg/closeIcon";
import deleteImg from "../../../../../assets/images/delete-img.png";
import { ButtonComponent as Button } from "l-min-components/src/components";

const DeleteCourseModal = ({ close, deleteAction }) => {
  return (
    <Modal>
      <Container>
        <CloseWrap onClick={close}>
          <Close />
        </CloseWrap>
        <Content>
          <img src={deleteImg} alt="" />
          <p>You can’t undo this action</p>
          <div>
            <Button text="Cancel" type="secondary" onClick={close} />
            <Button text="Delete" onClick={deleteAction} />
          </div>
        </Content>
      </Container>
    </Modal>
  );
};

export default DeleteCourseModal;

const Modal = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
  inset: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 423px;
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
  width: 100%;
  border-radius: 30.67px;
  border: 1px solid #c6cccc;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 0 37px;
  p {
    width: 140px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    margin: 19px 0 35px;
  }
  > div {
    display: flex;
    gap: 12px;
    button:last-child {
      box-shadow: 0px 10px 20px 0px rgba(254, 191, 16, 0.25);
    }
  }
`;
