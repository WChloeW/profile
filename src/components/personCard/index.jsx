import { useEffect, useRef } from "react";
import "./index.css";
import { TeamOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import img from "../../pics/person0.png";
const { Meta } = Card;

function PersonCard() {
  return (
    <Card
      cover={<img alt="Carl H.June" src={img} />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="Carl H.June"
        description="Carl H. June教授为美国艺术与科学院院士、美国科学院院士，是CAR-T细胞疗法创始人之一。"
      />
    </Card>
  );
}

export default PersonCard;
