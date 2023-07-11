import {
  ProfileInfoContainer,
  ProfileInfoBottomSection,
  ProfileInfoTopSection,
} from "./index.styled";
import EditIcon from "../../assets/svg/editIcon";
import AddUserIcon from "../../assets/svg/addUser";
import { ButtonComponent as Button } from "l-min-components/src/components";
import { otherInfo, languages } from "../../exports/profileExports";

const ProfileInfo = ({
  profileImg,
  profileCoverImg,
  otherUser,
  onClick1,
  onClick2,
}) => {
  return (
    <ProfileInfoContainer>
      <ProfileInfoTopSection>
        <div className="profile__cover__img">
          <img src={profileCoverImg} alt="" />
        </div>

        <div className="profile__detail">
          <div>
            <div className="profile_img">
              <img src={profileImg} alt="" />
            </div>
            <div className="left_content">
              <h2>Frank Language Expert</h2>
              <div className="btn__wrap">
                <>
                  {!otherUser ? (
                    <>
                      <Button
                        text="View as visitor"
                        type="secondary"
                        onClick={onClick1}
                      />
                      <Button
                        text="Edit profile"
                        onClick={onClick2}
                        icon={{
                          jsx: EditIcon,
                          left: true,
                          stroke: "#ffffff",
                        }}
                      />
                    </>
                  ) : (
                    <Button
                      text="Add Friend"
                      onClick={onClick1}
                      icon={{
                        jsx: AddUserIcon,
                        left: true,
                        stroke: "#ffffff",
                      }}
                    />
                  )}
                </>
              </div>
            </div>
          </div>
        </div>
      </ProfileInfoTopSection>
      <ProfileInfoBottomSection>
        <div className="info_content">
          <div className="lang__wrapper">
            {languages.map((language, idx) => (
              <div className="language" key={idx}>
                <language.flag />
                <span>{language.name}</span>
              </div>
            ))}
          </div>
          <div className="other_info_wrapper">
            {otherInfo.map((item, idx) => (
              <div key={idx}>
                <item.icon />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi
        </p>
      </ProfileInfoBottomSection>
    </ProfileInfoContainer>
  );
};

export default ProfileInfo;
