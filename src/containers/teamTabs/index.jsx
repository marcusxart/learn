import { useState } from "react";
import StudentTable from "../../components/studenttable";
import InstructorTable from "../../components/instructorTable";
import ArchivedTable from "../../components/archivedtable";
import PendingTable from "../../components/peningTable";
import { MdCancel} from 'react-icons/md'
import { archivedData, instructors, students, tabs } from "../../exports";
import { ButtonComponent, Checkbox } from "l-min-components/src/components";
import Cancel2 from "../../assets/svg/cancle2"
import { Container, TabsContainer, Tab, ContentContainer, ModalActions, ModalText, ModalContent, DropdownItem, CheckboxLabel } from "./style";
import Modal from "../../components/modal";
import DeleteImage from "../../assets/images/delete.png";
import Mark from "../../assets/images/Subtract.png";

const TeamTabs = ({modalHeight, width }) => {
  const [activeTab, setActiveTab] = useState("students");
  const [rowHover, setRowHover] = useState("empty");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const [courseModal, setCourseModal] = useState(false)
  const [userToRestore, setUserToRestore] = useState("");
  const [edit, setEdit] = useState(false)
  const [cancel, setCancel] = useState(false)
  const [success, setSuccess] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState("all");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleConfirmRestore = () => {
    // Code to delete the user goes here
    setShowModal(false);
  };
  const courses = ["French for beginners", "French for Complete beginners", "French for Complete beginners", "Spanish for Complete beginners"]

  function handleCheckboxChange(course) {
    const newValue = [...value];
    const index = newValue.indexOf(course);
    if (index === -1) {
      newValue.push(course);
    } else {
      newValue.splice(index, 1);
    }
    onChange(newValue);
  }

  return (
    <Container>
      <TabsContainer>
        {tabs.map((tab) => (
          <Tab
            key={tab.name}
            active={activeTab === tab.name}
            onClick={() => handleTabClick(tab.name)}
          >
            {tab.label} (<span>{tab.count}</span>)
          </Tab>
        ))}
        {/* {rowHover === "hover" &&  */}
        <p>You are currently viewing students offering  <span>French for complete beginners <Cancel2 className="cancel"/></span></p>
        {/* } */}
        
      </TabsContainer>
      <ContentContainer>
        {activeTab === "students" && <StudentTable students={students} setRowHover={setRowHover} />}
        {activeTab === "instructors" && (
          <InstructorTable instrucorData={instructors} />
        )}
        {activeTab === "pending" && <PendingTable data={archivedData} setIsOpen={setIsOpen} setCancel={setCancel} setEdit={setEdit} />}
        {activeTab === "archived" && <ArchivedTable data={archivedData} setIsOpen={setIsOpen} setCancel={setCancel} setEdit={setEdit} />}
      </ContentContainer>
      {success && (
        <Modal isOpen={isOpenSuccess} onClose={() => setIsOpenSuccess(false)} width="30%" modalHeight="45%" >
             <ModalContent>
              <div className="success">
              <img src={Mark} />
              <p>Invitation updated successfully</p>
              </div>
               
             </ModalContent>
        </Modal>
      )}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} width="35%" modalHeight="auto">
        {!edit ? 
         <ModalContent>
            <img src={DeleteImage} alt="" />
           <ModalText>
            {/* {change content for cancel and remove} */}
            {cancel ? 
            <div>
              <p className="warning">You are about to cancel <span> johnsmith@example.com {userToRestore}</span> Invitation.</p> 
              <p>Proceeding makes the link sent invalid</p> 
            </div>
              : 
            <p className="warning">Are you sure you want to Restore Shaney {userToRestore} ?</p>
            } 
           </ModalText>
           <ModalActions>
             <ButtonComponent
               styles={{
                 color: "#feb10e",
                 background: "#fff",
                 border: `1px solid #feb10e`,
                 maxWidth: "250px",
                 padding: "7px 14px",
                 height: "45px",
                 width: "150px",
                 borderRadius: "14px",
                 fontSize: "14px",
                 
               }}
               text={"Cancel"}
               onClick={() => setIsOpen(false)}
             />

            {cancel ? 
             <ButtonComponent
               onClick={handleConfirmRestore}
               styles={{
                 color: "#fff",
                 background: "#feb10e",
                 maxWidth: "250px",
                 padding: "7px 14px",
                 height: "45px",
                 width: "150px",
                 borderRadius: "14px",
                 fontSize: "14px",
               }}
               text={"Withdraw invite"}
             />
             :
             <ButtonComponent
             onClick={handleConfirmRestore}
             styles={{
               color: "#fff",
               background: "#feb10e",
               maxWidth: "250px",
               padding: "7px 14px",
               height: "45px",
               width: "150px",
               borderRadius: "14px",
               fontSize: "14px",
             }}
             text={"Restore"}
           /> 
           }
           </ModalActions>
          </ModalContent>
          : 
          <ModalContent >
            <div className="edit">
            {courses.map((course) => (
            <DropdownItem key={course}>
              <CheckboxLabel>
                <Checkbox  color={"#feb10e"}  onChange={() => handleCheckboxChange(course)}/>
                <p className="course-list">{course}</p> 
              </CheckboxLabel>
            </DropdownItem>
          ))}
            <ModalActions>
              <ButtonComponent
                onClick={() => {
                  setIsOpen(false) 
                  setSuccess(true)
                  setIsOpenSuccess(true)
                }}
                styles={{
                  color: "#fff",
                  background: "#feb10e",
                  maxWidth: "250px",
                  padding: "7px 14px",
                  marginTop: "40px",
                  height: "45px",
                  width: "150px",
                  borderRadius: "14px",
                  fontSize: "14px",
                }}
                text={"Update Invite"}
              />
            </ModalActions>
            </div>
          
          </ModalContent>
          
          }
      </Modal>
    </Container>
  );
};

export default TeamTabs;
