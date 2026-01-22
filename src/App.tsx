import React, { useEffect, useState } from "react";
import "./App.scss";
import Banner from "./components/Banner/Banner";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import WelcomePopup from "./components/WelcomePopup";

const App: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [visible, setVisible] = useState(true);
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMobileMenu = () => {
    const menu = document.getElementById("mobileMenu");
    if (menu) {
      menu.classList.toggle("active");
    }
  };
  // Hàm xử lý
  const handleCloseTextTeleSp = () => {
    const element = document.getElementById("text_tele_sp_b");
    if (element) {
      element.style.display = "none"; // Ẩn phần tử
    }
  };

  // Gán sự kiện sau khi DOM đã render
  useEffect(() => {
    const closeBtn = document.getElementById("close-text-sp");
    if (closeBtn) {
      closeBtn.addEventListener("click", handleCloseTextTeleSp);
    }

    // Gán click để đóng menu khi click vào các link trong mobile menu
    const menuLinks = document.querySelectorAll<HTMLAnchorElement>(".menu-link");
    const handleMenuLinkClick = () => {
      const menu = document.getElementById("mobileMenu");
      if (menu && menu.classList.contains("active")) {
        menu.classList.remove("active");
      }
    };
    menuLinks.forEach((link) => link.addEventListener("click", handleMenuLinkClick));

    // Cleanup khi unmount
    return () => {
      if (closeBtn) {
        closeBtn.removeEventListener("click", handleCloseTextTeleSp);
      }
      menuLinks.forEach((link) => link.removeEventListener("click", handleMenuLinkClick));
    };
  }, []);
  return (
    <div className="app-layout">
      <WelcomePopup
        isOpen={showWelcomePopup}
        onClose={() => setShowWelcomePopup(false)}
        imageUrl={isMobile ? "/assets/thunhaptudong_mb.jpg" : "/assets/thunhaptudong.jpg"} // Add your popup image here
      />
      <header className="app-header">
        <Header onToggleMenu={toggleMobileMenu} />
      </header>
      <div className="mobile-menu" id="mobileMenu">
        <div className="mobile-menu-header">
          <span className="mobile-menu-title"></span>
          <span className="mobile-menu-close" onClick={toggleMobileMenu}>
            ✕
          </span>
        </div>
        <ul className="mobile-menu-list">
          {/* <li>
            <a
              className="menu-link"
              href="#"
              onClick={() =>
                window.open("https://qq88.email/dailyngoai", "_blank", "noopener,noreferrer")
              }
            >
              ĐĂNG NHẬP
            </a>
          </li>
          <li>
            <a
              className="menu-link"
              href="#"
              onClick={() =>
                window.open("https://qq88.email/dailyngoai", "_blank", "noopener,noreferrer")
              }
            >
              ĐĂNG KÝ
            </a>
          </li> */}
          <li>
            <a className="menu-link" href="https://qq88.io/trangchu" target="_blank">
              TRANG CHỦ
            </a>
          </li>
          <li>
            <a className="menu-link" href="https://qq88.io/trangchu/khuyenmai" target="_blank">
              KHUYẾN MÃI
            </a>
          </li>
          <li>
            <a className="menu-link" href="https://qq88.io/cskh" target="_blank">
              CSKH
            </a>
          </li>
          <li>
            <a className="menu-link" href="https://qq88.io/daily" target="_blank">
              ĐẠI LÝ
            </a>
          </li>
          <li>
            <a className="menu-link" href="https://qq88.io/vat-pham" target="_blank">
              QUÀ TẶNG VẬT PHẨM
            </a>
          </li>
        </ul>
      </div>

      <section className="app-banner">
        <Banner />
      </section>
      <main className="app-content">
        <Content />
      </main>
      <Footer />
      {visible ? (
        <div className="text-tele-sp" id="text_tele_sp_b">
          <div className="bg-border-text">
            <p>
              <span
                className="close-text-tele-sp"
                id="close-text-sp"
                onClick={() => setVisible(false)}
              >
                Đóng
              </span>{" "}
              Tele hỗ trợ đại lý duy nhất của QQ88
              <br /> Liên hệ qua link :{" "}
              <a href="https://t.me/QQ88HOTRODAILY" target="_blank" className="">
                https://t.me/QQ88HOTRODAILY
              </a>{" "}
              <br /> Hãy chú ý các phương thức liên hệ khác đều là giả mạo. <br />
            </p>
          </div>
        </div>
      ) : null}
      <div className="floating-icon">
        <a href="https://t.me/QQ88HOTRODAILY" target="_blank">
          <img src="assets/logo-tele.png" alt="Telegram" />
        </a>
      </div>
    </div>
  );
};

export default App;
