import { useContext, useEffect, useLayoutEffect } from "react";
import { OutletContext } from "l-min-components/src/components";

const Other = () => {
  const data = useContext(OutletContext);
  // console.log(data);

  useLayoutEffect(() => {
    data?.setRightLayout();
  }, []);
  return <h1>welcome ooo</h1>;
};
export default Other;
