import { useContext, useEffect, useState } from "react";
import "./List.css";
import { supabase } from "../../utils/SupabaseClient";
import { useNavigate } from "react-router-dom";
import { CounselStateContext } from "../App";

interface Data {
  id: number;
  name: string;
  install_location: string;
  install_type: string;
  region: string;
}

export const List = () => {
  const [list, setList] = useState<Data[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    const listValue = localStorage.getItem("counselList");
    const parsedList: Data[] = listValue ? JSON.parse(listValue) : [];
    setList(parsedList);
  }, []);

  const context = useContext(CounselStateContext);
  if (!context) {
    throw new Error("CounselStateContext가 정의되지 않았습니다."); // ✅ 예외 처리 추가
  }

  const cancelHandler = async (id: number) => {
    if (window.confirm("상담을 취소하시겠습니까?")) {
      const { error } = await supabase.from("guest").delete().eq("id", id);
      if (error) {
        console.error(error);
        return;
      }

      window.alert("상담을 취소하였습니다.");

      const listValue = localStorage.getItem("counselList");
      if (listValue) {
        const parsedList: Data[] = JSON.parse(listValue);
        const filteredData = parsedList.filter((item) => item.id !== id);
        localStorage.setItem("counselList", JSON.stringify(filteredData));

        setList(filteredData);
      }

      nav("/", { replace: true });
    }
  };

  return (
    <div className="List">
      {list.length === 0 ? (
        <div>상담 신청 내역이 없습니다.</div>
      ) : (
        <div>
          {list.map((item, index) => (
            <div key={item.id} id={`${item.id}`} className="listContent">
              <div>{index + 1}</div>
              <div>{item.name}</div>
              <div>{item.install_type}</div>
              {/* <div className="cancelBtn" onClick={() => cancelHandler(item.id)}>
                취소
              </div> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
