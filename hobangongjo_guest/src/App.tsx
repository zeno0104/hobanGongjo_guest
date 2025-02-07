import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Counsel } from "./pages/Counsel";
import { Header } from "./components/Header";
import { SelectMenu } from "./components/SelectMenu";
import { createContext, useState } from "react";

// Context의 타입 정의
type CounselStateContextType = {
  selectMenu: string;
  setSelectMenu: (menu: string) => void;
};

// Context 생성 시 타입 정의
export const CounselStateContext = createContext<
  CounselStateContextType | undefined
>(undefined);

function App() {
  const [selectMenu, setSelectMenu] = useState<string>("introduce");

  return (
    <>
      <CounselStateContext.Provider value={{ selectMenu, setSelectMenu }}>
        <Header />
        <SelectMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counsel" element={<Counsel />} />
        </Routes>
      </CounselStateContext.Provider>
    </>
  );
}

export default App;
