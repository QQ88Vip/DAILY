import React, { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import styles from "./AgentComission.module.scss";

const ContentCalculator = () => {
  // State cho các input
  const [totalWinLoss, setTotalWinLoss] = useState<number>(0); // Thắng thua (điểm)
  const [totalRefund, setTotalRefund] = useState<number>(0); // Hoàn trả (điểm)
  const [totalPromotion, setTotalPromotion] = useState<number>(0); // Khuyến mãi (điểm)
  const [validMembers, setValidMembers] = useState<number>(0); // Hội viên hợp lệ
  const [newValidMembers, setNewValidMembers] = useState<number>(0); // Hội viên mới hợp lệ

  // State cho kết quả
  const [platformCost, setPlatformCost] = useState<number>(0);
  const [netProfit, setNetProfit] = useState<number>(0);
  const [commissionRate, setCommissionRate] = useState<number>(0);
  const [totalCommission, setTotalCommission] = useState<number>(0);
  const [status, setStatus] = useState<string>("Không đủ điều kiện");
  const [appliedLevel, setAppliedLevel] = useState<string>("");

  // State cho modal chi tiết
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Tính toán khi thay đổi input
  useEffect(() => {
    calculateCommission();
  }, [totalWinLoss, totalRefund, totalPromotion, validMembers, newValidMembers]);

  const formatNumber = (num: number): string => {
    // Hiển thị 1,000,000 (dùng dấu phẩy để ngăn cách hàng nghìn)
    return num.toLocaleString("en-US");
  };

  const parseNumber = (str: string): number => {
    return parseInt(str.replace(/,/g, "")) || 0;
  };

  const calculateCommission = () => {
    // 1. Chi phí nền tảng = 10% thắng thua
    const platformCostCalc = Math.abs(totalWinLoss) * 0.1;

    // 2. Lợi nhuận ròng
    const netProfitCalc = totalWinLoss - totalRefund - totalPromotion - platformCostCalc;

    // 3. Xác định mức hoa hồng
    let rate = 0;
    let levelName = "";
    let statusText = "Không đủ điều kiện";

    const levels = [
      { level: 5, rate: 0.6, minProfit: 5_000_000, minMembers: 30, name: "Mức 5: 60%" },
      { level: 4, rate: 0.55, minProfit: 1_000_000, minMembers: 20, name: "Mức 4: 55%" },
      { level: 3, rate: 0.5, minProfit: 100_000, minMembers: 10, name: "Mức 3: 50%" },
      { level: 2, rate: 0.45, minProfit: 1, minMembers: 5, name: "Mức 2: 45%" },
      { level: 1, rate: 0.35, minProfit: 1, minMembers: 3, name: "Mức 1: 35%" },
    ];

    for (const level of levels) {
      if (netProfitCalc >= level.minProfit && validMembers >= level.minMembers) {
        rate = level.rate;
        levelName = level.name;
        statusText = `Đủ điều kiện (${level.name})`;
        break;
      }
    }

    // Nếu không đạt mức nào
    if (rate === 0) {
      if (validMembers < 3) {
        statusText = "Không đủ điều kiện (cần ít nhất 3 thành viên)";
      } else if (netProfitCalc < 1) {
        statusText = "Không đủ điều kiện (lợi nhuận ròng ≥ 1 điểm)";
      }
    }

    // 4. Thưởng hội viên mới: 200,000 VND / người
    const newMemberBonus = newValidMembers * 200_000;

    // 5. Tổng hoa hồng = (lợi nhuận ròng × tỷ lệ) + thưởng thành viên mới
    const commission = netProfitCalc * rate;
    const totalComm = commission + newMemberBonus / 1000; // chuyển thưởng về đơn vị điểm

    // Cập nhật state
    setPlatformCost(platformCostCalc);
    setNetProfit(netProfitCalc);
    setCommissionRate(rate);
    setTotalCommission(totalComm);
    setStatus(statusText);
    setAppliedLevel(levelName);
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<number>>) => (e: ChangeEvent<HTMLInputElement>) => {
      const value = parseNumber(e.target.value);
      setter(value);
    };

  const handleSliderChange =
    (setter: React.Dispatch<React.SetStateAction<number>>) => (e: ChangeEvent<HTMLInputElement>) => {
      setter(Number(e.target.value));
    };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-2 sm:px-4 md:px-0 rounded-[20px] bg-white ">
      {/* Nút mở calculator */}
      <div className="flex justify-center flex-col items-center py-4">
        <button
          type="button"
          onClick={() => {
            setIsOpen((v) => !v);
            setIsModalOpen(false);
          }}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0a662f] text-white font-bold shadow-md hover:brightness-110 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-5H6a2 2 0 0 0-2 2v14Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M14 3v5h6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M8 13h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 17h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {isOpen ? "Thu gọn công cụ tính hoa hồng" : "Mở công cụ tính hoa hồng"}
        </button>
      </div>

      {/* Calculator Content */}
      {isOpen && (
      <div className="w-full mx-auto mt-4">
        <div className="bg-white rounded-2xl border border-[#0a662f] shadow-lg overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 text-white font-bold text-base sm:text-lg bg-[#0a662f]">
            <h3>Công cụ tính hoa hồng đại lý</h3>
            <button
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(false);
              }}
              className="text-white hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.21112 17.5C3.21112 9.59229 9.68061 3.18182 17.6611 3.18182C25.6417 3.18182 32.1112 9.59229 32.1112 17.5C32.1112 25.4078 25.6417 31.8182 17.6611 31.8182C9.68061 31.8182 3.21112 25.4078 3.21112 17.5ZM17.6611 0C7.90716 0 0 7.83502 0 17.5C0 27.1649 7.90716 35 17.6611 35C27.4151 35 35.3223 27.1649 35.3223 17.5C35.3223 7.83502 27.4151 0 17.6611 0ZM10.1036 24.9886C9.47659 24.3673 9.47659 23.36 10.1036 22.7387L15.3906 17.5L10.1036 12.2613C9.47659 11.64 9.47659 10.6327 10.1036 10.0114C10.7306 9.39013 11.7472 9.39013 12.3742 10.0114L17.6611 15.2501L22.9481 10.0114C23.575 9.39013 24.5917 9.39013 25.2187 10.0114C25.8456 10.6327 25.8456 11.64 25.2187 12.2613L19.9317 17.5L25.2187 22.7387C25.8456 23.36 25.8456 24.3673 25.2187 24.9886C24.5917 25.6098 23.575 25.6098 22.9481 24.9886L17.6611 19.7499L12.3742 24.9886C11.7472 25.6098 10.7306 25.6098 10.1036 24.9886Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          {/* Input Section */}
          <div className="p-4 sm:p-6 space-y-6 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold  mb-2 text-left">Thắng thua (1 điểm = 1,000 VND)</label>
                <input
                  type="text"
                  value={formatNumber(totalWinLoss)}
                  onChange={handleInputChange(setTotalWinLoss)}
                  className="w-full px-3 py-2 border border-[#0a662f] focus:ring-[#0a662f] rounded focus:outline-none focus:ring-2 "
                />
                <input
                  type="range"
                  min="0"
                  max="10000000"
                  value={totalWinLoss}
                  onChange={handleSliderChange(setTotalWinLoss)}
                  className="w-full mt-2 h-2 rounded-lg appearance-none cursor-pointer bg-[#02A9DC]/20 range-custom range-color-1"
                />
              </div>
              {/* Thắng thua */}

              {/* Hoàn trả */}
              <div>
                <label className="block text-sm font-bold  mb-2 text-left">Hoàn trả (1 điểm = 1,000 VND)</label>
                <input
                  type="text"
                  value={formatNumber(totalRefund)}
                  onChange={handleInputChange(setTotalRefund)}
                  className="w-full px-3 py-2 border border-[#0a662f] focus:ring-[#0a662f]  rounded focus:outline-none focus:ring-2 "
                />
                <input
                  type="range"
                  min="0"
                  max="500000"
                  value={totalRefund}
                  onChange={handleSliderChange(setTotalRefund)}
                  className="w-full mt-2 h-2 rounded-lg appearance-none cursor-pointer bg-[#02A9DC]/20 range-custom range-color-2"
                />
              </div>

              {/* Khuyến mãi */}
              <div>
                <label className="block text-sm font-bold mb-2 text-left">Khuyến mãi (1 điểm = 1,000 VND)</label>
                <input
                  type="text"
                  value={formatNumber(totalPromotion)}
                  onChange={handleInputChange(setTotalPromotion)}
                  className="w-full px-3 py-2 border border-[#0a662f] focus:ring-[#0a662f] rounded focus:outline-none focus:ring-2 "
                />
                <input
                  type="range"
                  min="0"
                  max="100000"
                  value={totalPromotion}
                  onChange={handleSliderChange(setTotalPromotion)}
                  className="w-full mt-2 h-2 rounded-lg appearance-none cursor-pointer bg-[#02A9DC]/20 range-custom range-color-3"
                />
              </div>

              {/* Hội viên hợp lệ */}
              <div>
                <label className="block text-sm font-bold  mb-2 text-left">Hội viên hợp lệ (Người)</label>
                <input
                  type="number"
                  min="0"
                  max="30"
                  value={validMembers}
                  onChange={(e) => {
                    const val = Math.max(0, Number(e.target.value));
                    setValidMembers(val);
                    if (newValidMembers > val) setNewValidMembers(val);
                  }}
                  className="w-full px-3 py-2 border border-[#0a662f] focus:ring-[#0a662f] rounded focus:outline-none focus:ring-2 "
                />
                <input
                  type="range"
                  min="0"
                  max="30"
                  value={validMembers}
                  onChange={handleSliderChange(setValidMembers)}
                  className="w-full mt-2 h-2 rounded-lg appearance-none cursor-pointer bg-[#02A9DC]/20 range-custom range-color-4"
                />
              </div>

              {/* Hội viên mới hợp lệ – luôn ≤ Hội viên hợp lệ */}
              <div>
                <label className="block text-sm font-bold mb-2 text-left">Hội viên mới hợp lệ (Người)</label>
                <input
                  type="number"
                  min="0"
                  max={validMembers}
                  value={newValidMembers}
                  onChange={(e) => setNewValidMembers(Math.min(validMembers, Math.max(0, Number(e.target.value) || 0)))}
                  className="w-full px-3 py-2 border border-[#0a662f] focus:ring-[#0a662f] rounded focus:outline-none focus:ring-2 "
                />
                <input
                  type="range"
                  min="0"
                  max={validMembers}
                  value={newValidMembers}
                  onChange={(e) => setNewValidMembers(Math.min(validMembers, Math.max(0, Number(e.target.value))))}
                  className="w-full mt-2 h-2 rounded-lg appearance-none cursor-pointer bg-[#02A9DC]/20 range-custom range-color-5"
                />
              </div>
            </div>

            {/* Results */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold  mb-4 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <path
                    d="M16.3333 8.16667C16.3333 8.86356 15.4772 9.43794 15.3057 10.0804C15.1287 10.7446 15.5766 11.6702 15.2404 12.2514C14.8987 12.8421 13.8711 12.9129 13.392 13.392C12.9129 13.8711 12.8421 14.8987 12.2514 15.2404C11.6702 15.5766 10.7446 15.1287 10.0804 15.3057C9.43794 15.4772 8.86356 16.3333 8.16667 16.3333C7.46978 16.3333 6.89539 15.4772 6.25294 15.3057C5.58872 15.1287 4.66317 15.5766 4.08197 15.2404C3.49125 14.8987 3.42047 13.8711 2.94136 13.392C2.46225 12.9129 1.43461 12.8421 1.09297 12.2514C0.756778 11.6702 1.20458 10.7446 1.02764 10.0804C0.856139 9.43794 0 8.86356 0 8.16667C0 7.46978 0.856139 6.89539 1.02764 6.25294C1.20458 5.58872 0.756778 4.66317 1.09297 4.08197C1.43461 3.49125 2.46225 3.42047 2.94136 2.94136C3.42047 2.46225 3.49125 1.43461 4.08197 1.09297C4.66317 0.756778 5.58872 1.20458 6.25294 1.02764C6.89539 0.856139 7.46978 0 8.16667 0C8.86356 0 9.43794 0.856139 10.0804 1.02764C10.7446 1.20458 11.6702 0.756778 12.2514 1.09297C12.8421 1.43461 12.9129 2.46225 13.392 2.94136C13.8711 3.42047 14.8987 3.49125 15.2404 4.08197C15.5766 4.66317 15.1287 5.58872 15.3057 6.25294C15.4772 6.89539 16.3333 7.46978 16.3333 8.16667Z"
                    fill="#0a662f"
                  />
                  <path
                    d="M10.5272 5.73306L7.41845 8.84184L5.80689 7.23164C5.45709 6.88184 4.8895 6.88184 4.5397 7.23164C4.18989 7.58145 4.18989 8.14903 4.5397 8.49884L6.8005 10.7596C7.14078 11.0999 7.69339 11.0999 8.03367 10.7596L11.7931 7.00025C12.1429 6.65045 12.1429 6.08286 11.7931 5.73306C11.4433 5.38325 10.877 5.38325 10.5272 5.73306Z"
                    fill="#FFFCEE"
                  />
                </svg>
                Kết quả tính toán
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
                <div className="bg-[#f2fff6] border border-[#0a662f] rounded-lg p-4 flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <circle cx="4.07484" cy="4.07484" r="4.07484" fill="#0a662f" />
                  </svg>
                  <div className="text-sm text-[#105B72] mb-1">Chi phí nền tảng</div>
                  <div className="text-xl font-bold text-emerald-600  ">{formatNumber(platformCost * 1000)} VND</div>
                </div>

                <div className="bg-[#f2fff6] border border-[#0a662f] rounded-lg p-4 flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <circle cx="4.07484" cy="4.07484" r="4.07484" fill="#5081F3" />
                  </svg>
                
                  <div className="text-sm text-[#105B72] mb-1">Lợi nhuận ròng</div>
                  <div className={`text-xl font-bold ${netProfit > 0 ? "text-blue-500" : "text-red-500"}`}>
                    {formatNumber(netProfit * 1000)} VND
                  </div>
                </div>

                <div className="bg-[#f2fff6] border border-[#0a662f] rounded-lg p-4 flex flex-col items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <circle cx="4.07484" cy="4.07484" r="4.07484" fill="#A758F5" />
                  </svg>
                  <div className="text-sm text-[#5B3A8E] mb-1">Tỷ lệ hoa hồng</div>
                  <div className="text-xl font-bold text-[#5B3A8E]">{appliedLevel || "0%"}</div>
                </div>
                <div className="bg-[#f2fff6] border border-[#0a662f] rounded-lg p-4 flex flex-col items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <circle cx="4.07484" cy="4.07484" r="4.07484" fill="#c4317e" />
                  </svg>
                  <div className="text-sm text-[#7A1F5C] mb-1">Tiền thưởng hội viên mới</div>
                  <div className="text-xl font-bold text-[#E02480]">{formatNumber(newValidMembers * 200_000)} VND</div>
                </div>
              </div>

              <div className="bg-[#f2fff6] border border-[#0a662f] rounded-lg p-4 mb-6 flex justify-between flex-col items-start lg:flex-row lg:items-center ">
                <span className="text-[#105B72] font-medium">
                  Trạng thái <br /> Mẹo: Điều chỉnh các thông số để tối ưu hóa hoa hồng của bạn.
                </span>
                {/* <span className="text-white font-medium"></span> */}
                <span
                  className={`px-4 py-1 rounded-full text-xs lg:text-sm font-semibold ${
                    commissionRate > 0 ? "bg-[#0a662f] text-white" : "bg-[#FFF4E5] text-[#AD5B00]"
                  }`}
                >
                  {status}
                </span>
              </div>

              <div className="bg-[#0a662f] border border-[#0a662f] rounded-lg p-6 text-center text-white shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-sm uppercase tracking-wider mb-2 opacity-90">TỔNG HOA HỒNG</div>
                  <div className="text-3xl md:text-4xl font-extrabold">{formatNumber(totalCommission * 1000)} VND</div>
                </div>
              </div>

              {/* Nút xem chi tiết */}
              {!isModalOpen && (
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center px-6 py-2  font-semibold rounded-lg gap-2 bg-[#f2fff6] border border-[#0a662f] hover:bg-[#E6F7FD] shadow-sm transition-all"
                  >
                   
                    Xem thêm chi tiết
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Modal chi tiết tính toán */}
      {isModalOpen && (
        <div className="bg-black/40 fixed inset-0 flex items-center justify-center z-50 p-4 ">
          <div className="bg-white rounded-2xl w-full max-w-4xl shadow-xl border border-[#0a662f] max-h-[80vh] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#0a662f]/40">
            {/* Modal Header */}
            <div className="bg-[#0a662f] gap-2 top-0 flex flex-col items-center justify-between px-6 py-4 text-white font-bold text-lg z-10 rounded-t-2xl">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M40 20C40 21.7067 37.9033 23.1133 37.4833 24.6867C37.05 26.3133 38.1467 28.58 37.3233 30.0033C36.4867 31.45 33.97 31.6233 32.7967 32.7967C31.6233 33.97 31.45 36.4867 30.0033 37.3233C28.58 38.1467 26.3133 37.05 24.6867 37.4833C23.1133 37.9033 21.7067 40 20 40C18.2933 40 16.8867 37.9033 15.3133 37.4833C13.6867 37.05 11.42 38.1467 9.99667 37.3233C8.55 36.4867 8.37667 33.97 7.20333 32.7967C6.03 31.6233 3.51333 31.45 2.67667 30.0033C1.85333 28.58 2.95 26.3133 2.51667 24.6867C2.09667 23.1133 0 21.7067 0 20C0 18.2933 2.09667 16.8867 2.51667 15.3133C2.95 13.6867 1.85333 11.42 2.67667 9.99667C3.51333 8.55 6.03 8.37667 7.20333 7.20333C8.37667 6.03 8.55 3.51333 9.99667 2.67667C11.42 1.85333 13.6867 2.95 15.3133 2.51667C16.8867 2.09667 18.2933 0 20 0C21.7067 0 23.1133 2.09667 24.6867 2.51667C26.3133 2.95 28.58 1.85333 30.0033 2.67667C31.45 3.51333 31.6233 6.03 32.7967 7.20333C33.97 8.37667 36.4867 8.55 37.3233 9.99667C38.1467 11.42 37.05 13.6867 37.4833 15.3133C37.9033 16.8867 40 18.2933 40 20Z"
                  fill="#FF9831"
                />
                <path
                  d="M25.7824 14.0312L18.1691 21.6445L14.2224 17.7012C13.3657 16.8445 11.9757 16.8445 11.1191 17.7012C10.2624 18.5578 10.2624 19.9478 11.1191 20.8045L16.6557 26.3412C17.4891 27.1745 18.8424 27.1745 19.6757 26.3412L28.8824 17.1345C29.7391 16.2778 29.7391 14.8878 28.8824 14.0312C28.0257 13.1745 26.6391 13.1745 25.7824 14.0312Z"
                  fill="black"
                />
              </svg>

              <h3>CHI TIẾT TÍNH TOÁN HOA HỒNG</h3>
            </div>

            {/* Modal Content */}
            <div className="lg:p-6 space-y-6 bg-white">
              {/* 1. Chi phí nền tảng */}
              <div className="bg-[#f2fff6] border border-[#0a662f] rounded-lg p-5">
                <h4 className="font-semibold text-emerald-600 text-lg mb-2">1. Chi phí nền tảng</h4>
                <p className="text-gray-800">
                  {formatNumber(totalWinLoss * 1000)} VND × 10% ={" "}
                  <span className="font-bold text-emerald-600">{formatNumber(platformCost * 1000)} VND</span>
                </p>
              </div>

              {/* 2. Lợi nhuận ròng */}
              <div className="bg-[#f2fff6] border border-[#0a662f] rounded-lg p-5">
                <h4 className="font-semibold text-emerald-600 text-lg mb-2">2. Lợi nhuận ròng</h4>
                <div className="space-y-2 text-gray-800">
                  <p>Tổng thắng thua: {formatNumber(totalWinLoss * 1000)} VND</p>
                  <p>- Tổng hoàn trả: {formatNumber(totalRefund * 1000)} VND</p>
                  <p>- Tổng khuyến mãi: {formatNumber(totalPromotion * 1000)} VND</p>
                  <p>- Chi phí nền tảng: {formatNumber(platformCost * 1000)} VND</p>
                  <hr className="my-3" />
                  <p className="font-bold text-emerald-600 text-lg">= Lợi nhuận ròng: {formatNumber(netProfit * 1000)} VND</p>
                </div>
              </div>

              {/* 3. Xác định tỷ lệ hoa hồng */}
              <div className="rounded-lg p-5 bg-[#f2fff6] border border-[#0a662f] ">
                <h4 className="font-semibold  text-emerald-600 text-lg mb-2">3. Xác định tỷ lệ hoa hồng</h4>
                <p className="mb-4 text-gray-800">📋 Bảng tham khảo các mức hoa hồng:</p>
                <div className="flex flex-col items-center">
                  <div className="flex justify-center gap-4 mb-5 w-full lg:w-[75%]">
                    <div
                      className={`p-1 rounded-lg w-full lg:w-1/2 border-2 ${
                        commissionRate === 35 / 100 ? "border-[#7cc9a0] bg-[#f2fff6]" : "border-[#c1e9d2] bg-white"
                      }`}
                    >
                      <p className="font-bold text-lg text-center text-emerald-600">Mức 1: 35%</p>
                      <p className="text-sm text-center text-gray-700">Lợi nhuận ≥ {formatNumber(1)} + ≥ 3 thành viên</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-items-center gap-4 w-full lg:w-[75%]">
                    <div
                      className={`p-1 w-full rounded-lg border-2 ${
                        commissionRate === 45 / 100 ? "border-[#7cc9a0] bg-[#f2fff6]" : "border-[#c1e9d2] bg-white"
                      }`}
                    >
                      <p className="font-bold text-lg text-center text-emerald-600">Mức 2: 45%</p>
                      <p className="text-sm text-center text-gray-700">Lợi nhuận ≥ {formatNumber(1)} + ≥ 5 thành viên</p>
                    </div>
                    <div
                      className={`p-1 w-full rounded-lg border-2 ${
                        commissionRate === 50 / 100 ? "border-[#7cc9a0] bg-[#f2fff6]" : "border-[#c1e9d2] bg-white"
                      }`}
                    >
                      <p className="font-bold text-lg text-center text-emerald-600">Mức 3: 50%</p>
                      <p className="text-sm text-center text-gray-700">
                        Lợi nhuận ≥ {formatNumber(100000)} + ≥ 10 thành viên
                      </p>
                    </div>
                    <div
                      className={`p-1 w-full rounded-lg border-2 ${
                        commissionRate === 55 / 100 ? "border-[#7cc9a0] bg-[#f2fff6]" : "border-[#c1e9d2] bg-white"
                      }`}
                    >
                      <p className="font-bold text-lg text-center text-emerald-600">Mức 4: 55%</p>
                      <p className="text-sm text-center text-gray-700">
                        Lợi nhuận ≥ {formatNumber(1000000)} + ≥ 20 thành viên
                      </p>
                    </div>
                    <div
                      className={`p-1 w-full rounded-lg border-2 ${
                        commissionRate === 60 / 100 ? "border-[#7cc9a0] bg-[#f2fff6]" : "border-[#c1e9d2] bg-white"
                      }`}
                    >
                      <p className="font-bold text-lg text-center text-emerald-600">Mức 5: 60%</p>
                      <p className="text-sm text-center text-gray-700">
                        Lợi nhuận ≥ {formatNumber(5000000)} + ≥ 30 thành viên
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 border border-[#0a662f] bg-white p-4 rounded-lg w-full lg:w-[80%]">
                    <p className="font-semibold text-emerald-600 text-center">
                      Mức hoa hồng áp dụng: {appliedLevel || "Không đủ điều kiện"}
                    </p>
                  </div>
                </div>
              </div>
              {/* 5. Tổng hoa hồng */}
              <div className=" bg-[#f2fff6] border border-[#0a662f] rounded-lg p-6 text-center">
                <h4 className="font-semibold text-lg mb-3 text-left text-emerald-600">4. Tổng hoa hồng</h4>
                <div className="rounded p-4">
                  <p className="text-emerald-600 font-bold">Công thức tính</p>
                  <p className="mb-2 text-gray-800">
                    {formatNumber(netProfit * 1000)} VND × {(commissionRate * 100).toFixed(0)}%
                  </p>
                  <p className="text-gray-800">+ Thưởng thành viên mới: {formatNumber(newValidMembers * 200_000)} VND</p>
                  <hr className="my-3 opacity-50" />
                  <p className="text-3xl font-bold text-emerald-600">= {formatNumber(totalCommission * 1000)} VND</p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center pb-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="inline-flex items-center px-6 py-2  font-semibold rounded-lg gap-2 border border-[#0a662f] bg-white hover:bg-[#E6F7FD] shadow-sm transition-all"
              >
                Thu gọn
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const AgentCommission: React.FC = () => {
  const commissionData = [
    { profit: "1+", members: "3+", rate: "35%" },
    { profit: "", members: "5+", rate: "45%" },
    { profit: "100,000+", members: "10+", rate: "50%" },
    { profit: "1,000,000+", members: "20+", rate: "55%" },
    { profit: "5,000,000+", members: "30+", rate: "60%" },
  ];
  return (
    <div className={styles.containerComission}>
      <h2 className={styles.title}>HOA HỒNG ĐẠI LÝ</h2>
      <div className={styles.divider}>
        <img src="/assets/content_title.png" alt="title" />
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.commissionTable}>
          <thead>
            <tr>
              <th>LỢI NHUẬN RÒNG</th>
              <th>HỘI VIÊN HỢP LỆ</th>
              <th>TỈ LỆ HOA HỒNG</th>
            </tr>
          </thead>
          <tbody>
            {commissionData.map((row, index) => (
              <tr key={index}>
                {index === 0 && <td rowSpan={2}>{row.profit}</td>}
                {index > 1 && <td>{row.profit}</td>}
                {/* <td>{row.profit}</td> */}
                <td>{row.members}</td>
                <td>{row.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.description}>
        <span className={styles.highlight}>✦</span>
        <span className={styles.bold}> Lợi nhuận ròng</span>
        <span>
          {" "}
          = Tổng thắng thua - Tổng hoàn trả - Tổng khuyến mãi - Chi phí nền tảng.
          <br />
        </span>
        <span className={styles.highlight}>✦</span>
        <span> </span>
        <span className={styles.bold}>Chi phí nền tảng</span>
        <span>
          {" "}
          = Tổng thắng thua x 10% ( nếu đại lý trong tháng không có lợi nhuận âm thì sẽ không phải
          tính chi phí nền tảng)
          <br />
        </span>
        <span className={styles.highlight}>✦</span>
        <span> </span>
        <span className={styles.bold}>Hoa hồng</span>
        <span>
          {" "}
          = Lợi nhuận ròng * tỷ lệ hoa hồng.
          <br />
        </span>
        <span className={styles.highlight}>✦</span>
        <span> </span>
        <span className={styles.bold}>Ví dụ 1</span>
        <span>
          : Đại lý trong tháng có lợi nhuận ròng là 2,000,000 điểm, trong tháng có 5 hội viên hợp
          lệ, hoa hồng sẽ là 2,000,000 * 45%= 900,000 điểm (900 triệu vnd).
          <br />
        </span>
        <span className={styles.highlight}>✦</span>
        <span> </span>
        <span className={styles.bold}>Ví dụ 2</span>
        <span>
          : Đại lý trong tháng có lợi nhuận ròng là 2,000,000 điểm, trong tháng có 20 hội viên hợp
          lệ, hoa hồng sẽ là 2,000,000 * 55%= 1,100,000 điểm (1 tỉ 1 trăm triệu vnd)
          <br />
        </span>
        <span className={styles.highlight}>✦</span>
        <span>
          {" "}
          Số hội viên hợp lệ trong tháng tối thiểu mà đại lý cần đạt để nhận hoa hồng là 3 hội viên.
          <br />
        </span>
        <span className={styles.highlight}>✦</span>
        <span>
          {" "}
          Nếu trong tháng đại lý không đạt được 2 điều kiện trên thì sẽ không được tính hoa hồng
          tháng đó.
          <br />
        </span>
        <span className={styles.highlight}>✦</span>
        <span> </span>
        <span className={styles.bold}>Hội viên hợp lệ</span>
        <span>
          : Hội viên trong tháng nạp tiền ≥ 1,000 điểm, cược hợp lệ ≥ 3,000 điểm (dựa vào đánh giá
          tổng hợp Ip, tính hoạt động và tính nạp lại phê duyệt).
          <br />
        </span>
        <br />
        <span className={styles.highlight}>✦</span>
        <span className={styles.bold}> Chú ý:</span>
        <span className={styles.underlineText}>
          <br />
        </span>
        <span className={styles.bold}>‒</span>
        <span className={styles.bold}>
          {" "}
          Đại lý Google SEO/ADS chạy từ khoá nội bộ của công ty mức hoa hồng cố định là 15%. (Từ
          khóa nội bộ ví dụ: link mới QQ88, link QQ88 , Đăng nhập QQ88...). Ngoài ra các từ khóa liên quan đến các web đang và từng thuộc liên minh trước đây của QQ88, mức hoa hồng cũng sẽ áp dụng cố định 15%.
        </span>
        <br />
        <span className={styles.bold}>‒ Chương trình này không áp dụng với sản phẩm xổ số.</span>
      </div>

      <ContentCalculator />
    </div>
  );
};

export default AgentCommission;
