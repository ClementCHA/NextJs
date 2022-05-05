import React from "react";
import NavBar from "../Navbar/Navbar";

const Container = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};

export default Container;
