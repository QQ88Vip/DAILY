import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="footer-pc">
        <div className="footer-main">
          <div className="main-wrap">
            <div className="footer-intro-endorse">
              <div className="footer-endorse">
                <div className="footer-endorse-head">
                  <div className="footer-endorse-head-left">đối tác chính thức</div>
                  <div className="footer-endorse-head-right">đại sứ thương hiệu</div>
                </div>
                <section className="ambassador-strip">
                  <div className="ambassador-card">
                    <img
                      className="ambassador-photo"
                      src="/assets/footer_images/player_suarez.png"
                      alt="Luis Suarez"
                    />
                    <div className="logo-bar">
                      <img src="/assets/footer_images/suarez_sign.png" alt="Suarez Icon" />
                      <span className="divider"></span>
                      <img src="/assets/footer_images/logo-okvip.png" alt="OKVIP" />
                    </div>
                    <p className="caption">Luis Suarez 2025 ‑ 2026</p>
                  </div>

                  <div className="ambassador-card">
                    <img
                      className="ambassador-photo"
                      src="/assets/footer_images/player_messi.png"
                      alt="Lionel Messi"
                    />
                    <div className="logo-bar">
                      <img src="/assets/footer_images/logo-afa.png" alt="Argentina AFA" />
                      <span className="divider"></span>
                      <img src="/assets/footer_images/logo-okvip.png" alt="OKVIP" />
                    </div>
                    <p className="caption">Argentina AFA 2023 ‑ 2026</p>
                  </div>

                  <div className="ambassador-card">
                    <img
                      className="ambassador-photo"
                      src="/assets/footer_images/player_femenia.png"
                      alt="Villarreal Player"
                    />
                    <div className="logo-bar">
                      <img src="/assets/footer_images/logo-cvf.png" alt="Villarreal CF" />
                      <span className="divider"></span>
                      <img src="/assets/footer_images/logo-okvip.png" alt="OKVIP" />
                    </div>
                    <p className="caption">Villarreal CF 2023 ‑ 2026</p>
                  </div>

                  <div className="ambassador-card">
                    <img
                      className="ambassador-photo"
                      src="/assets/footer_images/player_terry.png"
                      alt="John Terry"
                    />
                    <div className="logo-bar">
                      <img src="/assets/footer_images/johnterry_sign.png" alt="Signature" />
                    </div>
                    <p className="caption">John Terry 2025 ‑ 2026</p>
                  </div>
                </section>
              </div>
            </div>
            <div className="footer-logos-icons">
              <div className="footer-logos">
                <img src="/assets/footer_images/footer-logos.png" alt="logos" />
              </div>
              <div className="footer-icons">
                <div className="icon-item">
                  <img src="/assets/footer_images/footer-icon1.png" alt="icon1" />
                </div>
                <div className="icon-item">
                  <img src="/assets/footer_images/footer-icon2.png" alt="icon2" />
                </div>
                <div className="icon-item">
                  <img src="/assets/footer_images/footer-icon3.png" alt="icon3" />
                </div>
                <div className="icon-item">
                  <img src="/assets/footer_images/footer-icon4.png" alt="icon4" />
                </div>
                <a
                  className="icon-item icon-sns"
                  href="https://qq88.io/footer/tele"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/footer_images/footer-icon5.png" alt="icon5" />
                </a>
                <a
                  className="icon-item icon-sns"
                  href="https://qq88.io/footer/fb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/footer_images/footer-icon6.png" alt="icon6" />
                </a>
                <a
                  className="icon-item icon-sns"
                  href="https://qq88.io/footer/yt"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/footer_images/footer-icon7.png" alt="icon7" />
                </a>
              </div>
            </div>
            <div className="footer-linkslist">
              <a href="https://qq88.io/dieukhoanvadieukien">Điều Khoản Và Điều Kiện</a>
              <div className="hr"></div>
              <a href="#">Về QQ88</a>
              <div className="hr"></div>
              <a href="#">Chơi Có Trách Nhiệm</a>
              <div className="hr"></div>
              <a href="#">Miễn Trách Nhiệm</a>
              <div className="hr"></div>
              <a href="#">Quyền Riêng Tư</a>
              <div className="hr"></div>
              <a href="#">Câu Hỏi Thường Gặp</a>
            </div>
            <div className="footer-copy">Copyright © QQ88 Reserved</div>
          </div>
        </div>
      </div>

      <div className="footer-mobile">
        <div className="mb-wrapper">
          <h2 className="section-title">Đại sứ thương hiệu</h2>

          <div className="partner-line">
            <div>
              <p className="partner-info">John Terry</p>
              <p className="partner-info">Năm 2025 - 2026</p>
            </div>
            <div className="partner-sign">
              <img src="/assets/footer_images/johnterry_sign.png" alt="John Terry" />
            </div>
          </div>

          <div className="news-chip">
            <img src="/assets/footer_images/title_campain.png" alt="Campain" />
          </div>

          <article className="news-card">
            <div className="news-content">
              <img src="/assets/footer_images/terry_qq88.png" alt="John Terry" />
              <p className="news-desc">
                QQ88 chính thức hợp tác cùng huyền thoại bóng đá John Terry trong vai trò Đại Sứ
                Thương Hiệu Toàn Cầu giai đoạn 2025 - 2026.
                <a href="#" className="news-more">
                  Xem thêm
                </a>
              </p>
            </div>
            <div className="news-thumb">
              <img src="/assets/footer_images/terry_sign.png" alt="John Terry" />
            </div>
          </article>

          <h2 className="section-title">Đối Tác Chính Thức</h2>

          <img className="ba-ong" src="/assets/footer_images/3ong.png" alt="Doi tac chinh thuc" />

          <div className="partner-line">
            <div>
              <p className="partner-info">
                Luis Suárez &amp; OKVIP
                <br />
                Năm 2025 - 2026
              </p>
            </div>
            <div className="partner-logos">
              <img src="/assets/footer_images/suarez_sign.png" alt="Suarez badge" />
              <div className="divider-vert"></div>
              <img src="/assets/footer_images/logo-okvip.png" alt="OKVIP" />
            </div>
          </div>

          <div className="partner-line">
            <div>
              <p className="partner-info">
                Argentina AFA &amp; OKVIP
                <br />
                Năm 2023 - 2026
              </p>
            </div>
            <div className="partner-logos">
              <img src="/assets/footer_images/logo-afa.png" alt="AFA" />
              <div className="divider-vert"></div>
              <img src="/assets/footer_images/logo-okvip.png" alt="OKVIP" />
            </div>
          </div>

          <div className="partner-line">
            <div>
              <p className="partner-info">
                Villarreal CF &amp; OKVIP
                <br />
                Năm 2023 - 2026
              </p>
            </div>
            <div className="partner-logos">
              <img src="/assets/footer_images/logo-cvf.png" alt="Villarreal" />
              <div className="divider-vert"></div>
              <img src="/assets/footer_images/logo-okvip.png" alt="OKVIP" />
            </div>
          </div>

          <div className="news-chip">
            <img src="/assets/footer_images/title_partner.png" alt="Partner" />
          </div>

          <article className="news-card">
            <div className="news-content">
              <h3 className="news-title">Luis Suárez &amp; OKVIP</h3>
              <p className="news-desc">
                Luis Suárez, huyền thoại bóng đá với sự nghiệp rực rỡ cùng Liverpool và Barcelona,
                đã chính thức trở thành đại sứ thương hiệu...
                <a href="#" className="news-more">
                  Xem thêm
                </a>
              </p>
            </div>
            <div className="news-thumb">
              <img src="/assets/footer_images/sign_suarez.png" alt="Suarez OKVIP" />
            </div>
          </article>

          <article className="news-card">
            <div className="news-content">
              <h3 className="news-title">Argentina AFA &amp; OKVIP</h3>
              <p className="news-desc">
                Hiệp hội Bóng đá Argentina (AFA) với nhiều danh hiệu World Cup và Copa América đã
                chính thức hợp tác...
                <a href="#" className="news-more">
                  Xem thêm
                </a>
              </p>
            </div>
            <div className="news-thumb">
              <img src="/assets/footer_images/sign_afa.png" alt="Argentina OKVIP" />
            </div>
          </article>

          <article className="news-card">
            <div className="news-content">
              <h3 className="news-title">Villarreal CF &amp; OKVIP</h3>
              <p className="news-desc">
                Villarreal CF, đội bóng hàng đầu La Liga, nổi tiếng với lối chơi kỹ thuật và tinh
                thần thi đấu kiên cường...
                <a href="#" className="news-more">
                  Xem thêm
                </a>
              </p>
            </div>
            <div className="news-thumb">
              <img src="/assets/footer_images/sign_villa.png" alt="Villarreal OKVIP" />
            </div>
          </article>
        </div>

        <div className="footer-logos">
          <div className="footer-col-2">
            <div className="footer-giayphep">
              <h3 className="footer-title">giấy phép</h3>
              <img
                src="/assets/footer_images/logo-giayphep1.png"
                alt="giayphep-logo"
                loading="lazy"
              />
              <img
                src="/assets/footer_images/logo-giayphep2.png"
                alt="giayphep-logo"
                loading="lazy"
              />
            </div>
            <div className="footer-baove">
              <h3 className="footer-title">bảo vệ</h3>
              <img src="/assets/footer_images/logo-baove1.png" alt="baove-logo" loading="lazy" />
              <img src="/assets/footer_images/logo-baove2.png" alt="baove-logo" loading="lazy" />
            </div>
          </div>
          <div className="footer-col-2">
            <div className="footer-sns">
              <h3 className="footer-title">Theo Dõi Chúng Tôi</h3>
              <div className="sns-list">
                <a href="https://qq88.io/footer/fb" target="_blank" rel="noreferrer">
                  <img src="/assets/footer_images/sns-fb.png" alt="Facebook" loading="lazy" />
                </a>
                <a href="https://qq88.io/footer/yt" target="_blank" rel="noreferrer">
                  <img src="/assets/footer_images/sns-yt.png" alt="Youtube" loading="lazy" />
                </a>
                <a href="https://qq88.io/footer/tele" target="_blank" rel="noreferrer">
                  <img src="/assets/footer_images/sns-tg.png" alt="Telegram" loading="lazy" />
                </a>
              </div>
            </div>
            <div className="footer-choi">
              <h3 className="footer-title">chơi có trách nhiệm</h3>
              <div className="choi-list">
                <img src="/assets/footer_images/logo-choi1.png" alt="choi logo" loading="lazy" />
                <img src="/assets/footer_images/logo-choi2.png" alt="choi logo" loading="lazy" />
                <img src="/assets/footer_images/logo-choi3.png" alt="choi logo" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
