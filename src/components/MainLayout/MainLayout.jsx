import React from "react";
import ResponsiveAppBar from "../navbar/NavBar";

const MainLayout = (props) => {
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      {props.children}
    </>
  );
};

export default MainLayout;
