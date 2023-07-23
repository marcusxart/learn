import React, { useState } from "react";
import TeamTabs from "../teamTabs";
import Modal from "../../components/modal";
import CourseList from "../../components/course/courseList";
// import { CourseList } from "l-min-components/src/components";
import {
  ButtonComponent,
  SearchComponent,
} from "l-min-components/src/components/";
import { useNavigate } from "react-router-dom";
import { Courses } from "../../exports";
import { Container, Header, Title, ContentBox, Slot } from "./style";
import NoTeam from "../../components/noTeam";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [emptyTeam, setEmptyTeam] = useState(false)
  const navigate = useNavigate();
  
  return (
    <Container>
      <Header>
        <Title>Manage Teams</Title>
        <ButtonComponent text="add member" onClick={() => setIsOpen(true)} />
      </Header>
      <ContentBox>
        <Slot>
          <div></div>
          <div className="slot">
            <p> 4 out of 5 slots used</p>
            <ButtonComponent
              type="primary"
              text="Upgrade now"
              styles={{
                fontSize: "14px",
                height: "28px",
                fontWeight: "bold",
              }}
            />
          </div>
          <div></div>
        </Slot>
        <div className="search">
          <SearchComponent
            placeholder="Search by Name / Email / Username"
            border="1px solid #DFE6E6"
          />
        </div>
        {/* {emptyTeam === true ?  */}
        <TeamTabs /> 
        {/* : 
        <NoTeam/>
        } */}
      </ContentBox>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="title">Select a course you want to make Shanley an instructor for</h2>
        <CourseList courses={Courses} />
        <ButtonComponent text="Proceed" onClick={() => navigate("/manage-teams/add")} styles={{
          marginBottom: ""
        }} />
      </Modal>
    </Container>
  );
};

export default Index;
