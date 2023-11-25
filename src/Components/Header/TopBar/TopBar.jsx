import React from "react";
import Logo from "../../../Elements/Logo/Logo";
import { Company } from "../../../Elements/Buttons/TitleBar/Company";
import Dropdown from "../../../Elements/Buttons/TitleBar/Dropdown";

export const TopBar = () => {
  return (
    <div
      className="default wid-100-p fle-ali-end jus-con-cnt max-wid-1620-px "
      style={{ height: "180px", overflow: "hidden" }}
    >
      <Logo />
      <div className="default fle-dir-row pad-20-px gap-20-px">
        <Company />
        <Dropdown />
      </div>
    </div>
  );
};
