import { useState } from "react";
import StudentTable from "../../../components/studenttable/existingStudent";
import InstructorTable from "../../../components/instructorTable/existInstructor";
import { MdCancel} from 'react-icons/md'
import { archivedData, instructors, students, existTabs, existStudents } from "../../../exports";
import Cancel2 from "../../../assets/svg/cancle2"
import { Container, TabsContainer, Tab, ContentContainer } from "./style";

const TeamTabs = () => {
  const [activeTab, setActiveTab] = useState("students");
  const [rowHover, setRowHover] = useState("empty")

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Container>
      <TabsContainer>
        <div className="tabs">
        {existTabs.map((tab) => (
          <Tab
            key={tab.name}
            active={activeTab === tab.name}
            onClick={() => handleTabClick(tab.name)}
          >
            {tab.label} (<span>{tab.count}</span>)
          </Tab>
        ))}
        </div>
        
        <p className="selected">You have selected 26 Students and 3 Instructors </p>
        
      </TabsContainer>
      <ContentContainer>
        {activeTab === "students" && <StudentTable existStudents={existStudents} setRowHover={setRowHover} />}
        {/* {activeTab === "instructors" && (
          <InstructorTable instrucorData={instructors} />
        )} */}
        {activeTab === "instructors" && (
          <StudentTable existStudents={existStudents} setRowHover={setRowHover} />
        )}
      </ContentContainer>
    </Container>
  );
};

export default TeamTabs;
