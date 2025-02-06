import React, { useState } from "react";
import "./SelectMenu.css";
import { Introduce } from "./Introduce";
import { Counting } from "./Counting";
export const SelectMenu = () => {
  const [selectMenu, setSelectMenu] = useState("introduce");
  const introduceTabHandler = () => {
    setSelectMenu("introduce");
  };
  const countingTabHandler = () => {
    setSelectMenu("counting");
  };

  return (
    <div className="SelectMenu">
      <div className="tabContainer">
        <div
          className={`tab tab_${selectMenu === "introduce" ? "introduce" : ""}`}
          onClick={introduceTabHandler}
        >
          회사 소개
        </div>
        <div
          className={`tab tab_${selectMenu === "counting" ? "counting" : ""}`}
          onClick={countingTabHandler}
        >
          간편 상담 신청
        </div>
      </div>
      {selectMenu === "introduce" ? <Introduce /> : <Counting />}
    </div>
  );
};
