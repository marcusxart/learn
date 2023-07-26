import { ChatContentContainer } from "./index.styled";
import { chatData } from "../../../../exports/messageExport";
import videoImg from "../../../../assets/images/video-img.png";

const ChatContents = () => {
  return (
    <ChatContentContainer>
      <div className="date_notify">
        <span>Today</span>
      </div>
      <ul>
        {chatData.map((chat, idx) => (
          <li key={idx} className={`${chat.isYou ? "isYou" : ""}`}>
            {!chat.isYou && <span className="circle"></span>}
            {!chat.video && !chat.audio && (
              <div className="message_box">
                {chat.name && <h3>{chat?.name}</h3>}
                <div className="message_content">
                  <p>{chat.message}</p>
                  <p className="time">{chat.time}</p>
                </div>
              </div>
            )}
            {chat.video && (
              <div className="video_box">
                <img src={videoImg} alt="" />
                <p>{chat.time}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </ChatContentContainer>
  );
};

export default ChatContents;
