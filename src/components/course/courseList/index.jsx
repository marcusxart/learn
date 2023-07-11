import React from "react";
import Card1 from "../card1";
import courseImg from "../../../assets/images/course_photo.png";
import { styled } from "styled-components";

const CourseList = () => {
  const testData = [1, 2, 4, 5, 6, 4];
  return (
    <CoursesContainer>
      <h2>My Courses</h2>
      <Grid>
        {testData.map((course, idx) => (
          <Card1
            key={idx}
            img={courseImg}
            descId="FRAN202"
            title="French for beginner learners"
            rating="4.8"
            learners="70k learners"
          />
        ))}
      </Grid>
    </CoursesContainer>
  );
};

export default CourseList;

const CoursesContainer = styled.div`
  padding: 20px;
  padding-top: 25px;
  background: #ffffff;
  border-radius: 40px;
  margin-bottom: 30px;
  h2 {
    text-align: center;
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
