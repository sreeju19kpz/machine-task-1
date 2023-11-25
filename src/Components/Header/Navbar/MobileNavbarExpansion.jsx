import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarItemList } from "../../../Lists/NavbarItemList";
import { Company } from "../../../Elements/Buttons/TitleBar/Company";
import Dropdown from "../../../Elements/Buttons/TitleBar/Dropdown";
import useShowPanels from "../../../CustomHooks/useShowPanels";
import avatar from "../../../Images/Avatar/male-icon.png";
import LogoutBtn from "../../../Elements/Buttons/Header/LogoutBtn";
const MobileNavbarExpansion = ({ state }) => {
  const { cs } = useShowPanels();
  return (
    <AnimatePresence>
      {state && (
        <div className="default wid-100-p z-ind-3 pos-abs jus-con-spc-btw top-0 lef-0 bac-col-whi hei-100-vh-140-px">
          <div className="default ">
            {cs === "vlw" && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                exit={{
                  opacity: 0,
                  y: 50,
                  transition: {
                    ease: "easeInOut",
                    delay: 0,
                  },
                }}
                className="default fle-dir-row gap-20-px jus-con-spc-aro"
              >
                <Company />
                <Dropdown />
              </motion.div>
            )}
            <div className="default wid-100-p fle-ali-cnt jus-con-cnt gap-20-px">
              {NavbarItemList.map((item, index) => {
                return (
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + Number(`.${index}`) }}
                    exit={{
                      opacity: 0,
                      y: 50,
                      transition: {
                        ease: "easeInOut",
                        delay: 0.2 - Number(`.${index}`),
                      },
                    }}
                    className="default max-wid-150-px wid-100-p fle-ali-cnt jus-con-cnt hei-50-px flex-gro-1 flex-shr-1"
                  >
                    <span className="default fon-siz-1-2-rem fon-wei-600">
                      {item.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="default fle-dir-row wid-100-p fle-ali-cnt jus-con-cnt pad-20-px">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              exit={{
                opacity: 0,
                y: 50,
                transition: {
                  ease: "easeInOut",
                  delay: 0,
                },
              }}
              className="default max-wid-300-px wid-100-p fle-dir-row jus-con-spc-aro"
            >
              <div className="default wid-50-px">
                <img src={avatar} alt="" />
              </div>
              <LogoutBtn />
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbarExpansion;
