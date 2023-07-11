import Calendar2 from "../../assets/svg/calendar2";
import { styled } from "styled-components";
import moment from "moment";

const DateInput = ({ inputValue, inputRef, onClick, placeholder }) => {
  return (
    <Container ref={inputRef} onClick={onClick}>
      <div>
        {inputValue ? (
          <span>{moment(inputValue).format("DD/MM/YYYY")}</span>
        ) : (
          <span>{placeholder}</span>
        )}
        <Calendar2 />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  > div {
    width: 100%;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 20px;
    border: 1px solid #949999;
    span {
      color: #adb2b2;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
export default DateInput;
