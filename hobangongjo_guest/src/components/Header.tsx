import ".//Header.css";

export const Header = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // 기본 동작 방지
    window.location.href = "tel:01051692715"; // 전화 걸기
  };
  return (
    <div className="Header">
      <section className="logo">
        <img className="logo_img" src="/hoban_logo.jpg" />
        <div>호반공조</div>
      </section>
      <section className="info">
        <img src="./call.jpg" />
        <div className="info_text">
          <div className="call_info">누르면 바로 통화 가능↓</div>
          <a href="tel:01051692715" onClick={handleClick}>
            <div className="phone_number_text">010-5169-2715</div>
          </a>
        </div>
        <div className="location_info">
          <div>강북·도봉·노원·의정부·남양주 전문!</div>
          <div>새 제품/이전 설치</div>
        </div>
      </section>
    </div>
  );
};
