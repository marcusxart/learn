import CalendarIcon from "../../../../../assets/svg/calendar3";
import InstructorIcon from "../../../../../assets/svg/instructorIcon";
import { StarIcon } from "../../../../../assets/svg/star";
import TimeIcon from "../../../../../assets/svg/timeIcon";
import { CourseOverviewContainer } from "./style";
import friendPhoto from "../../../../../assets/images/Ellipse.png";
import VideoPlayer from "../../../../../components/video player";
const CourseOverview = () => {
  return (
    <CourseOverviewContainer>
      <VideoPlayer />
      <div className="course_overview_title">
        <div className="course_overview_left">
          <h2>Intermediate french for learners</h2>
          <p>University of France</p>
        </div>
        <div className="course_overview_right">
          <StarIcon />
          <span>4.8</span>
          <span>・</span>
          <span>70k learners</span>
        </div>
      </div>
      <p className="course_overview_summary">
        Lorem ipsum dolor sit amet is a dummy text used in design, it is less
        distracting and allows us focus on the beuaty of design rather than some
        chunky texts like this one right here. Lorem ipsum dolor sit amet is a
        dummy text used in design.
      </p>
      <div className="course_overview_details">
        <div className="course_instructor">
          <div className="instructor_header">
            <InstructorIcon /> <span>Instructor</span>
          </div>
          <p>Mary Jones</p>
        </div>
        <div className="course_time">
          <div className="time_header">
            <TimeIcon /> <span>Total time</span>
          </div>
          <p>58 hours</p>
        </div>
        <div className="friend_count_list">
          <div className="friend_photos">
            <div className="friend_photo">
              <img src={friendPhoto} alt="" />
            </div>
            <div className="friend_photo">
              <img src={friendPhoto} alt="" />
            </div>
            <div className="friend_photo">
              <img src={friendPhoto} alt="" />
              <div className="overlay">
                <span>+ 4k</span>
              </div>
            </div>
          </div>
          <p>Phoebe, John and 4k friends are taking this course</p>
        </div>
        <div className="course_duration">
          <div className="duration_header">
            <CalendarIcon /> <span>Course duration</span>
          </div>
          <p>March 13 2023 - April 15 2023</p>
        </div>
      </div>
    </CourseOverviewContainer>
  );
};
export default CourseOverview;
