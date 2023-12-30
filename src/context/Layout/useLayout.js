import { useContext } from "react";
import { LayoutContext } from "./Provider";

const useLayout = () => {
  return useContext(LayoutContext);
};

export default useLayout;
