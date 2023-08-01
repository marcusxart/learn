import { forwardRef } from "react";
import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";
import { styled } from "styled-components";

import { leftDateIcon, rightDateIcon } from "./images";

const CustomDatePicker = ({
  CustomRender,
  date,
  setDate,
  startDate,
  placeholder,
  fit,
}) => {
  const handleOnMonth = (value, decrease, increase) => {
    if (value === -1) {
      decrease();
    } else if (value === 1) {
      increase();
    }
  };

  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <CustomRender
        inputRef={ref}
        onClick={onClick}
        inputValue={date}
        placeholder={placeholder}
      />
    );
  });
  CustomInput.displayName = "custom input";

  return (
    <>
      <Container fit={fit}>
        <ReactDatePicker
          selected={date}
          startDate={startDate}
          calendarClassName="datepicker_style"
          customInput={<CustomInput />}
          onChange={(date) => setDate(date)}
          renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
            <Header>
              <p>
                {date.toLocaleString("default", { month: "long" })}{" "}
                {date.getFullYear()}
              </p>
              <NavIcons>
                <div
                  onClick={() =>
                    handleOnMonth(-1, decreaseMonth, increaseMonth)
                  }
                >
                  <img src={leftDateIcon} alt="" />
                </div>
                <div
                  onClick={() => handleOnMonth(1, decreaseMonth, increaseMonth)}
                >
                  <img src={rightDateIcon} alt="" />
                </div>
              </NavIcons>
            </Header>
          )}
        />
      </Container>
    </>
  );
};
export default CustomDatePicker;

CustomDatePicker.prototype = {
  CustomRender: PropTypes.node,
};

const Container = styled.div`
  width: ${({ fit }) => (fit ? "fit-content" : "100%")};
  .react-datepicker-wrapper {
    display: block;

    width: 100%;
  }
  .react-datepicker {
    width: 100%;
    background: #ffffff;
    border-radius: 12px;
    z-index: 1;
    overflow: hidden;
    // padding: 5px;
  }
  .react-datepicker__header {
    background-color: #fff;

    border: 0;
    .react-datepicker__day-names {
      .react-datepicker__day-name {
        font-weight: 600;
        font-size: 15px;
      }
    }
  }
  .react-datepicker__month {
    .react-datepicker__day {
      color: #444444;
      &:hover {
        background-color: #f3f3f3;
        color: #00c2c2;
      }
    }
    .react-datepicker__day--selected,
    .react-datepicker__day--keyboard-selected {
      background-color: #00c2c2;
      color: #fff;
      &:hover {
        background-color: #f3f3f3;
        color: #00c2c2;
      }
    }
  }
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 6px 12px;
  p {
    font-size: 16px;
    font-weight: 700;
  }
`;

const NavIcons = styled.div`
  display: flex;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f7f7f7;
    width: 22px;
    height: 22px;
    cursor: pointer;
  }
`;
