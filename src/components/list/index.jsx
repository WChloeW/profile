import { Divider, List, Typography } from "antd";
import './index.css';
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const ListPaper = () => (
  <>
    <div className="paper-list">
      <List
        size="large"
        header={<div>Paper</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  </>
);

export default ListPaper;
