import React from "react";
import Avatar from "../../../Images/Avatar/male-icon.png";
import useShowPanels from "../../../CustomHooks/useShowPanels";
const UserPrev = ({ item }) => {
  const { cs } = useShowPanels();
  return (
    <div className="default wid-100-p fle-ali-cnt gap-20-px box-sha-1 hei-250-px jus-con-cnt">
      <div
        className={`default ${
          cs === "vlw" || cs === "lw" || cs === "aw" ? "wid-50-px" : "wid-75-px"
        } asp-rat-1-1 col2 bor-rad-50-p`}
      >
        <img src={item?.img || Avatar} alt="avatar" className=" bor-rad-50-p" />
      </div>
      {!(cs === "vlw" || cs === "lw" || cs === "aw") && (
        <div className="default">
          <div className="default fle-dir-row gap-5-px fle-ali-cnt jus-con-cnt">
            <div className="default fon-wei-700 ">{item?.name || "user"}</div>
            <div className="default pos-abs" style={{ right: "20px" }}>
              {">"}
            </div>
          </div>
          {(cs === "fw" || cs === "hw" || cs === "vhw") && (
            <div className="default fon-wei-600">
              {item?.mail || "username123@gmail.com"}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserPrev;
