import { Divider, List, Typography } from "antd";
import "./index.css";
import PaperList from '../../data/paper_data.json';

// console.log(PaperList);

const dataDemo = [
  {
    "paperName":"Association of Baseline Patient-reported Health-related Quality of Life Metrics with Outcome in Localised Prostate Cancer",
    "author": "S Roy,S C Morgan",
    "info": "CLINICAL ONCOLOGY, no. 1 (2022): E61-E68",
    "citation": 1635,
    "id": "paper0",
    "name": "The B7 and CD28 receptor families",
    "source": "Immunology Today",
    "year": 1994,
  },
  {
    paperName:"Association of Baseline Patient-reported Health-related Quality of Life Metrics with Outcome in Localised Prostate Cancer",
    author: "S Roy,S C Morgan",
    info: "CLINICAL ONCOLOGY, no. 1 (2022): E61-E68",
  },
  {
    paperName:"Association of Baseline Patient-reported Health-related Quality of Life Metrics with Outcome in Localised Prostate Cancer",
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
        // footer={<div>Footer</div>}
        bordered
        dataSource={PaperList}
        renderItem={(item) => (
          <div>
            <List.Item>
              <List.Item.Meta
                title={<a href="http://localhost:3000/"className="paper-list-title">{item.name}</a>}
                description={
                  <>
                    <div className="paper-list-author">作者:{item.author}</div>
                    <div>来源:{item.source}-{item.year}</div>
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
