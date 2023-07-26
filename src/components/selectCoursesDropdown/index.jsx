import { useState } from "react";
import { Checkbox } from "l-min-components/src/components";
import SelectArrow from "../../assets/svg/selectArrow";
import {
  DropdownContainer,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
  CheckboxLabel,
} from "./style";

function MultiSelectDropdown({
  courses,
  value,
  onChange,
  placeholder,
  audienceDropdown,
  width,
  radius,
  margin,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleDropdownClick() {
    setIsOpen(!isOpen);
  }

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

  function handleSelectAllCheckboxChange() {
    if (value.length === courses.length) {
      onChange([]);
    } else {
      onChange([...courses]);
    }
  }

  return (
    <DropdownContainer>
      <DropdownButton onClick={handleDropdownClick}>
        <p> {value?.length <= 0 ? placeholder : value?.join(", ")}</p>
        <span>
          <SelectArrow />
        </span>
      </DropdownButton>
      {isOpen && (
        <DropdownMenu width={width} radius={radius} margin={margin}>
          {/* <DropdownItem>
            <CheckboxLabel>
              <CheckboxInput
                type="checkbox"
                checked={value.length === courses.length}
                onChange={handleSelectAllCheckboxChange}
              />
              Select All
            </CheckboxLabel>
          </DropdownItem> */}
          {courses.map((course) => (
            <DropdownItem key={course}>
              <CheckboxLabel>
                {audienceDropdown ? (
                  <Checkbox
                    defaultValue={value.includes(course)}
                    color={"#ffdc16"}
                    onChange={() => handleCheckboxChange(course)}
                  />
                ) : (
                  ""
                )}

                <p className="course-list">{course}</p>
              </CheckboxLabel>
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
}

export default MultiSelectDropdown;
