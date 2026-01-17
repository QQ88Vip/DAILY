import React from "react";
import styles from "./DistributeCommission.module.scss";

const DistributeCommission: React.FC = () => {
  return (
    <div className={styles.rootBenefit}>
      <div className={styles.containerBenefit}>
        <h2 className={styles.title}>CÁCH THỨC PHÁT HOA HỒNG VÀ TIỀN THƯỞNG</h2>

        <div className={styles.divider}>
          <img src="/assets/content_title.png" alt="title" />
        </div>

        <div className={styles.content}>
          <p>✦ Hoa hồng và tiền thưởng hội viên mới sẽ được phát trước ngày 10 mỗi tháng. </p>
          <p>
            ✦ Hoa hồng và tiền thưởng đại lý sẽ được thanh toán trực tiếp vào ví số dư trong tài
            khoản đại lý. Sau khi hệ thống kết toán, đại lý có thể tạo lệnh rút tiền qua tài khoản
            ngân hàng, ví điện tử đã liên kết.
          </p>
          <p>
            ✦ Nếu trong ba tháng liên tiếp, cả 3 tháng đó đại lý đều không đạt được 3 khách mới hợp
            lệ trên 1 tháng công ty sẽ đồng loạt điều chỉnh tỷ lệ hoa hồng xuống còn 20%.Tỷ lệ hoa
            hồng sẽ tự động khôi phục về mức bình thường khi đại lý đạt được 3 thành viên mới đủ
            điều kiện trong bất kỳ tháng nào sau đó
          </p>
        </div>
      </div>
    </div>
  );
};

export default DistributeCommission;
