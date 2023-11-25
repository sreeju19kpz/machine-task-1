import React from "react";
import PlanSwitch from "../../Components/Main/PlanSwitch";
import Plans from "./Plans";
import useShowPanels from "../../CustomHooks/useShowPanels";

const Main = () => {
  const { cs } = useShowPanels();
  return (
    <main className="default fle-ali-str fle-gro-1">
      <div className="default wid-100-p ove-flo-hid">
        <div
          className={`default max-wid-1450-px wid-100-p bac-col-whi pad-bot-100-px ${
            cs === "fw" || cs === "vhw"
              ? "pad-lef-100-px pad-rig-100-px"
              : cs === "hw" || cs === "mw" || cs === "aw" || cs === "lw"
              ? "pad-lef-30-px pad-rig-30-px"
              : ""
          } `}
        >
          <div className="default fle-gro-1">
            <div className="default hei-200-px wid-100-p fle-ali-cnt jus-con-cnt">
              <div
                className={`default wid-100-p jus-con-spc-btw fle-ali-cnt ${
                  cs !== "vlw" && cs !== "lw" ? "fle-dir-row" : "gap-30-px"
                } `}
              >
                <div
                  className={`default fle-gro-1 `}
                  style={{ width: cs === "vlw" && "60%" }}
                >
                  <span
                    className={`${
                      cs === "vlw" || cs === "lw"
                        ? "fon-siz-20-px  tex-ali-cnt"
                        : "fon-siz-36-px"
                    } fon-wei-700`}
                  >
                    Choose a plan that's just right for you
                  </span>
                </div>
                <div
                  className={`default ${
                    cs !== "vlw" && cs !== "lw"
                      ? "jus-con-fle-end hei-100-p"
                      : "jus-con-cnt"
                  } `}
                >
                  <PlanSwitch />
                </div>
              </div>
            </div>
            <div className="default wid-100-p bac-col-whi fle-ali-cnt">
              <div className="default wid-100-p">
                <Plans />
              </div>
            </div>
          </div>
        </div>
        <div className="default wid-100-px fle-gro-1 ">
          <div className="default "></div>
        </div>
      </div>
    </main>
  );
};

export default Main;
