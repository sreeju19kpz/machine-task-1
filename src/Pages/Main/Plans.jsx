import React from "react";
import FixedPlans from "../../Components/Main/FixedPlans";
import { FixedPlansList, specialPlansList } from "../../Lists/PlansList";
import SpecialPlans from "../../Components/Main/SpecialPlans";
import useShowPanels from "../../CustomHooks/useShowPanels";

const Plans = () => {
  const { cs } = useShowPanels();
  return (
    <div className="default gap-30-px">
      <div
        className={`default dis-gri jus-ite-cnt ${
          cs === "vlw" || cs === "lw"
            ? "gri-aut-row pla-ite-cnt "
            : "gri-tem-aut-col gri-aut-col  jus-con-spc-btw "
        }gap-20-px `}
      >
        {FixedPlansList.map((item) => {
          return <FixedPlans item={item} />;
        })}
      </div>
      <div
        className={`default  ${
          cs === "fw"
            ? "jus-con-spc-eve fle-dir-row"
            : "jus-con-spc-aro fle-ali-cnt"
        } gap-20-px `}
      >
        {specialPlansList.map((item) => {
          return <SpecialPlans item={item} />;
        })}
      </div>
    </div>
  );
};

export default Plans;
