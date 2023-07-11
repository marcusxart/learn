import { useNavigate } from "react-router-dom";
import {
  InputComponent as InputField,
  ButtonComponent as Button,
} from "l-min-components/src/components";

import {
  ProfileEditContainer,
  MainContentContent,
  ProfileTopSection,
  FormContainer,
} from "./index.styled";
import coverImg from "../../assets/images/profile-cover.png";
import profileImg from "../../assets/images/profile-img.png";
import ArrowLeft from "../../assets/svg/arrowLeft";
import CameraIcon from "../../assets/svg/camera";
import XMarkIcon from "../../assets/svg/xMarkCircle";
import SocialInput from "../../components/SocialInput";

const ProfileEdit = () => {
  const navigate = useNavigate();
  return (
    <ProfileEditContainer>
      <div className="header" onClick={() => navigate("/profile")}>
        <ArrowLeft />
        <h1>Edit profile</h1>
      </div>
      <MainContentContent>
        <ProfileTopSection>
          <div className="cover_img_wrap">
            <div className="cover_img_overlay">
              <img src={coverImg} alt="" />
            </div>
            <div className="actions">
              <CameraIcon />
              <XMarkIcon />
            </div>
          </div>
          <div className="profile_img_wrap">
            <div className="profile_box">
              <div className="img_wrap">
                <img src={profileImg} alt="" />
              </div>
              <div className="action">
                <CameraIcon />
              </div>
            </div>
          </div>
        </ProfileTopSection>
        <FormContainer>
          <div className="info_wrap">
            <InputField placeholder="@shaneymiller" label="Username" />
            <InputField
              placeholder="shanneythelingual@gmail.com"
              label="Email"
              type="email"
            />
            <InputField
              placeholder="I love travelling and learning new languages"
              label="Bio"
            />
          </div>

          <div className="social_inputs_wrap">
            <p className="header">Social links</p>
            <div className="input_wrapper">
              <SocialInput url="http://twitter.com/" />
              <SocialInput url="http://www.linkedin.com/" />
              <SocialInput url="http://www.facebook.com/" />
              <SocialInput url="http://www.Instagram.com/" />
            </div>
          </div>
          <Button text="Save changes" styles={{ width: "100%" }} />
        </FormContainer>
      </MainContentContent>
    </ProfileEditContainer>
  );
};

export default ProfileEdit;
