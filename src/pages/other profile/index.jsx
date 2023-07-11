import { useNavigate } from "react-router-dom";
import {
  OtherProfileContainer,
  EnterprisesWrapper,
  GridBox,
} from "./styles/index.styled";
import { enterprisesData } from "../../exports/profileExports";
import ArrowLeft from "../../assets/svg/arrowLeft";
import SocialFooter from "../../components/Social footer";
import ProfileInfo from "../../components/ProfileInfo";
import photoCover from "../../assets/images/profile-cover.png";
import profileImg from "../../assets/images/profile-img.png";
import CourseList from "../../components/course/courseList";

const OtherProfile = () => {
  const navigate = useNavigate();
  return (
    <OtherProfileContainer>
      <div className="header" onClick={() => navigate(-1)}>
        <ArrowLeft />
        <p>Back</p>
      </div>
      <ProfileInfo
        otherUser
        profileCoverImg={photoCover}
        profileImg={profileImg}
      />
      <EnterprisesWrapper>
        <h2>Enterprises</h2>
        <GridBox>
          {enterprisesData.map((enterprise, idx) => (
            <div key={idx}>
              <enterprise.brandIcon />
              <p className="truncate">{enterprise.title}</p>
            </div>
          ))}
        </GridBox>
      </EnterprisesWrapper>
      <CourseList />
      <SocialFooter />
    </OtherProfileContainer>
  );
};

export default OtherProfile;
