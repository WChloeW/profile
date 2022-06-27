import React from "react";
import { Button, Card, Col, Row, Avatar } from "antd";
import "./App.css";
import PaperChart from "./components/paper";
import RelationshipTabs from "./components/relationship/tabs";
import ListPaper from "./components/list";
import RadarChart from "./components/summary";
import PersonProfile from "./components/profile";
import PersonCard from "./components/personCard";

const App = () => (
  <div className="App">
    <div className="site-card-border-less-wrapper">
      <Row gutter={16}>
        <Col span={5}>
          <PersonCard />
          <Button type="primary" block className="profile-card-follow-button">
            Follow
          </Button>
          <PersonProfile />
        </Col>
        <Col span={11}>
          <RelationshipTabs />
          <ListPaper />
        </Col>
        <Col span={8}>
          <Card title="研究兴趣" bordered={false} className='paper-chart'>
            <PaperChart />
          </Card>
          <RadarChart />
        </Col>
      </Row>
    </div>
  </div>
);

export default App;
