import React from "react";
import styles from "./DealerBenefit.module.scss";

const DealerBenefit: React.FC = () => {
  return (
    <div className={styles.rootBenefit}>
      <div className="content__title">
        <img src="/assets/title_chedo.png" />
        <div className="content__line">
          <div className="content__line__top"></div>
        </div>
      </div>
      <div className={styles.containerBenefit}>
        <h2 className={styles.title}>CHẾ ĐỘ ĐÃI NGỘ ĐẠI LÝ QQ88</h2>

        <div className={styles.divider}>
          <img src="/assets/content_title.png" alt="title" />
        </div>

        <div className={styles.content}>
          <p>
            <strong>THƯ NGỎ:</strong> Chương trình đại lý của chúng tôi là một hệ thống thúc đẩy thị
            trường chuyên nghiệp được sử dụng rộng rãi bởi cá nhân cũng như công ty với mục đích
            quảng bá công ty cá cược hàng đầu đến với khách hàng, công ty tin tưởng vào sự thành
            công tốt đẹp trong quá trình hợp tác của công ty và quý đối tác.
          </p>

          <p className={styles.unit}>
            <strong>Đơn vị tính:</strong> điểm
            <br />
            <strong>Quy ước:</strong> 1 điểm = 1,000 vnd
          </p>
        </div>
      </div>
    </div>
  );
};

export default DealerBenefit;
