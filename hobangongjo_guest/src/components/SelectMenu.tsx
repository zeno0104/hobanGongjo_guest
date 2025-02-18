import { useContext } from "react";
import "./SelectMenu.css";
import { useNavigate } from "react-router-dom";
import { CounselStateContext } from "../App";

export const SelectMenu = () => {
  const context = useContext(CounselStateContext);

  // context가 undefined일 경우를 처리
  if (!context) {
    throw new Error("SelectMenu must be used within a CounselStateProvider");
  }

  const { selectMenu, setSelectMenu } = context;
  const nav = useNavigate();

  const introduceTabHandler = () => {
    setSelectMenu("introduce");
    nav("/");
  };

  const countingTabHandler = () => {
    setSelectMenu("counting");
    nav("/counsel");
  };
  const counselListHandler = () => {
    setSelectMenu("counselList");
    nav("/list");
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
        <div
          className={`tab tab_${
            selectMenu === "counselList" ? "counselList" : ""
          }`}
          onClick={counselListHandler}
        >
          상담 내역 조회/취소
        </div>
      </div>
    </div>
  );
};
