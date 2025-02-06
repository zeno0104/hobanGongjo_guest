// import React, { useState } from "react";
import "./Counting.css";
import { Starlisk } from "./Starlisk";
import { Button } from "./Button";
// type CountingData = {
//   name: string;
//   phone_number: string;
//   location: string;
//   type: string;
//   content: string;
// };
export const Counting = () => {
  // const [countingData, setCountingData] = useState<CountingData>({
  //   name: "",
  //   phone_number: "",
  //   location: "",
  //   type: "",
  //   content: "",
  // });
  return (
    <div className="Counting">
      <section className="info">
        <div>냉/난방기에 대한 모든 문의를 환영합니다!</div>
        <div>번거로우신 고객은 010-5169-2715 전화주시면</div>
        <div>빠른 상담이 가능합니다.</div>
      </section>
      <section className="name">
        <div>
          이름 or 상호 <Starlisk />
        </div>
        <input type="text" className="name_input" />
      </section>
      <section className="phone_number">
        <div>
          연락처 <Starlisk />
        </div>
        <div className="number_input">
          <input type="text" />
          <span> - </span>
          <input type="text" /> <span> - </span>
          <input type="text" />
        </div>
      </section>
      <section className="install_info">
        <div>
          설치하실 장소를 선택해주세요. <Starlisk />
        </div>
        <select className="select">
          <option></option>
          <option value="가정집">가정집</option>
          <option value="사무실 / 관공서">사무실 / 관공서</option>
          <option value="상가 / 상업시설 / 의료시설">
            상가 / 상업시설 / 의료시설
          </option>
          <option value="공장 / 창고 / 물류센터">공장 / 창고 / 물류센터</option>
        </select>
      </section>
      <section className="type">
        <div>
          {" "}
          설치하실 기기의 종류를 선택해 주세요.[중복선택가능]
          <Starlisk />
        </div>
        <div className="checkBox">
          <div>
            <input type="checkbox" name="chunjang" />
            <label htmlFor="chunjang">천장형</label>
          </div>
          <div>
            <input type="checkbox" name="stand" />
            <label htmlFor="stand">스탠드</label>
          </div>
          <div>
            <input type="checkbox" name="buck" />
            <label htmlFor="buck">벽걸이</label>
          </div>
        </div>
      </section>
      <section className="counting_content">
        <div>
          문의 내용 <Starlisk />
        </div>
        <textarea className="counting_content_text"></textarea>
      </section>
      <section className="btn">
        <Button text={"예약하기"} type={"POSITIVE"} />
      </section>
    </div>
  );
};
