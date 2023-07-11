import { styled } from "styled-components";

import ArrowDown from "../../assets/svg/arrowDown";

const MessageUserItem = ({
  title,
  message,
  image,
  time,
  unreadNumber,
  isActive,
  onClick,
  isOnline,
}) => {
  return (
    <Container className={isActive ? "user_active" : ""} onClick={onClick}>
      <ImgBox>
        <img src={image} alt="" />
        {isOnline && <span></span>}
      </ImgBox>
      <Content>
        <h2 className="truncate">{title}</h2>
        <p className="truncate light">{message}</p>
      </Content>
      <Nofic>
        <p className="light">{time}</p>
        <div className="icons_wrapper">
          <div>
            {unreadNumber && <span>{unreadNumber}</span>}
            <div className="arrow">
              <ArrowDown />
            </div>
          </div>
        </div>
      </Nofic>
    </Container>
  );
};

export default MessageUserItem;

const Container = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  transition: all 0.3s;
  .light {
    font-size: 12px;
    color: #7c8080;
  }
  &.user_active {
    background-color: #00c2c219;
    &:hover {
      background-color: #00c2c219;
    }
    .icons_wrapper {
      > div {
        transform: translateX(0);
        .arrow {
          opacity: 1;
        }
      }
    }
  }
  &:hover {
    background-color: #f5f7f7;
    .icons_wrapper {
      > div {
        transform: translateX(0);
        .arrow {
          opacity: 1;
        }
      }
    }
  }
`;

const ImgBox = styled.div`
  width: 42px;
  height: 42px;
  position: relative;
  span {
    display: inline-block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid #fff;
    background: #30d468;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Content = styled.div`
  flex: 1;
  margin-left: 10px;
  h1,
  p {
    width: 120px;
  }
  h2 {
    font-size: 14px;
  }
`;

const Nofic = styled.div`
  .icons_wrapper {
    width: 47px;
    overflow: hidden;
    > div {
      display: flex;
      justify-content: flex-end;
      transform: translateX(22px);
      gap: 5px;
      align-items: center;
      transition: all 0.3s;
      span {
        height: fit-content;
        border-radius: 19px;
        background: #febf10;
        padding: 4px;
        display: inline-block;
        color: #fff;
        font-size: 9.601px;
        font-weight: 600;
        line-height: 5.715px;
        letter-spacing: 0.192px;
      }
      .arrow {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all 0.8s;
        svg {
          width: 16px;
          height: 16px;
          path {
            fill: #323232;
          }
        }
      }
    }
  }
`;
