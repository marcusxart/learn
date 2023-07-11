import styled from "styled-components";

/* styles for main layout component */
export const Layout = styled.div`
  background-color: #e5e5e5;
  min-height: 100vh;
  width: 100%;
`;

export const MainLayout = styled.div`
  background-color: #e5e5e5;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 84px 20px 20px 0;
`;

export const LeftLayout = styled.div`
  background-color: transparent;
  /* width: 100%;
  max-width: 350px; */
`;

export const CenterLayout = styled.div`
  width: 100%;
  /* max-width: 900px; */
  margin: ${({ isOpen }) =>
    isOpen ? "0px 252px 0 336px" : "0px 252px 0 145px"};
  overflow-y: scroll;
  transition: all 0.3s;
  scrollbar-width: thin;
  /* "auto" or "thin" depending on browser support */
  scrollbar-color: transparent transparent;
  /* color values for thumb and track */

  &::-webkit-scrollbar {
    width: 6px;
    /* adjust as needed */
    background-color: transparent;
    /* color value for track */
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    /* color value for thumb */
  }
`;

export const RightLayout = styled.div`
  width: 100%;
  max-width: 232px;
  position: fixed;
  max-height: 609px;
  height: 609px;
  right: 20px;
  > div {
    width: 100%;
  }
`;
