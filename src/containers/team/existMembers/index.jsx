import React, { useState } from "react";
import TeamTabs from "../../teamTabs/existTabs";
import { ButtonComponent, SearchComponent} from "l-min-components/src/components/";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../../../assets/svg/arrowLeft"
import { Container, Header, Title, ContentBox } from "./style";

const Index = () => {
 const navigate = useNavigate()
  return (
    <Container>
      <Header>
        <Title onClick={() => navigate(-1)}> <ArrowLeft/> Choose Existing Members</Title>
       <ButtonComponent text="Proceed" onClick={() => navigate('/manage-teams/add')}/>
      </Header>
      <ContentBox>
        <div className="search">
          <SearchComponent placeholder="Search by Name / Email / Username" border="1px solid #DFE6E6" />
        </div>
        <TeamTabs />
      </ContentBox>
    </Container>
  );
};

export default Index;



