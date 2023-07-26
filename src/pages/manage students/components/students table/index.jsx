import { useState } from "react";

import { ManageCourseTable } from "../../index.styled";
import { student1 } from "../../../../assets/images/students";
import TrashIcon from "../../../../assets/svg/trashIcon2";
import MailIcon from "../../../../assets/svg/mailIcon";
import WarningModal from "../../../../components/warning modal";
import { useNavigate } from "react-router-dom";

const StudentsTable = () => {
  const [deleteModal, setDeleteModal] = useState();
  const navigate = useNavigate();
  const testArr = [1, 1, 1, 1, 1, 1, 1];

  return (
    <>
      {deleteModal && (
        <WarningModal
          message="Are you sure you want to remove shanlry?"
          btnText="Archive Student"
          footerbtnText="Delete Student"
          cancel={() => setDeleteModal(false)}
        />
      )}
      <ManageCourseTable>
        <div className="t_header">
          <p className="name">Name</p>
          <p className="email">Email</p>
          <p>Username</p>
          <p className="center">Courses offered</p>
          <p className="action"></p>
        </div>
        <div className="t_body">
          {testArr.map((i, idx) => (
            <div className="row" key={idx}>
              <div className="name">
                <img src={student1} alt="" />
                <div className="wrap">
                  <span className="truncate">Shaney Miller</span>
                </div>
              </div>
              <div className="email">
                <span className="truncate ">shaneymiller@mail.com</span>
              </div>
              <div>
                <span>@shaneymil</span>
              </div>
              <div className="center">
                <span>4</span>
              </div>
              <div className="action">
                <MailIcon onClick={() => navigate("/manage-students/enroll")} />
                <TrashIcon onClick={() => setDeleteModal(true)} />
              </div>
            </div>
          ))}
        </div>
      </ManageCourseTable>
    </>
  );
};

export default StudentsTable;
