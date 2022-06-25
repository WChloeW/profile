import React from "react";
import { Button, Card, Col, Row, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./App.css";
import PaperChart from './components/paper';
import RelationshipChart from './components/relationship';
import RelationshipTabs from "./components/relationship/tabs";

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
        </Col>
        <Col span={11}>
          <Card title="Paper" bordered={false}>
            <PaperChart/>
          </Card>
        </Col>
        <Col span={8}>
          {/* <Card title="relationship" bordered={false}> */}
            <RelationshipTabs/>
          {/* </Card> */}
        </Col>
      </Row>
    </div>
  </div>
);

export default App;
