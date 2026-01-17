import React from "react";
import "./Banner.scss";
import Slider from "./Slider";

const Banner: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = React.useState(false);


  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  React.useEffect(() => {
    const checkWidth = () => {
      if (marqueeRef.current) {
        const parent = marqueeRef.current.parentElement;
        setShouldAnimate(marqueeRef.current.scrollWidth > (parent?.clientWidth || 0));
      }
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [isMobile]);

  return (
    <div className="banner-container">
      <div className="banner-content">
        <Slider />
        <div className="banner-title">
          <img src="/assets/speaker.png" alt="Speaker" className="first" />
          <div className="marquee-wrapper">
            <div ref={marqueeRef} className={`marquee-track${shouldAnimate ? " animated" : ""}`}>
              <span className="marquee">
                Link tổng chính thức của chúng tôi là: https://qq88c.online/ ( PC ), 52999.com (
                Mobile ) ✅ Hotline: 0908667888 ✅ Gmail: admin@QQ88.com CÙNG QQ88 - HỢP TÁC PHÁT
                TRIỂN TƯƠNG LAI
              </span>
              <span>{"        "}</span>
              <span className="marquee">
                Link tổng chính thức của chúng tôi là: https://qq88c.online/ ( PC ), 52999.com (
                Mobile ) ✅ Hotline: 0908667888 ✅ Gmail: admin@QQ88.com CÙNG QQ88 - HỢP TÁC PHÁT
                TRIỂN TƯƠNG LAI
              </span>
            </div>
          </div>
          {/* <img src="/assets/mail.png" alt="Email" className="last" /> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
