import React from "react";
import styles from "./AgentComission.module.scss";

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
    </div>
  );
};

export default AgentCommission;
