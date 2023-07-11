import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  EnterprisesContainer,
  ProfileSetting,
} from "./styles/index.styled";
import CourseList from "../../components/course/courseList";
import { enterprisesData } from "../../exports/profileExports";
import ArrowLeft from "../../assets/svg/arrowLeft";
import photoCover from "../../assets/images/profile-cover.png";
import profileImg from "../../assets/images/profile-img.png";
import { ButtonComponent as Button } from "l-min-components/src/components";
import EyeIcon from "../../assets/svg/eye";
import BlueMessageIcon from "./../../assets/svg/blueMessage";
import SocialFooter from "../../components/Social footer";
import ProfileSettingModal from "./profileSettingModal";
import ProfileInfo from "../../components/ProfileInfo";

const Profile = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {toggleModal && (
        <ProfileSettingModal close={() => setToggleModal(false)} />
      )}
      <Container>
        <div className="header">
          <div onClick={() => navigate("/dashboard")}>
            <ArrowLeft />
            <h1>My profile</h1>
          </div>
          <Button text="Manage Subscriptions" />
        </div>
        <ProfileInfo
          profileImg={profileImg}
          profileCoverImg={photoCover}
          onClick1={() => navigate("/profile/james")}
          onClick2={() => navigate("/profile/edit")}
        />
        <ProfileSetting>
          <div onClick={() => setToggleModal(true)}>
            <p>Profile view settings</p>
            <EyeIcon />
          </div>
        </ProfileSetting>

        <EnterprisesContainer>
          <h2>Enterprises</h2>
          <div className="enterprises_wrapper">
            {enterprisesData.map((item, idx) => (
              <div key={idx}>
                <div className="left_wrap">
                  <item.brandIcon />
                  <div>
                    <p>{item.title}</p>
                    <p>{item.time}</p>
                  </div>
                </div>
                <BlueMessageIcon onClick={() => navigate("/messages")} />
              </div>
            ))}
          </div>
        </EnterprisesContainer>

        <CourseList />
        <SocialFooter />
      </Container>
    </>
  );
};

export default Profile;
