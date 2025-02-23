import { ChangeEvent, useContext, useRef, useState } from "react";
import "./Counting.css";
import { Starlisk } from "./Starlisk";
import { Button } from "./Button";
import { supabase } from "../../utils/SupabaseClient";
import { useNavigate } from "react-router-dom";
import { CounselStateContext } from "../App";

type CountingData = {
  name: string;
  phone_number: string;
  install_type: string;
  region: string;
  installLocation: string;
  type: string[];
  content: string;
  status: string;
};

const airType = [
  { id: 1, value: "stand", name: "스탠드" },
  { id: 2, value: "buck", name: "벽걸이" },
];

export const Counting = () => {
  const [guestInfo, setGuestInfo] = useState<CountingData>({
    name: "",
    phone_number: "",
    install_type: "",
    region: "",
    installLocation: "",
    type: [],
    content: "",
    status: "",
  });
  const context = useContext(CounselStateContext);
  if (!context) {
    throw new Error("CounselStateContext가 정의되지 않았습니다."); // ✅ 예외 처리 추가
  }

  const nav = useNavigate();

  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setGuestInfo({ ...guestInfo, name: e.target.value });
  };

  const phoneNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setGuestInfo({ ...guestInfo, phone_number: e.target.value });
  };

  const installLocationHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setGuestInfo({ ...guestInfo, installLocation: e.target.value });
  };
  const regionHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setGuestInfo({ ...guestInfo, region: e.target.value });
  };
  const installTypeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setGuestInfo({ ...guestInfo, install_type: e.target.value });
  };
  const selectHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const labels = e.target.labels;

    // labels가 null이 아닐 때만 접근
    const selectedName =
      labels && labels.length > 0 ? labels[0].textContent : null;

    if (!selectedName) return; // selectedName이 null인 경우 함수 종료

    const updatedType = isChecked
      ? [...guestInfo.type, selectedName]
      : guestInfo.type.filter((item) => item !== selectedName);

    setGuestInfo({ ...guestInfo, type: updatedType });
  };

  const contentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setGuestInfo({ ...guestInfo, content: e.target.value });
  };
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneNumRef = useRef<HTMLInputElement>(null);
  const regionRef = useRef<HTMLSelectElement>(null);
  const installTypeRef = useRef<HTMLSelectElement>(null);
  const installLocRef = useRef<HTMLSelectElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);
  const onSubmit = async () => {
    if (!guestInfo.name) {
      nameRef.current?.focus();
      return;
    } else if (!guestInfo.phone_number) {
      phoneNumRef.current?.focus();
      return;
    } else if (!guestInfo.region) {
      regionRef.current?.focus();
      return;
    } else if (!guestInfo.installLocation) {
      installLocRef.current?.focus();
      return;
    } else if (guestInfo.type.length === 0) {
      window.alert("설치하실 기기의 종류를 선택해 주세요.");
      return;
    }

    if (window.confirm("상담 신청을 하시겠습니까?")) {
      const { data, error } = await supabase
        .from("guest")
        .insert([
          {
            name: guestInfo.name,
            region: guestInfo.region,
            install_type: guestInfo.install_type,
            phone_number: guestInfo.phone_number,
            install_location: guestInfo.installLocation,
            type: guestInfo.type,
            content: guestInfo.content,
            status: "counselIncompleted",
          },
        ])
        .select();
      if (error) {
        window.alert(error);
      } else {
        window.alert("상담 신청이 완료되었습니다.");
        const existingData = JSON.parse(
          localStorage.getItem("counselList") || "[]"
        );

        // ✅ 새로운 상담 내역 추가
        const newData = [...existingData, data[0]];

        // ✅ localStorage에 저장
        localStorage.setItem("counselList", JSON.stringify(newData));
        nav("/", { replace: true });
      }
    }
  };
  return (
    <div className="Counting">
      <section className="info">
        <div>냉/난방기에 대한 모든 문의를 환영합니다!</div>
        <div>번거로우신 고객은 010-5169-2715 전화주시면</div>
        <div>빠른 상담이 가능합니다.</div>
      </section>
      <section className="phone_number">
        <div>
          이름 or 상호 <Starlisk />
        </div>
        <div className="number_input">
          <input
            onChange={nameHandler}
            type="text"
            className="name_input"
            ref={nameRef}
          />
        </div>
      </section>
      <section className="phone_number">
        <div>
          연락처 <Starlisk />
        </div>
        <div className="number_input">
          <input
            onChange={phoneNumberHandler}
            placeholder="ex) 010-1234-5678"
            type="text"
            ref={phoneNumRef}
          />
        </div>
      </section>
      <section className="install_info">
        <div>
          중고 or 새제품 설치 <Starlisk />
        </div>
        <select
          className="select"
          onChange={installTypeHandler}
          ref={installTypeRef}
        >
          <option value="장소 선택" defaultValue={""}></option>
          <option value="이전설치">이전설치</option>
          <option value="새제품">새제품</option>
        </select>
      </section>
      <section className="install_info">
        <div>
          지역을 선택해주세요. <Starlisk />
        </div>
        <select className="select" onChange={regionHandler} ref={regionRef}>
          <option value="장소 선택" defaultValue={""}></option>
          <option value="강북">강북</option>
          <option value="도봉">도봉</option>
          <option value="노원">노원</option>
          <option value="의정부">의정부</option>
          <option value="남양주">남양주</option>
        </select>
      </section>
      <section className="install_info">
        <div>
          설치하실 장소를 선택해주세요. <Starlisk />
        </div>
        <select
          className="select"
          onChange={installLocationHandler}
          ref={installLocRef}
        >
          <option value="장소 선택" defaultValue={""}></option>
          <option value="가정집">가정집</option>
          <option value="사무실 / 관공서">사무실 / 관공서</option>
          <option value="상가 / 상업시설 / 의료시설">
            상가 / 상업시설 / 의료시설
          </option>
          <option value="공장 / 창고 / 물류센터">공장 / 창고 / 물류센터</option>
        </select>
      </section>
      <section className="type" ref={typeRef}>
        <div>
          설치하실 기기의 종류를 선택해 주세요.[중복선택가능]
          <Starlisk />
        </div>
        <div className="checkBox">
          {airType.map((item) => (
            <div className="checkbox" key={item.id}>
              <div>
                <input
                  type="checkbox"
                  id={item.value}
                  className="checkBoxInput"
                  onChange={selectHandler}
                />
              </div>
              <div>
                <label htmlFor={item.value}>{item.name}</label>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="counting_content">
        <div>문의 내용</div>
        <div className="number_input">
          <textarea
            className="counting_content_text"
            onChange={contentHandler}
          />
        </div>
      </section>
      <section className="btn">
        <Button text={"예약하기"} type={"POSITIVE"} onClick={onSubmit} />
      </section>
    </div>
  );
};
