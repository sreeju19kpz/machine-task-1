import React from "react";
import img from "../../../Images/w.jpg";

export const Company = () => {
  return (
    <div className="default  hei-50-px box-sha-1 fle-dir-row fle-ali-cnt bac-col-whi pad-lef-20-px pad-rig-20-px bor-rad-5-px gap-10-px cur-poi-hw tra-sca-1-2 anim-tra-tra-sca-1">
      <div className="default wid-33-px bor-rad-50-p">
        <img src={img} alt="" className="" />
      </div>
      <div className="default">
        <span className="fon-wei-700 fon-siz-14-px">XYZ Enterprises PvtLtd.</span>
      </div>
    </div>
  );
};
