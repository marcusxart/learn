import { useState } from "react";
import { styled } from "styled-components";
import { ManageCourseTable } from "../../index.styled";
import Pencil from "../../../../assets/svg/pencil";
import Cancel from "../../../../assets/svg/cancel";
import WarningModal from "../../../../components/warning modal";
import AssignedCourseModal from "../assigned course modal";

const PendingTable = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [assignedModal, setAssignedModal] = useState(null);
  const testArr = [1, 1, 1, 1, 1, 1, 1];
  return (
    <>
      {deleteModal && (
        <WarningModal
          message="You are about to cancel frank@example.com invitation. Proceeding makes the link sent invalid."
          btnText="Withdraw invite"
          cancel={() => setDeleteModal(false)}
        />
      )}
      {assignedModal && (
        <AssignedCourseModal close={() => setAssignedModal(null)} />
      )}
      <Container>
        <div className="t_header">
          <p className="name">Email</p>
          <p>Date invited</p>
          <p className="center">Cancel invite</p>
          <p className="center">Edit assigned course(s)</p>
        </div>
        <div className="t_body">
          {testArr.map((i, idx) => (
            <div className="row" key={idx}>
              <div className="email">
                <span className="truncate ">shaneymiller@mail.com</span>
              </div>
              <div>
                <span>10th Dec 2022</span>
              </div>
              <div className="center">
                <Cancel onClick={() => setDeleteModal(true)} />
              </div>
              <div className="center">
                <Pencil onClick={() => setAssignedModal({ id: idx })} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default PendingTable;

const Container = styled(ManageCourseTable)`
  .t_header {
    p {
      width: 160px;
    }
  }
  .t_body {
    .row {
      > div {
        span {
          color: #636666;
        }
        svg {
          cursor: pointer;
        }
        width: 160px;
        &.center {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;
