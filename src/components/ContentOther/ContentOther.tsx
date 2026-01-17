import React from "react";
import "../Content/Content.scss";

const ContentOther: React.FC = () => {
  const steps = [
    {
      icon: "/assets/register.png", // bạn cần thay bằng đường dẫn ảnh tương ứng
      title: "BƯỚC 1: ĐĂNG KÝ TÀI KHOẢN",
      desc: "Click vào mục 'Đăng Ký' và điền chính xác những thông tin bắt buộc. Sau đó bạn cần liên hệ đến Telegram: @QQ88DAILY để được hỗ trợ hoàn thành thủ tục đăng ký.",
    },
    {
      icon: "/assets/contact.png",
      title: "BƯỚC 2: LIÊN HỆ CHUYÊN VIÊN KIỂM DUYỆT",
      desc: "Đơn đăng ký hợp tác sau khi tạo thành công cần liên hệ đến QQ88 để được xét duyệt, sau khi đạt thỏa thuận về chính sách hợp tác chuyên viên hỗ trợ sẽ kích hoạt tài khoản đại lý và link liên kết cho bạn.",
    },
    {
      icon: "/assets/money.png",
      title: "BƯỚC 3: NHẬN HOA HỒNG HÀNG THÁNG",
      desc: "Dữ liệu tính toán sẽ được thống kê từ 00:00 giờ ngày đầu tiên của tháng đến 23:59:59 (GMT+8) ngày cuối cùng của tháng. Thời gian thanh toán trước ngày 10 tháng kế tiếp kèm theo báo cáo đại lý.",
    },
  ];

  return (
    <div>
      <div className="content__docquyen">
        <div className="content__title">
          <img src="/assets/title_docquyen.png" />
          <div className="content__line">
            <div className="content__line__top"></div>
          </div>
        </div>
        <div className="video-container">
          <div className="video-left">
            <img src="/assets/john_terry.png" alt="" />
          </div>
          <div className="video-right">
            <video
              muted
              playsInline
              loop
              controls
              className="video-player"
              src="https://media.rtdnjdferfvn.com/public/qq88/site-daily/TVC.mp4?autoplay=0&modestbranding=1&hl=en&cc_load_policy=0&iv_load_policy=3&rel=0"
              autoPlay
            />
          </div>
        </div>
      </div>
      <div className="content__sanpham">
        <div className="content__title">
          <img src="/assets/title_dadang.png" />
          <div className="content__line">
            <div className="content__line__top"></div>
          </div>
        </div>
        <div className="content__list__sanpham">
          <a href="https://www.qq8827.com/sports">
            <img className="item__sp" src="/assets/sp_thethao.png" alt="Thể thao" />
          </a>
          <a href="https://www.qq8827.com/live">
            <img className="item__sp" src="/assets/sp_casino.png" alt="Casino" />
          </a>
          <a href="https://www.qq8827.com/rng">
            <img className="item__sp" src="/assets/sp_nohu.png" alt="Nổ hũ" />
          </a>
          <a href="https://www.qq8827.com/fish">
            <img className="item__sp" src="/assets/sp_banca.png" alt="Bắn cá" />
          </a>
          <a href="https://www.qq8827.com/cockfight">
            <img className="item__sp" src="/assets/sp_daga.png" alt="Đá gà" />
          </a>
          <a href="https://www.qq8827.com/elott">
            <img className="item__sp" src="/assets/sp_xoso.png" alt="Xổ số" />
          </a>
        </div>
      </div>
      <div className="content__thunhap">
        <div className="content__title">
          <img src="/assets/title_tienti.png" />
          <div className="content__line">
            <div className="content__line__top"></div>
          </div>
        </div>
        <div className="content__title__thunhap">
          <span>Điều bạn cần làm là đăng ký tài khoản ĐẠI LÝ và "BẮT ĐẦU KIẾM TIỀN"!</span>
        </div>
        <div className="thunhap__list">
          {steps.map((step, index) => (
            <div key={index} className="thunhap__list__item">
              <img src={step.icon} alt={`step-${index + 1}`} className="" />
              <span className="">{step.title}</span>
              <p className="">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentOther;
