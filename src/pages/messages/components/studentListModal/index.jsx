import { styled } from "styled-components";
import Close from "../../../../assets/svg/closeIcon";
import {
  SearchComponent as SearchBar,
  ButtonComponent as Button,
} from "l-min-components/src/components";
import { student1 } from "../../../../assets/images/students";
import MessageIcon from "../../../../assets/svg/yellowMessage";

const StudentListModal = ({ close }) => {
  const testData = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <Container>
      <Wrapper>
        <span className="close" onClick={close}>
          <Close />
        </span>
        <Content>
          <div className="search">
            <SearchBar placeholder="Search students" />
          </div>
          <List>
            {testData?.map((i, idx) => (
              <li key={idx}>
                <div className="left">
                  <img src={student1} alt="" />
                  <div className="info">
                    <p>Randall West</p>
                    <span>@username</span>
                  </div>
                </div>
                <Button
                  text="Message"
                  icon={{
                    jsx: MessageIcon,
                    left: true,
                    stroke: "#FEBF10",
                  }}
                />
              </li>
            ))}
          </List>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default StudentListModal;

const Container = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 9999;
  .close {
    display: inline-flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
    svg {
      transform: scale(1.1);
    }
  }
`;

const Wrapper = styled.div`
  width: 838px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  padding: 20px 28px 30px 20px;
  border-radius: 30px;
  background: #fff;
`;

const List = styled.ul`
  list-style: none;
  padding-top: 20px;
  height: 400px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  li {
    width: 100%;
    border-radius: 15px;
    background: #f5f7f7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    .left {
      display: flex;
      align-items: center;
      gap: 16px;
      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }

      .info {
        p {
          color: #000;
          font-size: 16px;
          font-weight: 600;
        }
        span {
          color: #949999;
          font-size: 12px;
          font-weight: 600;
        }
      }
    }
    > button {
      background: rgba(254, 191, 16, 0.1);
      color: #febf10;
      svg {
        path {
          stroke: #febf10;
        }
      }

      &:hover {
        background: rgba(254, 191, 16, 0.1);
        color: #febf10;
        svg {
          path {
            stroke: #febf10;
          }
        }
      }
    }
  }
`;
