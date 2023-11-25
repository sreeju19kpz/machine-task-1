import React from "react";
import PurchaseBtn from "../../Elements/Buttons/Plans/PurchaseBtn";
import { AccIcon, CloudIcon, MailIcon } from "../../Elements/Icons/IconList";
import useShowPanels from "../../CustomHooks/useShowPanels";
const SpecialPlans = ({ item }) => {
  const { cs } = useShowPanels();
  return (
    <div
      className={`default  jus-con-spc-aro fle-shr-1 gap-10-px wid-100-p bac-col-whi pad-bot-20-px pad-lef-20-px pad-rig-20-px box-sha-1 bor-rad-10-px ${
        cs !== "lw" && cs !== "vlw"
          ? "fle-dir-row max-wid-600-px "
          : "max-wid-400-px "
      } pad-top-20-px`}
      style={{ width: cs === "vlw" && "250px" }}
    >
      <div className="default gap-5-px">
        {item.title && (
          <div className="default">
            <span className="default fon-siz-36-px fon-wei-600 fon-siz-tra">
              {item.title}
            </span>
          </div>
        )}
        {item.description && (
          <div className="default max-wid-250-px fle-shr-1 wid-100-p">
            <span className="fon-siz-15-px fon-siz-tra">{`${item.description}`}</span>
          </div>
        )}
        <PurchaseBtn text={item.btnText} col={item.color} />
      </div>
      <div className="default gap-5-px">
        <div className="default fle-dir-row">
          <span className="fon-siz-12-px fon-wei-600 fon-siz-tra">
            what will you get :
          </span>
        </div>
        <div className="default gap-5-px">
          {item.totalUsers && (
            <div className="default fle-dir-row gap-10-px">
              <div className="default wid-22-px hei-22-px">
                <span className="default wid-22-px hei-22-px">{AccIcon}</span>
              </div>
              <span className="fon-siz-tra">{`${item.totalUsers} users`}</span>
            </div>
          )}
          {item.totalStorage && (
            <div className="default fle-dir-row gap-10-px">
              <div className="default wid-22-px hei-22-px ">
                <span className="default wid-22-px hei-22-px">{CloudIcon}</span>
              </div>
              <span className="fon-siz-tra">{`${item.totalStorage}gb storage`}</span>
            </div>
          )}
          {item.support && (
            <div className="default fle-dir-row gap-10-px">
              <div className="default wid-22-px hei-22-px">
                <span>{MailIcon}</span>
              </div>
              <span className="fon-siz-tra">{`${item.support} support`}</span>
            </div>
          )}
          {item.features && (
            <div className="default fle-dir-row gap-10-px ">
              <div className="default wid-22-px hei-22-px">
                <span>{MailIcon}</span>
              </div>
              <div className="default max-wid-250-px fle-shr-1 wid-100-p">
                <span className="fon-siz-tra ">{`${item.features}`}</span>
              </div>
            </div>
          )}
        </div>
        <div
          className="default fon-wei-700 cur-poi-hw"
          style={{ paddingLeft: "35px" }}
        >
          Explore Fetures
        </div>
      </div>
    </div>
  );
};
<span></span>;
export default SpecialPlans;
