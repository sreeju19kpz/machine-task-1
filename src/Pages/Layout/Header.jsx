import React from "react";
import UserPrev from "../../Components/Header/UserPrev/UserPrev";
import Navbar from "../../Components/Header/Navbar/Navbar";
import LogoutBtn from "../../Elements/Buttons/Header/LogoutBtn";
import logo from "../../Images/w.jpg";
import useShowPanels from "../../CustomHooks/useShowPanels";
const Header = () => {
  const { cs } = useShowPanels();
  return (
    <>
      {cs !== "vlw" && cs !== "lw" && cs !== "aw" && (
        <div
          className={`default ${
            cs === "fw" || cs === "vhw" || cs === "hw"
              ? "wid-250-px"
              : cs === "mw"
              ? "wid-100-px"
              : "wid-100-px"
          }`}
        >
          <div
            className="default pos-fix hei-100-p top0 bac-col-whi "
            style={{ overflowY: "auto" }}
          >
            <div className="default hei-100-p jus-con-spc-btw">
              <div className="default">
                <div
                  className={`default ${
                    cs === "fw" || cs === "vhw" || cs === "hw"
                      ? "wid-250-px"
                      : cs === "mw"
                      ? "wid-100-px"
                      : "wid-100-px"
                  }`}
                >
                  <div
                    className="default fle-ali-cnt  pad-20-px"
                    style={{ height: "180px" }}
                  >
                    <img
                      src={logo}
                      alt=""
                      className={`${
                        cs === "vlw" || cs === "lw" ? "wid-50-px" : "wid-75-px"
                      } asp-rat-1-1 obj-fit-cov`}
                    />
                  </div>
                </div>
                <div className="default pad-bot-20-px gap-20-px ">
                  <UserPrev />
                  <Navbar />
                </div>
              </div>
              <div
                className="default pad-top-20-px "
                style={{ overflow: "hidden" }}
              >
                <LogoutBtn />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
