import { useState, useEffect } from "react";
import { styled } from "styled-components";
import ArrowDown from "../../assets/svg/arrowDown";

const FlagDropdawn = ({ defaultValue, onSelect, options = [], label }) => {
  const [selected, setSelected] = useState(defaultValue);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    onSelect && onSelect(selected);
  }, [selected]);

  return (
    <Contaner>
      {label && <Label>{label}</Label>}
      <Wrapper>
        <Control onClick={() => setDropdown(!dropdown)}>
          {selected && (
            <div>
              {selected.image && !selected.icon ? (
                <img src={selected.image} alt="" />
              ) : null}
              {!selected.image && selected.icon ? <selected.icon /> : null}
              <p>{selected.text}</p>
            </div>
          )}
          <ArrowDown fill="#7C8080" />
        </Control>
        {options?.length > 0 && dropdown && (
          <DropdownList>
            <div>
              {options?.map((option, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSelected(option);
                    setDropdown(false);
                  }}
                >
                  {option.image && !option.icon ? (
                    <img src={option.image} alt="" />
                  ) : null}
                  {!option.image && option.icon ? <option.icon /> : null}
                  <p>{option.text}</p>
                </div>
              ))}
            </div>
          </DropdownList>
        )}
      </Wrapper>
    </Contaner>
  );
};

export default FlagDropdawn;

const Contaner = styled.div`
  width: 100%;
`;

const Label = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 40px;
  margin-bottom: 4px;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Control = styled.div`
  border-radius: 12px;
  border: 1px solid #949999;
  background-color: #fff;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 11px 15px;
  cursor: pointer;

  > svg {
    width: 16px;
    height: 16px;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    p {
      font-size: 16px;
      color: #4a4d4d;
    }
  }
`;

const DropdownList = styled.div`
  position: absolute;
  z-index: 3;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid #adb2b2;
  left: 0;
  height: fit-content;
  right: 0;
  padding: 20px;
  flex: 1;

  > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    overflow: auto;
    height: 130px;
    > div {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      p {
        font-size: 16px;
        color: #4a4d4d;
      }
    }
  }
`;
