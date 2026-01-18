import React, { useState } from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageStates, setImageStates] = useState({
    xemthem: true,
    morong: false,
  });

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleImageClick = () => {
    setImageStates(prev => ({
      xemthem: !prev.xemthem,
      morong: !prev.morong,
    }));
  };

  return (
    <div>
      <div className="footer-pc hidden md:block ">
        <div className="footer-main">
          <div className="main-wrap flex-nowrap ">
            <div className="footer-intro-endorse -mx-0 md:-mx-2">
              <div className="footer-endorse">
                <section className="ambassador-strip flex-col !justify-between md:flex-row !gap-0  items-stretch flex-nowrap ">
                  <div className="w-auto lg:w-full  max-w-[240px] lg:max-w-[35%]  flex items-start">
                    {!isExpanded && (
                      <img
                        className=" w-auto h-auto object-contain"
                        src="/assets/footer_images/qqxemthem.png"
                        alt="Ghi Chú"
                        onClick={handleToggleExpand}
                        
                      />
                    )}
                    {isExpanded && (
                      <img
                        className="w-full h-full object-contain"
                        src="/assets/footer_images/qqmorong1.png"
                        alt="Ghi Chú"
                      />
                    )}
                  </div>
                  <div className="w-auto lg:max-w-[25%]">
                    <div className="text-md lg:text-xl 2xl:text-2xl font-bold  text-[#006719] uppercase text-left">liên kết nhanh</div>
                    <div className="border-b border-[#006719] lg:py-2">
                      <a href="" className="flex items-center 2xlgap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
                          <path d="M8.5002 8.3C8.1002 7.9 7.5002 7.9 7.1002 8.3C6.7002 8.7 6.7002 9.3 7.1002 9.7L9.3002 12L7.0002 14.3C6.8002 14.5 6.7002 14.7 6.7002 15C6.7002 15.6 7.1002 16 7.7002 16C8.0002 16 8.2002 15.9 8.4002 15.7L11.4002 12.7C11.8002 12.3 11.8002 11.7 11.4002 11.3L8.5002 8.3ZM17.0002 11.3L14.0002 8.3C13.6002 7.9 13.0002 7.9 12.6002 8.3C12.2002 8.7 12.2002 9.3 12.6002 9.7L14.9002 12L12.6002 14.3C12.4002 14.5 12.3002 14.7 12.3002 15C12.3002 15.6 12.7002 16 13.3002 16C13.6002 16 13.8002 15.9 14.0002 15.7L17.0002 12.7C17.3002 12.3 17.3002 11.7 17.0002 11.3Z" fill="#006719" />
                        </svg>
                        <p
                          className="text-[#006719] text-sm 2xl:text-[18px] lg:text-md  leading-[150%] "
                        >
                          Điều khoản và Điều Kiện
                        </p>
                      </a>
                    </div>
                    <div className="border-b border-[#006719] lg:py-2">
                      <a href="" className="flex items-center 2xlgap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
                          <path d="M8.5002 8.3C8.1002 7.9 7.5002 7.9 7.1002 8.3C6.7002 8.7 6.7002 9.3 7.1002 9.7L9.3002 12L7.0002 14.3C6.8002 14.5 6.7002 14.7 6.7002 15C6.7002 15.6 7.1002 16 7.7002 16C8.0002 16 8.2002 15.9 8.4002 15.7L11.4002 12.7C11.8002 12.3 11.8002 11.7 11.4002 11.3L8.5002 8.3ZM17.0002 11.3L14.0002 8.3C13.6002 7.9 13.0002 7.9 12.6002 8.3C12.2002 8.7 12.2002 9.3 12.6002 9.7L14.9002 12L12.6002 14.3C12.4002 14.5 12.3002 14.7 12.3002 15C12.3002 15.6 12.7002 16 13.3002 16C13.6002 16 13.8002 15.9 14.0002 15.7L17.0002 12.7C17.3002 12.3 17.3002 11.7 17.0002 11.3Z" fill="#006719" />
                        </svg>
                        <p
                          className="text-[#006719] text-sm 2xl:text-[18px] lg:text-md  leading-[150%] "
                        >
                          Giới thiệu Về Q888
                        </p>
                      </a>
                    </div>
                    <div className="border-b border-[#006719] lg:py-2">
                      <a href="" className="flex items-center 2xlgap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
                          <path d="M8.5002 8.3C8.1002 7.9 7.5002 7.9 7.1002 8.3C6.7002 8.7 6.7002 9.3 7.1002 9.7L9.3002 12L7.0002 14.3C6.8002 14.5 6.7002 14.7 6.7002 15C6.7002 15.6 7.1002 16 7.7002 16C8.0002 16 8.2002 15.9 8.4002 15.7L11.4002 12.7C11.8002 12.3 11.8002 11.7 11.4002 11.3L8.5002 8.3ZM17.0002 11.3L14.0002 8.3C13.6002 7.9 13.0002 7.9 12.6002 8.3C12.2002 8.7 12.2002 9.3 12.6002 9.7L14.9002 12L12.6002 14.3C12.4002 14.5 12.3002 14.7 12.3002 15C12.3002 15.6 12.7002 16 13.3002 16C13.6002 16 13.8002 15.9 14.0002 15.7L17.0002 12.7C17.3002 12.3 17.3002 11.7 17.0002 11.3Z" fill="#006719" />
                        </svg>
                        <p
                          className="text-[#006719] text-sm lg:text-md  leading-[150%] "
                        >
                          Chơi Có Trách Nhiệm
                        </p>
                      </a>
                    </div>
                    <div className="border-b border-[#006719] lg:py-2">
                      <a href="" className="flex items-center 2xlgap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
                          <path d="M8.5002 8.3C8.1002 7.9 7.5002 7.9 7.1002 8.3C6.7002 8.7 6.7002 9.3 7.1002 9.7L9.3002 12L7.0002 14.3C6.8002 14.5 6.7002 14.7 6.7002 15C6.7002 15.6 7.1002 16 7.7002 16C8.0002 16 8.2002 15.9 8.4002 15.7L11.4002 12.7C11.8002 12.3 11.8002 11.7 11.4002 11.3L8.5002 8.3ZM17.0002 11.3L14.0002 8.3C13.6002 7.9 13.0002 7.9 12.6002 8.3C12.2002 8.7 12.2002 9.3 12.6002 9.7L14.9002 12L12.6002 14.3C12.4002 14.5 12.3002 14.7 12.3002 15C12.3002 15.6 12.7002 16 13.3002 16C13.6002 16 13.8002 15.9 14.0002 15.7L17.0002 12.7C17.3002 12.3 17.3002 11.7 17.0002 11.3Z" fill="#006719" />
                        </svg>
                        <p
                          className="text-[#006719] text-sm 2xl:text-[18px] lg:text-md  leading-[150%] "
                        >
                          Miễn Trách Nhiệm
                        </p>
                      </a>
                    </div>
                    <div className="border-b border-[#006719] lg:py-2">
                      <a href="" className="flex items-center 2xlgap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
                          <path d="M8.5002 8.3C8.1002 7.9 7.5002 7.9 7.1002 8.3C6.7002 8.7 6.7002 9.3 7.1002 9.7L9.3002 12L7.0002 14.3C6.8002 14.5 6.7002 14.7 6.7002 15C6.7002 15.6 7.1002 16 7.7002 16C8.0002 16 8.2002 15.9 8.4002 15.7L11.4002 12.7C11.8002 12.3 11.8002 11.7 11.4002 11.3L8.5002 8.3ZM17.0002 11.3L14.0002 8.3C13.6002 7.9 13.0002 7.9 12.6002 8.3C12.2002 8.7 12.2002 9.3 12.6002 9.7L14.9002 12L12.6002 14.3C12.4002 14.5 12.3002 14.7 12.3002 15C12.3002 15.6 12.7002 16 13.3002 16C13.6002 16 13.8002 15.9 14.0002 15.7L17.0002 12.7C17.3002 12.3 17.3002 11.7 17.0002 11.3Z" fill="#006719" />
                        </svg>
                        <p
                          className="text-[#006719] text-sm 2xl:text-[18px] lg:text-md  leading-[150%] "
                        >
                          Chính Sách Bảo Mật
                        </p>
                      </a>
                    </div>
                    <div className="border-b border-[#006719] lg:py-2">
                      <a href="" className="flex items-center 2xlgap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
                          <path d="M8.5002 8.3C8.1002 7.9 7.5002 7.9 7.1002 8.3C6.7002 8.7 6.7002 9.3 7.1002 9.7L9.3002 12L7.0002 14.3C6.8002 14.5 6.7002 14.7 6.7002 15C6.7002 15.6 7.1002 16 7.7002 16C8.0002 16 8.2002 15.9 8.4002 15.7L11.4002 12.7C11.8002 12.3 11.8002 11.7 11.4002 11.3L8.5002 8.3ZM17.0002 11.3L14.0002 8.3C13.6002 7.9 13.0002 7.9 12.6002 8.3C12.2002 8.7 12.2002 9.3 12.6002 9.7L14.9002 12L12.6002 14.3C12.4002 14.5 12.3002 14.7 12.3002 15C12.3002 15.6 12.7002 16 13.3002 16C13.6002 16 13.8002 15.9 14.0002 15.7L17.0002 12.7C17.3002 12.3 17.3002 11.7 17.0002 11.3Z" fill="#006719" />
                        </svg>
                        <p
                          className="text-[#006719] text-sm 2xl:text-[18px] lg:text-md  leading-[150%] "
                        >
                          Câu Hỏi Thường Gặp
                        </p>
                      </a>
                    </div>
                    <div className=" lg:py-2">
                      <a href="" className="flex items-center 2xlgap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
                          <path d="M8.5002 8.3C8.1002 7.9 7.5002 7.9 7.1002 8.3C6.7002 8.7 6.7002 9.3 7.1002 9.7L9.3002 12L7.0002 14.3C6.8002 14.5 6.7002 14.7 6.7002 15C6.7002 15.6 7.1002 16 7.7002 16C8.0002 16 8.2002 15.9 8.4002 15.7L11.4002 12.7C11.8002 12.3 11.8002 11.7 11.4002 11.3L8.5002 8.3ZM17.0002 11.3L14.0002 8.3C13.6002 7.9 13.0002 7.9 12.6002 8.3C12.2002 8.7 12.2002 9.3 12.6002 9.7L14.9002 12L12.6002 14.3C12.4002 14.5 12.3002 14.7 12.3002 15C12.3002 15.6 12.7002 16 13.3002 16C13.6002 16 13.8002 15.9 14.0002 15.7L17.0002 12.7C17.3002 12.3 17.3002 11.7 17.0002 11.3Z" fill="#006719" />
                        </svg>
                        <p
                          className="text-[#006719] text-sm 2xl:text-[18px] lg:text-md leading-[150%] "
                        >
                          Hợp Tác Đại Lý
                        </p>
                      </a>
                    </div>


                  </div>

                  <div className="w-auto lg:max-w-[20%] ">
                    <div className="text-md 2xl:text-2xl lg:text-xl font-bold  text-[#006719] uppercase text-left">tổng hợp</div>
                    <div className="border-b border-[#006719] lg:py-2">
                      <a href="" className="flex items-center 2xl:gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
                          <path d="M8.5002 8.3C8.1002 7.9 7.5002 7.9 7.1002 8.3C6.7002 8.7 6.7002 9.3 7.1002 9.7L9.3002 12L7.0002 14.3C6.8002 14.5 6.7002 14.7 6.7002 15C6.7002 15.6 7.1002 16 7.7002 16C8.0002 16 8.2002 15.9 8.4002 15.7L11.4002 12.7C11.8002 12.3 11.8002 11.7 11.4002 11.3L8.5002 8.3ZM17.0002 11.3L14.0002 8.3C13.6002 7.9 13.0002 7.9 12.6002 8.3C12.2002 8.7 12.2002 9.3 12.6002 9.7L14.9002 12L12.6002 14.3C12.4002 14.5 12.3002 14.7 12.3002 15C12.3002 15.6 12.7002 16 13.3002 16C13.6002 16 13.8002 15.9 14.0002 15.7L17.0002 12.7C17.3002 12.3 17.3002 11.7 17.0002 11.3Z" fill="#006719" />
                        </svg>
                        <p
                          className="text-[#006719] text-sm 2xl:text-[18px] lg:text-sm  leading-[150%] "
                        >
                          THỂ THAO
                        </p>
                      </a>
                    </div>
                    <div className="border-b border-[#006719] lg:py-2">
                      <a href="" className="flex items-center 2xlgap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
                          <path d="M8.5002 8.3C8.1002 7.9 7.5002 7.9 7.1002 8.3C6.7002 8.7 6.7002 9.3 7.1002 9.7L9.3002 12L7.0002 14.3C6.8002 14.5 6.7002 14.7 6.7002 15C6.7002 15.6 7.1002 16 7.7002 16C8.0002 16 8.2002 15.9 8.4002 15.7L11.4002 12.7C11.8002 12.3 11.8002 11.7 11.4002 11.3L8.5002 8.3ZM17.0002 11.3L14.0002 8.3C13.6002 7.9 13.0002 7.9 12.6002 8.3C12.2002 8.7 12.2002 9.3 12.6002 9.7L14.9002 12L12.6002 14.3C12.4002 14.5 12.3002 14.7 12.3002 15C12.3002 15.6 12.7002 16 13.3002 16C13.6002 16 13.8002 15.9 14.0002 15.7L17.0002 12.7C17.3002 12.3 17.3002 11.7 17.0002 11.3Z" fill="#006719" />
                        </svg>
                        <p
                          className="text-[#006719] text-sm 2xl:text-[18px] lg:text-sm leading-[150%] "
                        >
                          CASINO
                        </p>
                      </a>
                    </div>
                    <div className="border-b border-[#006719] lg:py-2">
                      <a href="" className="flex items-center 2xlgap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
                          <path d="M8.5002 8.3C8.1002 7.9 7.5002 7.9 7.1002 8.3C6.7002 8.7 6.7002 9.3 7.1002 9.7L9.3002 12L7.0002 14.3C6.8002 14.5 6.7002 14.7 6.7002 15C6.7002 15.6 7.1002 16 7.7002 16C8.0002 16 8.2002 15.9 8.4002 15.7L11.4002 12.7C11.8002 12.3 11.8002 11.7 11.4002 11.3L8.5002 8.3ZM17.0002 11.3L14.0002 8.3C13.6002 7.9 13.0002 7.9 12.6002 8.3C12.2002 8.7 12.2002 9.3 12.6002 9.7L14.9002 12L12.6002 14.3C12.4002 14.5 12.3002 14.7 12.3002 15C12.3002 15.6 12.7002 16 13.3002 16C13.6002 16 13.8002 15.9 14.0002 15.7L17.0002 12.7C17.3002 12.3 17.3002 11.7 17.0002 11.3Z" fill="#006719" />
                        </svg>
                        <p
                          className="text-[#006719] text-sm 2xl:text-[18px] lg:text-sm  leading-[150%] "
                        >
                          NỔ HŨ
                        </p>
                      </a>
                    </div>
                    <div className="border-b border-[#006719] lg:py-2">
                      <a href="" className="flex items-center 2xlgap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
                          <path d="M8.5002 8.3C8.1002 7.9 7.5002 7.9 7.1002 8.3C6.7002 8.7 6.7002 9.3 7.1002 9.7L9.3002 12L7.0002 14.3C6.8002 14.5 6.7002 14.7 6.7002 15C6.7002 15.6 7.1002 16 7.7002 16C8.0002 16 8.2002 15.9 8.4002 15.7L11.4002 12.7C11.8002 12.3 11.8002 11.7 11.4002 11.3L8.5002 8.3ZM17.0002 11.3L14.0002 8.3C13.6002 7.9 13.0002 7.9 12.6002 8.3C12.2002 8.7 12.2002 9.3 12.6002 9.7L14.9002 12L12.6002 14.3C12.4002 14.5 12.3002 14.7 12.3002 15C12.3002 15.6 12.7002 16 13.3002 16C13.6002 16 13.8002 15.9 14.0002 15.7L17.0002 12.7C17.3002 12.3 17.3002 11.7 17.0002 11.3Z" fill="#006719" />
                        </svg>
                        <p
                          className="text-[#006719] text-sm 2xl:text-[18px] lg:text-sm  leading-[150%] "
                        >
                          GAME BÀI
                        </p>
                      </a>
                    </div>
                    <div className="border-b border-[#006719] lg:py-2">
                      <a href="" className="flex items-center 2xlgap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
                          <path d="M8.5002 8.3C8.1002 7.9 7.5002 7.9 7.1002 8.3C6.7002 8.7 6.7002 9.3 7.1002 9.7L9.3002 12L7.0002 14.3C6.8002 14.5 6.7002 14.7 6.7002 15C6.7002 15.6 7.1002 16 7.7002 16C8.0002 16 8.2002 15.9 8.4002 15.7L11.4002 12.7C11.8002 12.3 11.8002 11.7 11.4002 11.3L8.5002 8.3ZM17.0002 11.3L14.0002 8.3C13.6002 7.9 13.0002 7.9 12.6002 8.3C12.2002 8.7 12.2002 9.3 12.6002 9.7L14.9002 12L12.6002 14.3C12.4002 14.5 12.3002 14.7 12.3002 15C12.3002 15.6 12.7002 16 13.3002 16C13.6002 16 13.8002 15.9 14.0002 15.7L17.0002 12.7C17.3002 12.3 17.3002 11.7 17.0002 11.3Z" fill="#006719" />
                        </svg>
                        <p
                          className="text-[#006719] text-sm 2xl:text-[18px] lg:text-sm leading-[150%] "
                        >
                          BẮN CÁ
                        </p>
                      </a>
                    </div>
                    <div className="border-b border-[#006719] lg:py-2">
                      <a href="" className="flex items-center 2xlgap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
                          <path d="M8.5002 8.3C8.1002 7.9 7.5002 7.9 7.1002 8.3C6.7002 8.7 6.7002 9.3 7.1002 9.7L9.3002 12L7.0002 14.3C6.8002 14.5 6.7002 14.7 6.7002 15C6.7002 15.6 7.1002 16 7.7002 16C8.0002 16 8.2002 15.9 8.4002 15.7L11.4002 12.7C11.8002 12.3 11.8002 11.7 11.4002 11.3L8.5002 8.3ZM17.0002 11.3L14.0002 8.3C13.6002 7.9 13.0002 7.9 12.6002 8.3C12.2002 8.7 12.2002 9.3 12.6002 9.7L14.9002 12L12.6002 14.3C12.4002 14.5 12.3002 14.7 12.3002 15C12.3002 15.6 12.7002 16 13.3002 16C13.6002 16 13.8002 15.9 14.0002 15.7L17.0002 12.7C17.3002 12.3 17.3002 11.7 17.0002 11.3Z" fill="#006719" />
                        </svg>
                        <p
                          className="text-[#006719] text-sm 2xl:text-[18px] lg:text-sm leading-[150%] "
                        >
                          ĐÁ GÀ
                        </p>
                      </a>
                    </div>
                    <div className="lg:py-2">
                      <a href="" className="flex items-center 2xl:gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
                          <path d="M8.5002 8.3C8.1002 7.9 7.5002 7.9 7.1002 8.3C6.7002 8.7 6.7002 9.3 7.1002 9.7L9.3002 12L7.0002 14.3C6.8002 14.5 6.7002 14.7 6.7002 15C6.7002 15.6 7.1002 16 7.7002 16C8.0002 16 8.2002 15.9 8.4002 15.7L11.4002 12.7C11.8002 12.3 11.8002 11.7 11.4002 11.3L8.5002 8.3ZM17.0002 11.3L14.0002 8.3C13.6002 7.9 13.0002 7.9 12.6002 8.3C12.2002 8.7 12.2002 9.3 12.6002 9.7L14.9002 12L12.6002 14.3C12.4002 14.5 12.3002 14.7 12.3002 15C12.3002 15.6 12.7002 16 13.3002 16C13.6002 16 13.8002 15.9 14.0002 15.7L17.0002 12.7C17.3002 12.3 17.3002 11.7 17.0002 11.3Z" fill="#006719" />
                        </svg>
                        <p
                          className="text-[#006719] text-sm 2xl:text-[18px] lg:text-sm leading-[150%] "
                        >
                          XỔ SỐ
                        </p>
                      </a>
                    </div>


                  </div>

                  <div className="w-auto md:max-w-[150px] lg:max-w-[24%] ">
                    <div className="text-sm 2xl:text-2xl lg:text-xl font-bold  text-[#006719] uppercase text-left">ĐẠI Sứ Thương Hiệu</div>
                    <img src="/assets/footer_images/johnTerry-new.png" alt="John Terry" className="w-full lg:w-auto" />
                  </div>
                </section>
              </div>
            </div>
            {isExpanded && (
              <div className=" xl:-mt-4 xl:mb-5 lg:-mt-5 lg:mb-5 lg:ml-0 -mt-6 mb-4 -ml-0.5">
                <img
                  src="/assets/footer_images/qqmorong.png"
                  alt="Ghi Chú"
                  className="cursor-pointer w-full "
                  onClick={handleToggleExpand}
                />
              </div>
            )}
            <div className="footer-logos-icons">
              <div className="footer-icons flex flex-nowrap">
                <div className="max-w-[40px] w-auto my-auto">
                  <a href="">
                    <img src="/assets/footer_images/f1.png" alt="icon1" />
                  </a>
                </div>
                <div className="max-w-[40px] w-auto my-auto">
                  <a href="">
                    <img src="/assets/footer_images/2.png" alt="icon1" />
                  </a>
                </div>
                <div className="max-w-[40px] w-auto my-auto">
                  <a href="">
                    <img src="/assets/footer_images/3.png" alt="icon1" />
                  </a>
                </div>
                <div className="max-w-[40px] w-auto my-auto">
                  <a href="">
                    <img src="/assets/footer_images/4.png" alt="icon1" />
                  </a>
                </div>
                <div className="max-w-[40px] w-auto my-auto">
                  <a href="">
                    <img src="/assets/footer_images/5.png" alt="icon1" />
                  </a>
                </div>
                <div className="max-w-[40px] w-auto my-auto">
                  <a href="">
                    <img src="/assets/footer_images/6.png" alt="icon1" />
                  </a>
                </div>
                <div className="max-w-[40px] w-auto my-auto">
                  <a href="">
                    <img src="/assets/footer_images/7.png" alt="icon1" />
                  </a>
                </div>
                <div className="max-w-[40px] w-auto my-auto">
                  <a href="">
                    <img src="/assets/footer_images/8.png" alt="icon1" />
                  </a>
                </div>
                <div className="max-w-[40px] w-auto my-auto">
                  <a href="">
                    <img src="/assets/footer_images/9.png" alt="icon1" />
                  </a>
                </div>
                <div className="max-w-[40px] w-auto my-auto">
                  <a href="">
                    <img src="/assets/footer_images/10.png" alt="icon1" />
                  </a>
                </div>
                <div className="max-w-[40px] w-auto my-auto">
                  <a href="/assets/footer_images/tele.png">
                    <img src="/assets/footer_images/11.png" alt="icon1" />
                  </a>
                </div>
                <div className="max-w-[40px] w-auto my-auto">
                  <a href="/assets/footer_images/fb.png">
                    <img src="/assets/footer_images/12.png" alt="icon1" />
                  </a>
                </div>
                <div className="max-w-[40px] w-auto my-auto">
                  <a href="/assets/footer_images/yt.png">
                    <img src="/assets/footer_images/13.png" alt="icon1" />
                  </a>
                </div>

              </div>
            </div>
            <div className="w-full  px-4 md:px-0 text-center md:justify-start"><span className="text-[#006719] text-sm 2xl:text-lg lg:text-xl font-normal  leading-6 line-clamp-3">QQ88 được sở hữu và vận hành bởi Cyber Labs B.V., một công ty được đăng ký tại Curaçao với số đăng ký 166785 và địa chỉ đăng ký tại:</span></div>
            <div className="w-full px-4 md:px-0 text-center md:justify-start text-sm 2xl:text-lg text-[#006719] lg:text-xl ">Zuikertuintjeweg Z/N, Curaçao.Cyber Labs B.V. được cấp phép và quản lý bởi Curaçao Gaming Authority (CGA) với số giấy phép: OGL/2024/1696/1055, được cấp vào ngày 13/03/2025. Dịch vụ tin cậy và được đại diện bởi <a href="">https://igagroup.com</a></div>
            <div className="footer-copy text-sm 2xl:text-base px-4 md:px-0 lg:text-xl ">Copyright © QQ88 Reserved</div>
          </div>
        </div>
      </div>

      <div className="footer-mb w-full block md:hidden flex flex-col justify-center items-start">
      <img src="/assets/footer_images/amba.png" alt="" className='w-full h-auto object-contain mx-1' />
      <div className='w-full h-[15px] mb-4  mx-1 flex justify-start items-center gap-2'>
        <img src="/assets/footer_images/title.png" alt="" className='w-fit h-full object-contain' />
        <span
          className="text-[#006719] font-['Roboto',sans-serif] text-[16px] font-bold capitalize"
        >
          QQ88 Chiến Dịch Thương Hiệu
        </span>
      </div>
      <div
        id="footer_content"
        className='w-full h-auto py-1 cursor-pointer relative'
        onClick={handleImageClick}
      >
        <img
          src="/assets/footer_images/1.png"
          alt=""
          className={`w-full h-auto object-contain transition-opacity duration-500 ${imageStates.xemthem ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
            }`}
        />
        <img
          src="/assets/footer_images/1f.png"
          alt=""
          className={`w-full h-auto object-contain transition-opacity duration-500 ${imageStates.morong ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
            }`}
        />
      </div>
      
      <div className="w-full h-auto pl-0.5 mt-2 mx-1 flex flex-col justify-start items-start gap-4">
        <div className="w-full h-fit flex justify-between items-center">
          <div className="w-[55%] h-[85px] flex flex-col items-start gap-2">
            <p className="text-[#006719] text-[18px] font-normal not-italic leading-normal">Giấy Phép</p>
            <img src="/assets/footer_images/giayphep.png" alt="" className="w-auto h-full max-h-[50px] object-contain" />
          </div>
          <div className="w-[45%] h-[85px] flex flex-col items-start gap-2">
            <p className="text-[#006719] text-[18px] font-normal not-italic leading-normal">Bảo Vệ</p>
            <img src="/assets/footer_images/baove.png" alt="" className="w-auto h-full max-h-[50px] object-contain" />
          </div>
        </div>
        <div className="w-full h-fit flex justify-between items-center">
          <div className="w-[55%] h-[55px] flex flex-col items-start gap-2">
            <p className="text-[#006719] text-[18px] font-normal not-italic leading-normal">Theo Dõi Chúng Tôi</p>
            <div className="w-full h-full max-h-[25px] object-contain flex justify-start items-center gap-2">
              <img
                src="/assets/footer_images/fb.png"
                alt=""
                className="w-auto h-full object-contain cursor-pointer"
                onClick={() => window.open("https://qq88.io/footer/fb", "_blank", "noopener,noreferrer")}
              />
              <img
                src="/assets/footer_images/ytb.png"
                alt=""
                className="w-auto h-full object-contain cursor-pointer"
                onClick={() => window.open("https://qq88.io/footer/yt", "_blank", "noopener,noreferrer")}
              />
              <img
                src="/assets/footer_images/tele.png"
                alt=""
                className="w-auto h-full object-contain cursor-pointer"
                onClick={() => window.open("https://qq88.io/footer/tele", "_blank", "noopener,noreferrer")}
              />
            </div>
          </div>
          <div className="w-[45%] h-[55px] flex flex-col items-start gap-2">
            <p className="text-[#006719] text-[18px] font-normal not-italic leading-normal">Chơi Có Trách Nhiệm</p>
            <img src="/assets/footer_images/choicotrachnhiem.png" alt="" className="w-auto h-full max-h-[25px] object-contain" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;


