import { forwardRef } from "react";
import { styled } from "styled-components";
import DatePicker from "react-datepicker";
import { CalendarIcon } from "../../assets/svg/calendar";
import ArrowDown from "../../assets/svg/arrowDown";

const CustomDatePicker = ({ startDate, setStartDate }) => {
  const month = startDate.toLocaleString("default", { month: "long" });
  const year = startDate.getFullYear();

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <Button onClick={onClick} ref={ref} className="example-custom-input">
      <div>
        <CalendarIcon fill="#949999" />{" "}
        <span>
          {month} {year}
        </span>
      </div>
      <ArrowDown fill="#949999" width={18} height={18} />
    </Button>
  ));

  CustomInput.displayName = "Custom input";
  return (
    <div>
      <DatePicker
        selected={startDate}
        customInput={<CustomInput />}
        onChange={(date) => setStartDate(date)}
        maxDate={new Date()}
      />
    </div>
  );
};

export default CustomDatePicker;

const Button = styled.button`
  border: 1px solid #dfe6e6;
  border-radius: 12px;
  background-color: #fff;
  width: fit-content;
  display: flex;
  padding: 8.5px 20px;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  > div {
    display: flex;
    gap: 5px;
    align-items: center;
    span {
      color: #7c8080;
      font-size: 12px;
    }
  }
`;
