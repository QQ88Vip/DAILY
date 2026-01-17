import { useEffect, useState } from "react";
import "./WelcomePopup.scss";

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

const WelcomePopup: React.FC<WelcomePopupProps> = ({ isOpen, onClose, imageUrl }) => {
  const [hideToday, setHideToday] = useState(false);

  // Khi người dùng chọn “Không hiển thị lại hôm nay”, lưu vào localStorage
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setHideToday(checked);

    if (checked) {
      const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
      localStorage.setItem("hideWelcomePopup", today);
    } else {
      localStorage.removeItem("hideWelcomePopup");
    }
  };

  // Khi render, kiểm tra nếu hôm nay đã chọn ẩn popup thì không hiển thị
  useEffect(() => {
    const savedDate = localStorage.getItem("hideWelcomePopup");
    const today = new Date().toISOString().split("T")[0];
    console.log("Saved Date:", savedDate, "Today:", today);
    if (savedDate === today) {
      setHideToday(true);
    }
  }, []);

  if (!isOpen || hideToday) return null;

  return (
    <div className="welcome-popup-overlay">
      <div className="welcome-popup-content">
        <img src={imageUrl} alt="Welcome" className="popup-image" />
        <div className="popup-footer">
          <label className="hide-today">
            <input type="checkbox" checked={hideToday} onChange={handleCheckboxChange} />
            Không hiển thị lại thông báo hôm nay!
          </label>

          <button className="close-button" onClick={onClose}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
