import ArrowLeft from "../../assets/svg/arrowLeft";
import { pinUserData } from "../../exports/messageExport";
import { SearchComponent as Search } from "l-min-components/src/components";
import {
  MessageLeftWrapper,
  MessagesListWrapper,
  UserMessagesWrapper,
} from "./styles";
import EditIcon from "../../assets/svg/editIcon";
import MessageUserItem from "../../components/message user Item";
import profileImg from "./../../assets/images/profile-img-2.png";
import Pin from "../../assets/svg/pin";
import MiniMessage from "../../assets/svg/mini-messages";

const MessagesLeftSection = () => {
  return (
    <MessageLeftWrapper>
      <div className="header">
        <h1>
          <ArrowLeft />
          <span>Messages</span>
        </h1>
        <div className="edit">
          <EditIcon />
        </div>
      </div>
      <MessagesListWrapper>
        <div className="search_section">
          <Search placeholder="Search" />
        </div>
        <UserMessagesWrapper>
          <div className="s_header">
            <Pin />
            <p>PINED</p>
          </div>
          <div className="s_section">
            {pinUserData.map((user, idx) => (
              <MessageUserItem
                key={idx}
                image={profileImg}
                title="Tom Wright"
                message="Wow really 🔥"
                time="4:55 PM"
                unreadNumber={user.unread}
                isOnline={user.online}
              />
            ))}
          </div>
        </UserMessagesWrapper>
        <UserMessagesWrapper>
          <div className="s_header">
            <MiniMessage />
            <p>ALL MESSAGES</p>
          </div>
          <div className="s_section">
            {pinUserData.map((user, idx) => (
              <MessageUserItem
                key={idx}
                image={profileImg}
                title="Tom Wright"
                message="Wow really 🔥"
                time="4:55 PM"
                unreadNumber={user.unread}
                isOnline={user.online}
              />
            ))}
          </div>
        </UserMessagesWrapper>
      </MessagesListWrapper>
    </MessageLeftWrapper>
  );
};

export default MessagesLeftSection;
