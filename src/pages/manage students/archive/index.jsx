import {
  ArchiveHeader,
  ArchiveStudentsContainer,
  ArchiveStudentsContent,
  ArchiveTableContainer,
} from "./index.styled";
import UserSwitchHeader from "../../../components/UserSwitchHeader";

import { useState } from "react";
import ArrowLeft from "../../../assets/svg/arrowLeft";
import {
  SearchComponent as SearchBar,
  ButtonComponent as Button,
  Checkbox,
} from "l-min-components/src/components";
import { student1 } from "../../../assets/images/students";
import TrashIcon from "../../../assets/svg/trashIcon2";
import PlusBox from "../../../assets/svg/plusBox";
import WarningModal from "../../../components/warning modal";

const ArchiveStudents = () => {
  const testArr = [1, 1, 1, 1];
  const [unarchiveModal, setUnarchiveModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <>
      {unarchiveModal && (
        <WarningModal
          message="You’re about to unarchive Shanlry to {course}"
          subMessage="Unarchived students will regain access to the course files"
          btnText="Unarchive"
          cancel={() => setUnarchiveModal(false)}
        />
      )}
      {deleteModal && (
        <WarningModal
          message="You’re about to delete Shanlry 
          from {course}"
          subMessage="Student will be deleted permanently and will no longer have access to the course files"
          btnText="Delete"
          cancel={() => setDeleteModal(false)}
        />
      )}
      <ArchiveStudentsContainer>
        <UserSwitchHeader />
        <h1>
          <ArrowLeft />
          <span>French for complete beginners archive</span>
        </h1>
        <ArchiveStudentsContent>
          <ArchiveHeader>
            <div className="search">
              <SearchBar />
            </div>
            <div className="btn_group">
              <Button text="Unarchive Students" type="secondary" />
              <Button text="Delete Students" type="secondary" />
            </div>
          </ArchiveHeader>
          <ArchiveTableContainer>
            <div className="t_head">
              <div className="check_wrap">
                <Checkbox color="#FEBF10" />
              </div>
              <div className="row">
                <p>Name</p>
                <p>Email</p>
                <p className="action"></p>
              </div>
            </div>
            <div className="t_body">
              {testArr.map((item, idx) => (
                <div className="body_row" key={idx}>
                  <div className="check_wrap">
                    <Checkbox color="#FEBF10" />
                  </div>
                  <div className="row">
                    <div>
                      <img src={student1} alt="" />
                      <p>Shaney Miller</p>
                    </div>
                    <div className="">
                      <p>michelle.rivera@example.com</p>
                    </div>
                    <div className="action">
                      <PlusBox onClick={() => setUnarchiveModal(true)} />
                      <TrashIcon onClick={() => setDeleteModal(true)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ArchiveTableContainer>
        </ArchiveStudentsContent>
      </ArchiveStudentsContainer>
    </>
  );
};

export default ArchiveStudents;
