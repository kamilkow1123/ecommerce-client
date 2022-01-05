import React from "react";

const Sidebar = ({ toggle, isOpen }) => {
  return !isOpen ? null : <div>Sidebar</div>;
};

export default Sidebar;
