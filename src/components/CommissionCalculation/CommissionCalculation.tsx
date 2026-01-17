import React from "react";
import styles from "./CommissionCalculation.module.scss";

const CommissionCalculation: React.FC = () => {
  return (
    <div className={styles.rootBenefit}>
      <div className={styles.containerBenefit}>
        <h2 className={styles.title}>TÍNH TOÁN HOA HỒNG VÀ ĐIỀU KHOẢN</h2>

        <div className={styles.divider}>
          <img src="/assets/content_title.png" alt="title" />
        </div>

        <div className={styles.content}>
          <p>✦ Công thức tính hoa hồng: Lợi nhuận ròng x Tỷ lệ hoa hồng.</p>
          <p>
            ✦ Nếu đại lý có lợi nhuận dương thì sẽ trừ vào lợi nhuận các tháng sau cho tới hết lợi
            nhuận dương
          </p>
          <p>
            ✦ Hội viên lạm dụng, nhiều tài khoản, chạy chỉ tiêu, làm giả số liệu sẽ không được tính
            là hội viên hợp lệ.
          </p>
          <p>
            ✦ Thành viên không được tạo tài khoản game của mình dưới link đại lý của mình, nếu vi
            phạm sẽ kéo tài khoản đó ra khỏi đường link đại lý, nếu nghiêm trọng có thể chấm dứt hợp
            tác.
          </p>
          <p>
            ✦ Công ty có quyền đơn phương chấm dứt hợp tác nếu phát hiện đại lý sử dụng hành vi lạm
            dụng để trục lợi hoa hồng không chính đáng.
          </p>
          <p>
            ✦ Nếu phát sinh vấn đề không đồng nhất trong cách hiểu về chương trình này, công ty giữ
            nguyên quyền bảo lưu quyết định cuối cùng trong bất kỳ trường hợp nào.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommissionCalculation;
