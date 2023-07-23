import ArrowLeft from "../../assets/svg/arrowLeft";
import UserSwitchHeader from "../../components/UserSwitchHeader";
import {
  StudentScoreAndCommentContainer,
  StudentScoreAndCommentContent,
} from "./index.styled";
import { student1 } from "../../assets/images/students";
import SoundPlaySection from "./components/sound play";
const StudentScoreAndComment = () => {
  return (
    <StudentScoreAndCommentContainer>
      <UserSwitchHeader title="Frank Language Expert" />
      <h1>
        <ArrowLeft />
        <span>Test 1</span>
      </h1>
      <StudentScoreAndCommentContent>
        <div className="content_header">
          <img src={student1} alt="" />
          <div>
            <p>Shaney Miller</p>
            <p>shaneymiller@learngual.com</p>
          </div>
        </div>
        <SoundPlaySection />
      </StudentScoreAndCommentContent>
    </StudentScoreAndCommentContainer>
  );
};

export default StudentScoreAndComment;
