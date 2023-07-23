import React, { useState } from "react";
// import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import { ButtonComponent } from "l-min-components/src/components";
import { useNavigate } from "react-router-dom";
import AddMemberForm from "../../components/addMemberForm";
import ArrowLeft from "../../assets/svg/arrowLeft";
import { Container, BackButton,ContentBox, Header, Title, Content } from "./style";


const AddTeamPage = () => {
  //   const history = useHistory();

  const [isOpen, setIsOpen] = useState(false)

  const handleBackButtonClick = () => {
    //     history.goBack();
  };
  const navigate = useNavigate();
  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        <ArrowLeft /> Add Member
      </BackButton>

      <ContentBox>
        <Header>
          <Title>Add Members</Title>
          <p>4 out of 5 slots used</p>
          <ButtonComponent
            text="Upgrade now"
            type="primary"
            onClick={() => navigate("/manage-teams/add")}
          />
        </Header>
        {/* Add content here */}
        <Content>
          <AddMemberForm />
        </Content>
      </ContentBox>
      
    </Container>
  );
};

export default AddTeamPage;
