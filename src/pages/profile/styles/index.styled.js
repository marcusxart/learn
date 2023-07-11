import styled from "styled-components";

export const Container = styled.div`
  max-width: 824px;
  margin-left: auto;
  color: #313333;
  > .header {
    width: 100%;
    justify-content: space-between;
    display: flex;
    margin-bottom: 22px;
    > div {
      display: flex;
      align-items: center;
      width: fit-content;
      cursor: pointer;
      gap: 19px;
      h1 {
        font-size: 20px;
      }
    }
    button {
      background: #febf10;
      width: 250px;
      height: 40px;
      border: none;
      box-shadow: 0px 10px 20px rgba(254, 191, 16, 0.25);
      border-radius: 12px;
    }
  }
`;

export const ProfileSetting = styled.div`
  margin-bottom: 25px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 0 55px;
  > div {
    width: fit-content;
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    p {
      font-weight: 600;
      font-size: 16px;
    }
  }
`;

export const EnterprisesContainer = styled.div`
  background: #ffffff;
  border-radius: 40px;
  padding: 14px 10px;
  margin-bottom: 30px;
  h2 {
    text-align: center;
    font-size: 14px;
    margin-bottom: 16px;
  }

  > .enterprises_wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px 20px;
    height: 215px;
    overflow-x: auto;
    > div {
      background: #fcfefe;
      border-radius: 20px;
      display: flex;
      width: 100%;
      padding: 11px 15px;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      .left_wrap {
        display: flex;
        gap: 10px;
        align-items: center;
        > div {
          p:first-child {
            font-weight: 700;
            font-size: 16px;
          }
          p:last-child {
            font-weight: 700px;
            color: #4a4d4d;
            font-size: 12px;
          }
        }
      }
    }
  }
`;

export const CoursesContainer = styled(EnterprisesContainer)`
  padding: 20px;
  padding-top: 25px;
  > .grid_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;

export const SocialContainer = styled.div``;
