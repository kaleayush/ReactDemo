import React from "react";
import { Header, Footer, SideBar } from "./index";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header fixed at the top */}
      <div className="fixed top-0 w-full z-10">
        <Header />
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar fixed on the left */}
        <div className="w-64 overflow-y-auto fixed left-0 mt-16">
          <SideBar />
        </div>

        {/* Outlet on the right, takes up the remaining space */}
        <div className="flex-1 ml-64 overflow-y-auto mt-16 relative">
          <Outlet />
          <Footer />
        </div>
      </div>

      {/* Footer below the outlet */}
    </div>
    // <div className="flex flex-col ">
    //   {/* Header at the top */}
    //   <div className="fixed ">
    //     <Header />
    //   </div>

    //   <div className="flex flex-1 overflow-hidden">
    //     {/* Sidebar on the left */}
    //     <div className="w-64 overflow-y-auto mt-45 fixed">
    //       <SideBar />
    //     </div>

    //     {/* Outlet on the right, takes up the remaining space */}
    //     <div className="flex-1 overflow-y-auto">
    //       <Outlet />
    //       <Footer />
    //     </div>
    //   </div>

    //   {/* Footer at the bottom */}
    // </div>
  );
}

export default Layout;
