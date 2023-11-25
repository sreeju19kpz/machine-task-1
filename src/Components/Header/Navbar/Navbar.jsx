import React from "react";
import { NavbarItemList } from "../../../Lists/NavbarItemList";
import NavBtn from "../../../Elements/Buttons/Header/NavBtn";
const Navbar = () => {
  return (
    <div className="default wid-100-p gap-20-px">
      {NavbarItemList.map((item) => {
        return <NavBtn item={item} />;
      })}
    </div>
  );
};

export default Navbar;
