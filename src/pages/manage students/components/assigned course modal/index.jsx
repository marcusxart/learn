import { useState } from "react";

import styled from "styled-components";
import CloseIcon from "../../../../assets/svg/closeIcon";
import {
  CheckboxGroup,
  ButtonComponent as Button,
} from "l-min-components/src/components";

const AssignedCourseModal = ({ close, onClick }) => {
  const [selectedValues, setSelectedValues] = useState([]);
  const options = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "French for Complete beginners1",
      label: "French for Complete beginners",
    },
    {
      value: "French for Complete beginners2",
      label: "French for Complete beginners",
    },
    {
      value: "French for Complete beginners3",
      label: "French for Complete beginners",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <span className="close" onClick={close}>
          <CloseIcon />
        </span>
        <Content>
          <SelectWrapper>
            <CheckboxGroup
              options={options}
              onChange={setSelectedValues}
              selectedValues={selectedValues}
              color="#FEBF10"
            />
          </SelectWrapper>
          <Button
            onClick={onClick}
            text="Update invite"
            styles={{
              padding: "10px 0",
              width: "160px",
              boxShadow: "0px 10px 20px 0px rgba(254, 191, 16, 0.25)",
              marginBottom: "25px",
            }}
          />
        </Content>
      </Wrapper>
    </Container>
  );
};

export default AssignedCourseModal;

const Container = styled.div`
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.15);
  position: fixed;
  inset: 0;
  z-index: 9999;
`;

const Wrapper = styled.div`
  width: 582px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  .close {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    svg {
      transform: scale(1.2);
    }
  }
`;

const Content = styled.div`
  padding: 30px;
  background-color: #fff;
  width: 100%;
  border-radius: 35px;
  ul {
    list-style: none;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 180px;
  margin-bottom: 20px;
  overflow: auto;
  svg {
    path {
      fill: #fff;
    }
  }
  span[color="#FEBF10"] {
    font-size: 16px;
    font-weight: 400;
  }
`;
