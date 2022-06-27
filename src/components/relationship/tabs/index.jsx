import { Tabs } from "antd";
import "./index.css";
import RadialTree from "../RadialTreeChart";
import NightingaleChart from "../nightingaleChart";
import ForceLayoutChart from "../ForceLayoutChart";

const { TabPane } = Tabs;

const RelationshipTabs = () => (
  <div className="card-container">
    <Tabs type="card">
      <TabPane tab="关系图" key="1">
        <ForceLayoutChart />
      </TabPane>
      <TabPane tab="径向树状图" key="2">
        <RadialTree />
      </TabPane>
      <TabPane tab="南丁格尔玫瑰图" key="3">
        <NightingaleChart />
      </TabPane>
    </Tabs>
  </div>
);

export default RelationshipTabs;
