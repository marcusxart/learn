import styled from "styled-components";

export const CourseOverviewContainer = styled.div`
  padding: 18px 0;
  .course_overview_title {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    .course_overview_left {
      h2 {
        margin-bottom: 8px;
        font-size: 22px;
      }
      p {
        color: rgba(148, 153, 153, 1);
        font-size: 16px;
      }
    }
  }
  .course_overview_summary {
    color: rgba(148, 153, 153, 1);
    margin-bottom: 34px;
  }
  .course_overview_details {
    display: flex;
    gap: 40px;
    flex-flow: row wrap;

    .course_duration {
      flex-basis: 40%;
    }
    .friend_count_list {
      display: flex;
      flex-basis: 40%;
      .friend_photos {
        display: flex;
        width: fit-content;

        .friend_photo {
          width: 39px;
          height: 39px;
          border-radius: 50%;
          img {
            width: 100%;
            height: 100%;
          }
          &:nth-child(2) {
            position: relative;
            left: -10%;
            border: 2px solid white;
          }
          &:nth-child(3) {
            position: relative;
            left: -20%;
            border: 2px solid white;
            .overlay {
              position: absolute;
              top: 0;
              left: +10%;
              z-index: 22;
              background: rgba(0, 0, 0, 0.4);
              width: 100%;
              height: 100%;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              span {
                color: white;
                font-size: 12px;
              }
            }
          }
        }
      }
      p {
        font-size: 14px;
        font-weight: 400;
        margin-left: 8px;
        color: #7c8080;
      }
    }
    .course_instructor,
    .course_time {
      p {
        font-size: 18px;
      }
    }

    .course_duration {
      p {
        color: #313333;
        font-size: 16px;
      }
    }
    .instructor_header,
    .time_header,
    .duration_header {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
      span {
        margin-left: 7px;
        font-size: 14px;
        color: rgba(173, 178, 178, 1);
      }
    }
  }
`;
