import React from "react";

const PurchaseBtn = ({ text, col }) => {
  return (
    <div
      className={`default hei-33-px wid-150-px fle-dir-row jus-con-spc-btw pad-lef-10-px cur-poi-hw pad-rig-10-px bor-rad-5-px tra-sca-1-2 anim-tra-tra-sca-1 ${
        col && col
      }`}
    >
      <div className="default jus-con-cnt">
        <span className="fon-col-whi">{text}</span>
      </div>
      <div className="default wid-33-px jus-con-cnt">
        <span className="hei-22-px wid-22-px">
          <svg
            style={{ padding: "2px" }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default PurchaseBtn;
