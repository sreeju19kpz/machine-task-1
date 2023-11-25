import React from "react";
import useShowPanels from "../../../CustomHooks/useShowPanels";

const NavBtn = ({ item }) => {
  const { cs } = useShowPanels();
  return (
    <div
      className={`default fle-dir-row fle-ali-str cur-poi-hw ${
        cs === "fw" || cs === "vhw" || cs === "hw"
          ? ""
          : "fle-ali-cnt jus-con-cnt"
      }`}
    >
      <div
        className={`default fle-dir-row gap-10-px pad-10-px bor-rad-10-px bac-col-blu-3 ${
          cs === "fw" || cs === "vhw" || cs === "hw"
            ? ""
            : "fle-ali-cnt jus-con-cnt"
        }`}
        style={{ width: "80%" }}
      >
        <div className="default wid-33-px hei-33-px jus-con-cnt fle-ali-cnt">
          <span className="wid-33-px hei-33-px lin-hei-36-px">
            {item?.icon || "noImg"}
          </span>
        </div>
        {(cs === "fw" || cs === "vhw" || cs === "hw") && (
          <div className="default jus-con-cnt fle-ali-cnt ">
            <span className="fon-siz-20-px fon-wei-600 ">
              {item?.name || "unAvailable"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBtn;
