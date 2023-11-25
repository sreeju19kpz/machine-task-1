import React from "react";

const PlanSwitch = () => {
  return (
    <div
      className="default fle-ali-end hei-40-px fle-dir-row  bor-rad-9999-px bor-rad-1-px  "
      style={{ padding: "3px" }}
    >
      <div className="default fle-dir-row jus-con-spc-aro wid-100-p gap-5-px">
        <div className="default wid-150-px hei-33-px fle-ali-cnt jus-con-cnt bor-rad-9999-px bor-rad-1-px bac-col-blu cur-poi-hw">
          <span className="fon-wei-600 fon-col-whi ">Monthly</span>
        </div>
        <div className="default wid-150-px fle-dir-row hei-33-px fle-ali-cnt jus-con-cnt bor-rad-9999-px bor-rad-1-px bac-col-green cur-poi-hw">
          <span className="fon-wei-600 fon-col-whi ">Anually</span>
          <span
            className="fon-siz-12-px pos-abs"
            style={{ right: "10px", top: "0" }}
          >
            -10%
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlanSwitch;
