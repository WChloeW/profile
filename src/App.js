import React from "react";
import { Button, Card, Col, Row, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./App.css";
import PaperChart from "./components/paper";
import RelationshipTabs from "./components/relationship/tabs";
import ListPaper from "./components/list";
import RaderChart from "./components/summary";
import { TeamOutlined } from "@ant-design/icons";

const { Meta } = Card;

const App = () => (
  <div className="App">
    <div className="site-card-border-less-wrapper">
      <Row gutter={16}>
        <Col span={5}>
          <Card
            // style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
          <Button type="primary" block className="profile-card-follow-button">
            Follow
          </Button>
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
                                <span>test</span>
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
                    <span>test</span>
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
                    <span>test</span>
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
                  Dr. Herbst’s primary mission is the enhanced integration of
                  clinical, laboratory, and research programs to bring new
                  treatments to cancer patients. He has led the Phase I
                  development of several of the new generation of targeted
                  agents for non-small cell lung cancer (NSCLC), including
                  gefitinib, erlotinib, cetuximab, and bevacizumab. More
                  recently, he participated in the successful registration of
                  pembrolizumab for the treatment of advanced non-small cell
                  lung cancer, following the successful Yale-led KEYNOTE 10
                  study of the immune therapy drug commonly used to treat other
                  cancers. He was co-leader for the BATTLE-1 clinical trial
                  program, co-leads the subsequent BATTLE-2 clinical trial
                  program, and served as a Co-program Leader of the
                  Developmental Therapeutics Program for the YCC Support Grant.
                  Dr. Herbst’s laboratory work is focused on immunotherapy
                  angiogenesis; dual epidermal growth factor receptor
                  (EGFR)/vascular endothelial growth factor receptor (VEGFR)
                  inhibition in NSCLC, and targeting KRAS-activated pathways.
                  More recently, he has explored predictive biomarkers for the
                  use of immunotherapy agents. This work has been translated
                  from the preclinical to clinical setting in multiple Phase II
                  and III studies which he has led.
                </div>
              </div>
            </section>
          </div>
        </Col>
        <Col span={11}>
          <Card title="Paper" bordered={false}>
            <PaperChart />
          </Card>
          <ListPaper />
        </Col>
        <Col span={8}>
          {/* <Card title="relationship" bordered={false}> */}
          <RelationshipTabs />
          <RaderChart />
          {/* </Card> */}
        </Col>
      </Row>
    </div>
  </div>
);

export default App;
