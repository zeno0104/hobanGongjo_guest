import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Counsel } from "./pages/Counsel";
import { Header } from "./components/Header";
import { SelectMenu } from "./components/SelectMenu";
import { createContext, useEffect, useState } from "react";
import { List } from "./pages/List";
import { Analytics } from "@vercel/analytics/react";
// Context의 타입 정의
type CounselStateContextType = {
  selectMenu: string;
};
// Context 생성
export const CounselStateContext = createContext<
  CounselStateContextType | undefined
>(undefined);

function App() {
  const location = useLocation();

  // 현재 경로를 기반으로 초기 상태 설정
  const getInitialMenu = (path: string) => {
    if (path.startsWith("/counsel")) return "counsel";
    if (path.startsWith("/list")) return "list";
    return "introduce";
  };

  const [selectMenu, setSelectMenu] = useState<string>(
    getInitialMenu(location.pathname)
  );

  useEffect(() => {
    const newMenu = getInitialMenu(location.pathname);
    if (selectMenu !== newMenu) {
      setSelectMenu(newMenu);
    }
    // console.log(`selectedMenu = ${selectMenu}`);
  }, [location.pathname, selectMenu]); // ✅ selectMenu도 의존성에 추가

  return (
    <CounselStateContext.Provider value={{ selectMenu }}>
      <Header />
      <Analytics />
      <SelectMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counsel" element={<Counsel />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </CounselStateContext.Provider>
  );
}

export default App;
