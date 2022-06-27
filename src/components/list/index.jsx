import { Divider, List, Typography } from "antd";
import "./index.css";

const dataDemo = [
  {
    paperName:"Association of Baseline Patient-reported Health-related Quality of Life Metrics with Outcome in Localised Prostate Cancer",
    author: "S Roy,S C Morgan",
    info: "CLINICAL ONCOLOGY, no. 1 (2022): E61-E68",
  },
  {
    paperName:
      "Association of Baseline Patient-reported Health-related Quality of Life Metrics with Outcome in Localised Prostate Cancer",
    author: "S Roy,S C Morgan",
    info: "CLINICAL ONCOLOGY, no. 1 (2022): E61-E68",
  },
  {
    paperName:
      "Association of Baseline Patient-reported Health-related Quality of Life Metrics with Outcome in Localised Prostate Cancer",
    author: "S Roy,S C Morgan",
    info: "CLINICAL ONCOLOGY, no. 1 (2022): E61-E68",
  },
];

const ListPaper = () => (
  <>
    <div className="paper-list">
      <List
        size="large"
        header={<div>论文</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={dataDemo}
        renderItem={(item) => (
          <div>
            <List.Item>
              <List.Item.Meta
                title={<a href="">{item.paperName}</a>}
                description={
                  <>
                    <div>{item.author}</div>
                    <div>{item.info}</div>
                  </>
                }
              />
            </List.Item>
          </div>
        )}
      />
    </div>
  </>
);

export default ListPaper;
