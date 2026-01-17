import styles from "./MemberBonus.module.scss";

const MemberBonus = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>TIỀN THƯỞNG PHÁT TRIỂN HỘI VIÊN MỚI</h2>
      <div className={styles.divider}>
        <img src="/assets/content_title.png" alt="title" />
      </div>
      <p className={styles.description}>
        Tất cả đại lý trong tháng chỉ cần có mỗi một hội viên mới hợp lệ sẽ được nhận thưởng tiền
        thưởng phát triển hội viên mới, mỗi hội viên mới hợp lệ thưởng 200 điểm, không giới hạn số
        tiền.
      </p>

      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div className={styles.cell}>ĐỐI TƯỢNG</div>
          <div className={styles.cell}>HỘI VIÊN MỚI HỢP LỆ</div>
          <div className={styles.cell}>TIỀN THƯỞNG</div>
          <div className={styles.cell}>TỐI ĐA</div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.cell}>Tất cả đại lý hợp tác</div>
          <div className={styles.cell}>1+</div>
          <div className={styles.cell}>200 điểm/ 01 hội viên</div>
          <div className={styles.cell}>Không giới hạn</div>
        </div>
      </div>

      <div className={styles.notes}>
        <p>
          ✦ <strong>Ví dụ</strong> đại lý trong tháng có 10 hội viên mới hợp lệ, sẽ nhận được tiền
          thưởng là 10*200 điểm = 2,000 điểm (2 triệu vnd).
        </p>
        <p>
          ✦ <strong>Hội viên mới hợp lệ:</strong> hội viên mới nạp đầu trong tháng, có tích luỹ nạp
          tiền ≥ 1,000 điểm, cược hợp lệ ≥ 3,000 điểm (dựa vào đánh giá tổng hợp IP, tính hoạt động
          và tính nạp lại phê duyệt).
        </p>
        <p>
          ✦ <strong>Chú ý:</strong>
        </p>
        <p className={styles.bold}>
          – Đại lý Google SEO/ADS chạy từ khoá nội bộ của công ty{" "}
          <strong>không được tham gia</strong> chương trình tiền thưởng hội viên mới.
        </p>
        <p className={styles.bold}>– Chương trình này không áp dụng với sản phẩm xổ số.</p>
      </div>
    </div>
  );
};

export default MemberBonus;
