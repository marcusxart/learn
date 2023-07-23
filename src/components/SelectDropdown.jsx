import { useState } from "react";
import { styled } from "styled-components";

const SelectDropdown = ({
  Icon,
  placeholder,
  value,
  options = [],
  dropDownClassName,
  onSelect,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const handleSelect = (value) => {
    onSelect && onSelect(value);
    setDropdown(false);
  };
  return (
    <Container>
      <div className="box" onClick={() => setDropdown(!dropdown)}>
        {Icon && <Icon />}
        <p>{value || placeholder || "Filter"}</p>
      </div>
      {dropdown && options?.length > 0 && (
        <DropDown className={dropDownClassName}>
          {options.map((option, idx) => (
            <li key={idx} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </DropDown>
      )}
    </Container>
  );
};

export default SelectDropdown;

const Container = styled.div`
  position: relative;
  > .box {
    display: flex;
    gap: 10px;
    white-space: nowrap;
    cursor: pointer;
    align-items: center;
    padding: 10px;
    padding-right: 20px;
    border: 1px solid #dfe5e5;
    width: fit-content;
    border-radius: 12px;
  }
`;

const DropDown = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  width: 240px;
  padding: 18px 0;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  border-radius: 25px;
  list-style: none;
  background-color: #fff;
  border: 1px solid #c6cccc;
  position: absolute;
  z-index: 3;
  right: 0;
  top: 43px;
  li {
    cursor: pointer;
    font-size: 14px;
    width: 100%;
    font-weight: 600;
    padding: 12px 30px;
  }
`;
