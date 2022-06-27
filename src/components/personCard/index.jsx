import { useEffect, useRef } from "react";
import './index.css';
import { TeamOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Avatar } from "antd";
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
  } from "@ant-design/icons";
  const { Meta } = Card;


function PersonCard() {
  return (
    <Card
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
  );
}

export default PersonCard;
