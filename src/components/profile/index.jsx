import { useEffect, useRef } from "react";
import './index.css';
import { TeamOutlined } from "@ant-design/icons";


function PersonProfile() {


  return (
    <div className="all_info">
    <div className="a-aminer-core-profile-c-profile-info-new-profile_info profile-info container-wrong">
      <div className="info_zone">
        <div className="expert_basic_info">
          <div className="expert_basic_info_left">
            <div className="a-aminer-core-profile-c-profile-base-info-profile_base_info container-wrong">
              <section className="a-aminer-core-profile-c-resume-card-resumeCard">
                <div className="card_title">
                  <span className="title_text">
                    <span>个人信息</span>
                  </span>
                  <div className="title_right"></div>
                </div>
                <div className="card_content">
                  <div className="expert_info_content">
                    <p className="info_line">
                      <TeamOutlined />
                      <span className="baseInfo">教授</span>
                    </p>
                    <p className="info_line">
                      <TeamOutlined />
                      <span className="baseInfo">
                        Yale School of Medicine/Yale Cancer
                        Center/Smilow Cancer Hospital
                      </span>
                    </p>
                    <div className="should_login">
                      <p className="should_login_tip">
                        {/* <span>test</span> */}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="edit_profile"></div>
          </div>
        </div>
      </div>
    </div>
    <section className="a-aminer-core-profile-c-resume-card-resumeCard">
      <div className="card_title">
        <span className="title_text">工作经历</span>
        <div className="title_right"></div>
      </div>
      <div className="card_content">
        <div className="a-aminer-core-profile-c-resume-resume-education">
          <span className="a-aminer-core-profile-c-resume-resume-login">
            <span>他现担任宾夕法尼亚大学佩雷尔曼医学院终身教授、帕克癌症免疫治疗研究所所长、细胞免疫治疗中心主任。</span>
          </span>
        </div>
      </div>
    </section>
    <section className="a-aminer-core-profile-c-resume-card-resumeCard">
      <div className="card_title">
        <span className="title_text">教育背景</span>
        <div className="title_right"></div>
      </div>
      <div className="card_content">
        <div className="a-aminer-core-profile-c-resume-resume-education">
          <span className="a-aminer-core-profile-c-resume-resume-login">
            <span>贝勒医学院</span>
          </span>
        </div>
      </div>
    </section>
    <section className="a-aminer-core-profile-c-resume-card-resumeCard">
      <div className="card_title">
        <span className="title_text">个人简介</span>
        <div className="title_right"></div>
      </div>
      <div className="card_content">
        <div className="a-aminer-core-profile-c-resume-resume-bio">
        Carl H. June教授为美国艺术与科学院院士、美国科学院院士，是CAR-T细胞疗法创始人之一，因研究过继免疫疗法用于癌症和HIV感染的潜在用途而闻名世界，被评为“全球生物制药界最有影响力的科学家”。他现担任宾夕法尼亚大学佩雷尔曼医学院终身教授、帕克癌症免疫治疗研究所所长、细胞免疫治疗中心主任。

        </div>
      </div>
    </section>
  </div>
  );
}

export default PersonProfile;
