import styled from "styled-components";

export const AccouncementsPageContainer = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    margin-top: 11px;
    padding: 0 24px;
  }
  .p-head {
    color: #313333;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 40px;
  }

  .buttons {
    display: flex;
    button {
      box-shadow: 0px 10px 20px 0px rgba(254, 191, 16, 0.25);
    }
  }
`;

export const AnnouncementPageContent = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 20px 54px;
  padding-bottom: 50px;
  background: #fff;
  border-radius: 30px;

  > .header {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    gap: 25px;
    align-items: center;

    input {
      width: 100%;
    }

    .search {
      width: 100%;
    }

    .filter {
      .filter_dropdown {
        width: 152px;
        gap: 10px;
        padding: 30px 0;
        li {
          padding: 0 30px;
        }
      }
    }
  }
`;

export const AnnouncementBulkActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
  padding-bottom: 10px;
  button {
    font-size: 14px;
    padding: 7.7px 15px;
    box-shadow: 0px 7px 15px 0px #febf103f;
  }
`;

export const AnnouncementList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
  width: 100%;
  li {
    display: flex;
    width: 100%;
    gap: 15px;
    > label {
      align-items: flex-start;
      svg {
        path {
          fill: white;
        }
      }
    }
    > .wrap {
      padding: 15px 21px;
      border-radius: 18px;
      border: 0.75px solid #dfe5e5;
      background: #fff;
      cursor: pointer;
      .announcement_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8.4px;
        svg {
          cursor: pointer;
        }
        .title_wrap {
          h2 {
            font-size: 16px;
            line-height: 15px;
            margin-bottom: 5px;
          }
          p {
            color: #adb2b2;
            font-size: 12px;
            font-weight: 600;
          }
        }

        .dropdown_wrap {
          position: relative;
          > div {
            width: 148px;
            cursor: default;
            position: absolute;
            z-index: 10;
            right: -10px;
            padding: 17px 24px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            border-radius: 16px;
            border: 1px solid #c6cccc;
            background: #fff;
            box-shadow: 0px 10px 20px 0px #8b8b8b3f;
            p {
              font-size: 16px;
              cursor: pointer;
              font-weight: 600;
            }
          }
        }
      }
      .description {
        min-height: 77px;
        p {
          color: #4a4d4d;
          font-size: 14px;
        }
      }
      .announcement_footer {
        display: flex;
        justify-content: space-between;
        p {
          color: #adb2b2;
          font-size: 12px;
          font-weight: 600;
        }
      }
    }
  }
`;

export const SuccessModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.1);
  button {
    display: none;
  }
  img {
    width: 127px;
  }
`;
