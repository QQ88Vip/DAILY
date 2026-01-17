import React from "react";
import "./UsdtGuide.scss";

const videoCards = [
  {
    title: "Tạo tài khoản Binance",
    url: "https://media.rtdnjdferfvn.com/public/qq88/site-usdt/2.mp4",
  },
  {
    title: "Đăng ký tài khoản USDT",
    url: "https://media.rtdnjdferfvn.com/public/qq88/site-usdt/3.mp4",
  },
  {
    title: "Hướng dẫn mua USDT",
    url: "https://media.rtdnjdferfvn.com/public/qq88/site-usdt/5.mp4",
  },
  {
    title: "Liên kết ví USDT",
    url: "https://media.rtdnjdferfvn.com/public/qq88/site-usdt/1.mp4",
  },
  {
    title: "Rút tiền về ngân hàng",
    url: "https://media.rtdnjdferfvn.com/public/qq88/site-usdt/7.mp4",
  },
  {
    title: "Nạp tiền",
    url: "https://media.rtdnjdferfvn.com/public/qq88/site-usdt/4.mp4",
  },
  {
    title: "Rút tiền",
    url: "https://media.rtdnjdferfvn.com/public/qq88/site-usdt/6.mp4",
  },
];

const UsdtGuide: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  return (
    <section className="usdt-guide">
      <div className="content__title">
        <img src="/assets/title_usdt.png" />
        <div className="content__line">
          <div className="content__line__top"></div>
        </div>
      </div>
      <div className="usdt-guide-container">
        {/* CSS for layout: video left, list right, vertical scroll */}
        <div className="usdt-guide-video">
          <video
            muted
            controls
            autoPlay={false}
            className="video-player"
            src={videoCards[currentVideoIndex].url}
          />
        </div>
        <div className="usdt-guide-list">
          {videoCards.map((step, index) => (
            <div
              key={index}
              className="usdt-video-item"
              onClick={() => setCurrentVideoIndex(index)}
            >
              <div className="video_placeholder">
                <img src="/assets/video_placeholder.png" alt="usdt" className="placeholder_img" />
                <img
                  src={
                    index === currentVideoIndex
                      ? "/assets/usdt_playing.png"
                      : "/assets/usdt_play.png"
                  }
                  alt="usdt"
                  className="placeholder_state"
                />
              </div>
              <span className="">{step.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsdtGuide;
