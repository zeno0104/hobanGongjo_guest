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
        <div className="info_text">
          <div className="call">
            <img className="call_img" src="./call.jpg" />
          </div>
          <div className="call_info_text">
            <a
              href="tel:01051692715"
              className="p_number"
              onClick={handleClick}
            >
              <div className="phone_number_text">010-5169-2715</div>
            </a>
            <div className="call_info">무료방문 견적신청</div>
          </div>
        </div>
      </section>
    </div>
  );
};
