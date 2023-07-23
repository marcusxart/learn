import styled from "styled-components";
import MemberList from "../../pages/memberList";
import AddedMembers from "../../pages/memberList/addedMembers"


const Container = styled.div``;

const Index = () => {
    const [added, setAdded] = useState("general")


  return (
    <Container>
      {added === "general" &&
      <MemberList setAdded={setAdded} />
      }
      {added === "added" && 
      <AddedMembers setAdded={setAdded} />
      }
    </Container>
  );
};

export default Index;
