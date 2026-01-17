import React from "react";
import "../Content/Content.scss";

const Cooperation: React.FC = () => {
  return (
    <div className="content__hoptac">
      <div className="content__title">
        <img src="/assets/title_hoptac.png" />
        <div className="content__line">
          <div className="content__line__top"></div>
        </div>
      </div>
      <div className="content__list">
        <img className="content__item" src="/assets/da_nang.png" alt="Đa năng" />
        <img className="content__item" src="/assets/on_dinh.png" alt="Ổn định" />
        <img className="content__item" src="/assets/ho_tro.png" alt="Hỗ trợ" />
        <img className="content__item" src="/assets/sieu_toc.png" alt="Siêu tốc" />
      </div>
    </div>
  );
};

export default Cooperation;
