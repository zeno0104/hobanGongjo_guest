import "./Introduce.css";

export const Introduce = () => {
  return (
    <div className="Introduce">
      <div className="title">당신의 쾌적한 공간을 위한 선택!</div>
      <div className="intro_main">
        <div className="intro_container">
          <div>
            <img className="aircon_img" src="./aircon1.jpeg" alt="" />
          </div>
          <div className="info_text">
            호반공조는 냉난방기, 벽걸이, 스탠드형 에어컨 설치 전문 업체입니다.
          </div>
        </div>
        <div className="intro_container">
          <div>
            <img className="aircon_img" src="./aircon2.jpeg" alt="" />
          </div>
          <div className="info_text">
            고객님의 다양한 요구에 맞춘 최적의 솔루션을 제공하여, 무더위와
            추위를 모두 이겨낼 수 있도록 도와드립니다.
          </div>
        </div>
        <div className="intro_container">
          <div>
            <img className="aircon_img" src="./aircon3.jpeg" alt="" />
          </div>
          <div className="info_text">
            모든 브랜드의 에어컨을 가정, 사무실 상가 어디든!
          </div>
        </div>
        <div className="end_text">지금 바로 문의 주세요!</div>
        {/* <div className="btn">
          <Button text={"예약하기"} type={"COUNSEL"} onClick={btnHandler} />
        </div> */}
      </div>
    </div>
  );
};
