import React from "react";
import { LogoutIcon } from "../../Icons/IconList";
import useShowPanels from "../../../CustomHooks/useShowPanels";

const LogoutBtn = () => {
  const { cs } = useShowPanels();
  return (
    <div className="default fle-dir-row fle-ali-cnt jus-con-cnt gap-10-px cur-poi-hw pad-10-px tra-sca-1-2 anim-tra-tra-sca-1 ">
      {(cs === "fw" || cs === "vhw" || cs === "hw" || cs === "mw") && (
        <div className="default">
          <span className="fon-wei-700 fon-col-blu">Logout</span>
        </div>
      )}
      <div className="default wid-33-px hei-33-px fle-ali-cnt jus-con-cnt">
        <span className="hei-22-px wid-22-px ">{LogoutIcon}</span>
      </div>
    </div>
  );
};

export default LogoutBtn;
