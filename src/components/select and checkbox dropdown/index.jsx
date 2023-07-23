import { useState } from "react";
import { Checkbox } from "l-min-components/src/components";
import { styled } from "styled-components";
import ArrowDown from "../../assets/svg/arrowDown";

const SelectAndCheckboxDropdown = ({
  label,
  placeholder,
  value,
  options = [],
}) => {
  const [toggleDropdown, setToggleDropdown] = useState();
  return (
    <Container>
      {label && <p className="dropdown_label">{label}</p>}
      <DropdownContainer>
        <DropdownValueWrapper
          onClick={() => setToggleDropdown(!toggleDropdown)}
        >
          {placeholder && !value && <span>{placeholder}</span>}
          {value && <p>Select course(s)</p>} <ArrowDown />
        </DropdownValueWrapper>
        {toggleDropdown && options?.length > 0 && (
          <DropdownList>
            {options.map((option, idx) => (
              <li key={idx}>
                <Checkbox color="#ffb834" size="20px" />
                <span>
                  {option?.displayValue
                    ? option?.displayValue
                    : option?.value
                    ? option?.value
                    : option}
                </span>
              </li>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    </Container>
  );
};

export default SelectAndCheckboxDropdown;

const Container = styled.div`
  > .dropdown_label {
    padding: 0 30px;
    margin-bottom: 8px;
    p {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownValueWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 19px 30px;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  border-radius: 12px;
  background: #fff;
  svg {
    width: 24px;
    height: 24px;

    path {
      fill: #7c8080;
    }
  }
  p,
  span {
    color: #949999;
    font-size: 16px;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  top: 64px;
  z-index: 10;
  list-style: none;
  border-radius: 15px;
  background: #fff;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  li {
    display: flex;
    align-items: center;
    gap: 15px;
    svg {
      path {
        fill: #fff;
      }
    }
  }
`;