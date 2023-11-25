import React, { useState } from "react";
import logo from "../../Images/w.jpg";
import { Company } from "../../Elements/Buttons/TitleBar/Company";
import Dropdown from "../../Elements/Buttons/TitleBar/Dropdown";
import useShowPanels from "../../CustomHooks/useShowPanels";
import MobileNavbarExpansion from "../../Components/Header/Navbar/MobileNavbarExpansion";
const MobileHeader = () => {
  const { cs } = useShowPanels();
  const [state, setState] = useState(false);
  return (
    <div
      className="default fle-dir-row wid-100-p pos-fix pad-20-px jus-con-spc-btw fle-ali-cnt bac-col-whi"
      style={{ height: "180px" }}
    >
      <div className="default wid-100-px ">
        <img src={logo} alt="" />
      </div>
      <div className="default fle-dir-row fle-ali-cnt jus-con-cnt gap-20-px">
        {cs !== "vlw" && (
          <>
            <Company />
            <Dropdown />
          </>
        )}
        <div className="default wid-50-px bor-rad-50-p fle-ali-cnt jus-con-cnt ">
          <span
            className="wid-22-px hei-22-px"
            onClick={() => setState(!state)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </div>
      </div>
      {
        <div
          className="default wid-100-p pos-abs lef-0  "
          style={{ top: "140px" }}
        >
          <MobileNavbarExpansion state={state} />
        </div>
      }
    </div>
  );
};

export default MobileHeader;
