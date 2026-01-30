import React from "react";
import "./Header.scss";

type HeaderProps = {
  onToggleMenu?: () => void;
};

const Header: React.FC<HeaderProps> = ({ onToggleMenu }) => {
  return (
    <div className="header-container">
      <div className="header-menu" onClick={onToggleMenu}>
        <img src="/assets/menu.svg" alt="Menu" />
      </div>
      <div className="header-logo">
        <a href="#">
          <img src="/assets/logo.svg" alt="QQ88" />
        </a>
      </div>
      <div className="header-logo-mobile" >
        <a href="#">
          <img src="/assets/logo-mb.svg" alt="QQ88" style={{paddingRight: '18px'}} />
        </a>


      </div>
      <div className="header-actions-link">
        <a href="https://t.me/KENHDAILYQQ88">
          <div className="header-actions-item">
            <img src="/assets/csdl.svg" alt="CSDL" />
            <span>Chăm sóc đại lý</span>
          </div>
        </a>
        <a href="https://t.me/addlist/JTL2P_bKxRszZjA1">
          <div className="header-actions-item">
            <img src="/assets/chanel-news.svg" alt="News" />
            <span>Kênh tin tức</span>
          </div>
        </a>
      </div>
      <div className="header-actions">
        <button
          className="btn login"
          onClick={() =>
            window.open("https://qq88.email/dailyngoai", "_blank", "noopener,noreferrer")
          }
        >
          ĐĂNG NHẬP
        </button>
        <button
          className="btn register"
          onClick={() =>
            window.open("https://qq88.email/dailyngoai", "_blank", "noopener,noreferrer")
          }
        >
          ĐĂNG KÝ
        </button>
      </div>
    </div>
  );
};

export default Header;
