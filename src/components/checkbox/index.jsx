import { useState } from "react";
import { styled } from "styled-components";
import { BsCheck } from "react-icons/bs";

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Container>
      {/* <input type="checkbox" name="" id="" /> */}
      <CheckControl checked={checked} onClick={() => setChecked(!checked)}>
        <BsCheck fill={checked ? "#fff" : "transparent"} />
      </CheckControl>
      <p>{label}</p>
    </Container>
  );
};

const Container = styled.label`
  display: flex;
  align-items: center;
  gap: 14px;
  p {
    font-size: 14px;
    color: #7c8080;
  }
`;

const CheckControl = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: 1.5px solid ${({ checked }) => (checked ? "transparent" : "#c6cccc")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ checked }) => (checked ? "#febf10" : "transparent")};
`;

export default Checkbox;
