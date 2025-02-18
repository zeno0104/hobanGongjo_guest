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

  const { selectMenu } = context;
  const nav = useNavigate();

  const introduceTabHandler = () => {
    nav("/");
  };

  const countingTabHandler = () => {
    nav("/counsel");
  };
  const counselListHandler = () => {
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
          className={`tab tab_${selectMenu === "counsel" ? "counting" : ""}`}
          onClick={countingTabHandler}
        >
          상담 신청
        </div>
        <div
          className={`tab tab_${selectMenu === "list" ? "counselList" : ""}`}
          onClick={counselListHandler}
        >
          상담 조회
        </div>
      </div>
    </div>
  );
};
