import { MessagesContainer } from "./styles";
import MessagesLeftSection from "./components/leftSection";
import ChatSection from "./components/chatSection";

const Messages = () => {
  return (
    <MessagesContainer>
      <MessagesLeftSection />
      <ChatSection />
    </MessagesContainer>
  );
};

export default Messages;
