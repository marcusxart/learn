import { useState } from "react";
import {
  ChatContainer,
  ChatHeader,
  ChatHeaderDropdown,
  ChatInputWrappper,
} from "./index.styled";
import { Figma } from "../../../../assets/svg/brand-icons";
import MoreAlt from "../../../../assets/svg/moreAlt";
import ChatContents from "../chatContents";
import SendIcon from "../../../../assets/svg/sendIcon";
import Mircophone from "../../../../assets/svg/microPhone";
import GalleryIcon from "../../../../assets/svg/galleryIcon";
import EmojiIcon from "../../../../assets/svg/emojiIcon";

const ChatSection = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <ChatContainer>
      <ChatHeader>
        <div className="header_wrap">
          <div className="left">
            <div className="img_box">
              <Figma />
            </div>
            <div className="info_desc">
              <h2>The Figma School</h2>
              <p>San Francisco</p>
            </div>
          </div>
          <ChatHeaderDropdown>
            <MoreAlt onClick={() => setToggleDropdown(!toggleDropdown)} />
            {toggleDropdown && (
              <ul>
                <li>Pin chat</li>
                <li>Report User</li>
                <li>Delete chat</li>
              </ul>
            )}
          </ChatHeaderDropdown>
        </div>
      </ChatHeader>
      <ChatContents />
      <ChatInputWrappper>
        <div className="actions_wrap">
          <div className="wrapper">
            <GalleryIcon />
            <Mircophone />
            <input type="text" placeholder="Start typing..." />
            <EmojiIcon />
          </div>
          <button>
            <SendIcon />
          </button>
        </div>
      </ChatInputWrappper>
    </ChatContainer>
  );
};

export default ChatSection;
