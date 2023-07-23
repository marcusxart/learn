import React, {useState} from 'react';
import styled from 'styled-components';
import {  useNavigate} from "react-router-dom";
import {
  ButtonComponent,
  Checkbox,
  InputComponent,
  SelectDropdown,
  DropDownComponent 
} from "l-min-components/src/components";
import Tooltip from 'rc-tooltip';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  height: 100%;
  margin-top: -3%;

 
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  .mail{
    margin-left: 1.5%;
  }

  .check{
    display: flex;
    align-items: center;
    color: #313333;
    font-size: 14px;
    line-height: 19px;
    margin-right: 19.5%;
  }
`;

const ContactList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  /* gap: 10px; */
  display: flex;
  flex-direction: column;

 
`;

const ContactItem = styled.li`
  display: grid;
  grid-template-columns: auto 30%;
  grid-gap: 20px;
  align-items: center;
  padding: 10px;


 
`;

const Email = styled.span`
  font-weight: bold;
  padding: 6px 8px;
  border: 0.825222px solid #00C2C2;
  border-radius: 9.90267px;
  color: #00C2C2;
  height: 37px;
  font-style: normal;
font-weight: 400;
font-size: 14.854px;
`;

const Duration = styled.span`
  font-style: italic;
  // padding: 6px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.825222px solid #7C8080;
  border-radius: 9.90267px;
  color: #7C8080;
  height: 37px;
  font-style: normal;
font-weight: 400;
font-size: 14.854px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  .proceed{
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin: 0 10px;

  &:hover {
    background-color: #0069d9;
  }
`;

const emailContacts = [
  {
    email: 'Gbenga@gmail.com',
    duration: '12/04/23 - 13/07/23',
  },
  {
    email: 'janedoe@gmail.com',
    duration: '12/04/23 - 13/07/23',
  },
  {
    email: 'bobsmith@gmail.com',
    duration: '12/04/23 - 13/07/23',
  },
  {
    email: 'bobsmith@gmail.com',
    duration: '12/04/23 - 13/07/23',
  },
  {
    email: 'bobsmith@gmail.com',
    duration: '12/04/23 - 13/07/23',
  },
  {
    email: 'bobsmith@gmail.com',
    duration: '12/04/23 - 13/07/23',
  },
  {
    email: 'bobsmith@gmail.com',
    duration: '12/04/23 - 13/07/23',
  },
  {
    email: 'bobsmith@gmail.com',
    duration: '12/04/23 - 13/07/23',
  },
  
];



const MemberList = ({ setAdded }) => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const handleChange = (newValue) => {
    setChecked(newValue);
  };

  return (
    <Container>
      <ContactList>
         <Top>
            <div className='mail'>
              <p>Email</p>
            </div>
          
            <div className='check'>
            <Checkbox
              label="Contract Duration"
              color="#313333"
              defaultValue={checked}
              onChange={handleChange}
              size="20px"
            />
          
            </div>
          </Top>
        {emailContacts.map((contact) => (
          <ContactItem key={contact.email}>
             
            <Email>{contact.email}</Email>
            <Duration>{contact.duration}</Duration>
          </ContactItem>
        ))}
      </ContactList>
      <ButtonContainer>
       <div className="proceed">
         <ButtonComponent
            text="Done"
            type="primary"
            onClick={() => setAdded("added")}
            styles={{
              width: "100%",
              height: "50px",
              
            }}
          />
          </div>
        {/* <Button onClick={() => navigate("/team/success")}>Done</Button> */}
        {/* <Button>Invite</Button> */}
        <ButtonComponent
            text="Invite"
            type="primary"
            onClick={() => setAdded("added")}
            styles={{
              width: "100%",
              marginTop: "20px",
              background: "#fff",
              color: "#E6AD0E",
              height: "50px",
            }}
          />
      </ButtonContainer>
    </Container>
  );
};

export default MemberList;
