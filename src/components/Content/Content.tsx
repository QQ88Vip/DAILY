import React from "react";
import AgentCommission from "../AgentCommission/AgentComission";
import DealerBenefit from "../Benefit/DealerBenefit";
import CommissionCalculation from "../CommissionCalculation/CommissionCalculation";
import ContentOther from "../ContentOther/ContentOther";
import Cooperation from "../Cooperation/Cooperation";
import DistributeCommission from "../DistributeCommission/DistributeCommission";
import MemberBonus from "../MemberBonus/MemberBonus";
import "./Content.scss";

const Content: React.FC = () => {
  return (
    <section className="content">
      <a className="content__home__btn" href="https://www.qq8879.com/">
        <img src="/assets/home-official.png" alt="Home official" />
      </a>
      <div className="content_dk_dn">
        <button
          className="btn login"
          onClick={() =>
            window.open("https://qq88.email/dailyngoai", "_blank", "noopener,noreferrer")
          }
        >
          ĐĂNG NHẬP
        </button>
        <button
          className="btn register"
          onClick={() =>
            window.open("https://qq88.email/dailyngoai", "_blank", "noopener,noreferrer")
          }
        >
          ĐĂNG KÝ
        </button>
      </div>
      <Cooperation />
      <ContentOther />
      {/* <UsdtGuide /> */}
      <DealerBenefit />
      <AgentCommission />
      <MemberBonus />
      <DistributeCommission />
      <CommissionCalculation />
    </section>
  );
};

export default Content;
