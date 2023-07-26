import UserSwitchHeader from "../../../components/UserSwitchHeader";
import {
  AnnouncementPermissionContainer,
  MessageContainer,
} from "./index.styled";
import permissionImg from "../../../assets/images/permission-img.png";

const AnnouncementPermission = () => {
  return (
    <AnnouncementPermissionContainer>
      <UserSwitchHeader title="Frank Language Expert" />
      <MessageContainer>
        <img src={permissionImg} alt="" />
        <p>
          You do not have the permission to create announcement. Please check
          back or contact your Enterprise
        </p>
      </MessageContainer>
    </AnnouncementPermissionContainer>
  );
};

export default AnnouncementPermission;
