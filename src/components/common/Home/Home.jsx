import React, { useState } from "react";
import Navbar from "../../navigation/Navbar";
import Sidebar from "../../navigation/Sidebar";
import ProductList from "../../products/ProductList";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar></Navbar>
      <Sidebar toggle={toggle} isOpen={isOpen}></Sidebar>
      <ProductList></ProductList>
    </div>
  );
};

export default Home;
