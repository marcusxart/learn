import { styled } from "styled-components";
import Close from "../../../../assets/svg/closeIcon";
import {
  InputComponent as Input,
  ButtonComponent as Button,
} from "l-min-components/src/components";
import Plus from "../../../../assets/svg/plusSm";
import CloseSm from "../../../../assets/svg/closeSm";
import Play from "../../../../assets/svg/playSm";

const AddSuggestionsModal = ({ type, close }) => {
  return (
    <Container>
      <Wrapper>
        <span className="close" onClick={close}>
          <Close />
        </span>

        <Content>
          <TopSection>
            {type !== "video" ? (
              <InputSection>
                <div className="wrap">
                  <div className="input">
                    <Input
                      placeholder="Type the word here"
                      label="Word Suggestion"
                    />
                  </div>
                  <div className="action delete">
                    <CloseSm />
                    <span>Delete</span>
                  </div>
                </div>
                <div className="wrap">
                  <div className="input">
                    <Input
                      placeholder="Type the word here"
                      label="Word Suggestion"
                    />
                  </div>
                  <div className="action">
                    <Plus />
                    <span>Add</span>
                  </div>
                </div>
              </InputSection>
            ) : (
              <VideoSection>
                <Play />
                <p>Click here to upload video</p>
              </VideoSection>
            )}
          </TopSection>
          <BottomSection>
            <TextareaContainer>
              <span>Note</span>
              <textarea
                placeholder="Type your note here"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </TextareaContainer>
            <ButtonGroup>
              <Button text="Send Suggestion" />
              <Button text="Cancel" onClick={close} />
            </ButtonGroup>
          </BottomSection>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default AddSuggestionsModal;

const Container = styled.div`
  display: grid;
  place-items: center;
  position: fixed;
  inset: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.15);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 657px;
  align-items: flex-end;
  gap: 4px;
  .close {
    display: grid;
    place-items: center;
    padding: 8px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    svg {
      transform: scale(1.1);
    }
  }
`;

const Content = styled.div`
  padding: 45px 30px 40px 30px;
  background-color: #fff;
  border-radius: 30px;
  width: 100%;
`;

const TopSection = styled.div`
  margin-bottom: 25px;
`;
const BottomSection = styled.div``;

const VideoSection = styled.div`
  width: 287px;
  height: 170px;
  border-radius: 15px;
  border: 1px solid #dfe5e5;
  background: #f5f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  p {
    color: #00c2c2;
    border: 1px solid #00c2c2;
    padding: 0 18px;
    border-radius: 10px;
  }
`;
const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  .wrap {
    display: flex;
    gap: 10px;
    align-items: center;
    > .input {
      flex-shrink: 0;
      width: 505px;
    }
    > .action {
      margin-top: 28px;
      display: flex;
      height: fit-content;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      span {
        font-size: 12px;
        color: #00c2c2;
      }
      &.delete {
        span {
          color: #f95454;
        }
      }
    }
  }
`;

const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  textarea {
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #949999;
    resize: none;
    height: 142px;
    font-size: 16px;
    color: #adb2b2;
    margin-bottom: 25px;
    &::placeholder {
      color: #adb2b2;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  button {
    width: 170px;
    font-size: 12px;
    box-shadow: 0px 10px 20px 0px rgba(254, 191, 16, 0.25);
    padding: 12px 0;
    &:nth-child(2) {
      background-color: #c6cccc;
    }
  }
`;
