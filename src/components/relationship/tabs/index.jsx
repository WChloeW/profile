import { Tabs } from "antd";
import "./index.css";
import RelationshipChart from "../punchChart";
import NightingaleChart from "../nightingaleChart";
import ForceLayoutChart from "../ForceLayoutChart";

const { TabPane } = Tabs;

const RelationshipTabs = () => (
  <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Tab Title 1" key="1">
        <RelationshipChart />
      </TabPane>
      <TabPane tab="Tab Title 2" key="2">
        <NightingaleChart />
      </TabPane>
      <TabPane tab="Tab Title 3" key="3">
        <ForceLayoutChart />
      </TabPane>
    </Tabs>
  </div>
);

export default RelationshipTabs;
