import ".//Header.css";

export const Header = () => {
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
          <div className="phone_number_text">010-5169-2715</div>
        </div>
        <div className="location_info">
          <div>서울 · 경기 전문!</div>
          <div>새 제품/이전 설치</div>
        </div>
      </section>
    </div>
  );
};
