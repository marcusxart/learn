import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import {
  Layout,
  CenterLayout,
  LeftLayout,
  RightLayout,
  MainLayout,
} from "./index.styled";
// import {
//   Header as HeaderComponent,
//   Banner,
//   SideNav as SideBar,
//   SideMenu,
// } from "../";
import {
  Header as HeaderComponent,
  Banner,
  SideNav as SideBar,
  SideMenu,
} from "l-min-components/src/components";
import { leftNavMenu, user, sideMenuOptions } from "../../hooks/leftNavMenu";
// import SideMenu from "../sideBar/sideMenu";

const AppMainLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  // const location = useLocation();
  const [rightLayout, setRightLayout] = useState(true);
  const [rightComponent, setRightComponent] = useState();
  const [generalData, setGeneralData] = useState({});
  console.log("====================================");
  console.log(generalData);
  console.log("====================================");
  return (
    <OutletContext.Provider
      value={{ setRightComponent, setRightLayout, generalData, setGeneralData }}
    >
      <Layout>
        <HeaderComponent />
        <MainLayout>
          <LeftLayout>
            <SideBar routes={leftNavMenu} />
            <SideMenu
              user={user}
              routes={sideMenuOptions}
              userType={"developer"}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </LeftLayout>
          <CenterLayout isOpen={isOpen}>
            <Outlet />
          </CenterLayout>

          {rightLayout && (
            <RightLayout>{rightComponent ?? <Banner />}</RightLayout>
          )}
        </MainLayout>
      </Layout>
    </OutletContext.Provider>
  );
};

export const OutletContext = createContext({});
export default AppMainLayout;
