import ArrowLeft from "../../../assets/svg/arrowLeft";
import UserSwitchHeader from "../../../components/UserSwitchHeader";
import {
  CourseParticipantsContainer,
  CourseParticipantsContent,
  CourseParticipantsList,
} from "./index.styled";
import {
  SearchComponent as SearchBar,
  ButtonComponent as Button,
} from "l-min-components/src/components";
import { student2 } from "../../../assets/images/students";
import UserIcon from "../../../assets/svg/user";
import ChatIcon from "../../../assets/svg/yellowMessage";
import { useNavigate } from "react-router-dom";
import Paginate from "../../../components/paginate";

const CourseParticipants = () => {
  const testArr = [1, 1, 1, 1, 1, 1, 1];
  const navigate = useNavigate();
  return (
    <CourseParticipantsContainer>
      <UserSwitchHeader />
      <h1
        onClick={() =>
          navigate("/manage-courses/details", { state: "active-row" })
        }
      >
        <ArrowLeft />
        <span>Participants</span>
      </h1>
      <CourseParticipantsContent>
        <div className="search">
          <SearchBar placeholder="Search" />
        </div>
        <CourseParticipantsList>
          {testArr.map((item, idx) => (
            <li key={idx}>
              <div className="left">
                <img src={student2} alt="" />
                <div className="info">
                  <p className="name">Randall West</p>
                  <div className="bottom_wrap">
                    <div className="tab">
                      <UserIcon />
                      <span>Student</span>
                    </div>
                    <span>@username</span>
                  </div>
                </div>
              </div>
              <Button
                text="Message"
                icon={{
                  jsx: ChatIcon,
                  left: true,
                }}
              />
            </li>
          ))}
        </CourseParticipantsList>
        <div className="paginate">
          <Paginate />
        </div>
      </CourseParticipantsContent>
    </CourseParticipantsContainer>
  );
};

export default CourseParticipants;
