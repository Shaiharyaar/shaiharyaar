import { PageNavbar } from "global/components";
import { Outlet } from "react-router-dom";
import PageFooter from "./Footer";

const PageLayout = () => {
  return (
    <div className="page-layout-wrapper">
      <PageNavbar />
      <main className="page-inner">
        <Outlet />
      </main>
      <PageFooter />
    </div>
  );
};

export default PageLayout;
