import { useState } from "react";
import ArrowLeft from "../../../../assets/svg/arrowLeft";
import { pinUserData } from "../../../../exports/messageExport";
import { SearchComponent as Search } from "l-min-components/src/components";
import {
  MessageLeftWrapper,
  MessagesListWrapper,
  UserMessagesWrapper,
} from "./index.styled";
import EditIcon from "../../../../assets/svg/editIcon";
import MessageUserItem from "../../../../components/message user Item";
import profileImg from "../../../../assets/images/profile-img-2.png";
import Pin from "../../../../assets/svg/pin";
import MiniMessage from "../../../../assets/svg/mini-messages";
import StudentListModal from "../studentListModal";
import { useNavigate } from "react-router-dom";

const MessagesLeftSection = () => {
  const [toggleStudentList, setToggleStudentList] = useState();
  const navigate = useNavigate();
  return (
    <>
      {toggleStudentList && (
        <StudentListModal close={() => setToggleStudentList(false)} />
      )}
      <MessageLeftWrapper>
        <div className="header">
          <h1 onClick={() => navigate(-1)}>
            <ArrowLeft />
            <span>Messages</span>
          </h1>
          <div className="edit">
            <EditIcon onClick={() => setToggleStudentList(true)} />
          </div>
        </div>
        <MessagesListWrapper>
          <div className="search_section">
            <Search placeholder="Search" />
          </div>
          <div className="wrap_list">
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
          </div>
        </MessagesListWrapper>
      </MessageLeftWrapper>
    </>
  );
};

export default MessagesLeftSection;
