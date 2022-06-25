import React, { Component, useState, useEffect } from "react";
import * as echarts from "echarts";
import { testdata } from "./data";

export default function Forcemap() {
  const [datasource, setDatasource] = useState(testdata);
  // 控制节点的折叠
  useEffect(() => {
    force = echarts.init(document.getElementById("force"));
    // 小的不显示文字
    // datasource.nodes.forEach(function (node) {
    //   node.label = {
    //     show: node.symbolSize > 30,
    //   };
    // });
    // 点击折叠
    // 使用闭包储存折叠起来的数据
    let folda = fold();
    force.on("click", function (params) {
      // console.log(params);
      // 是节点层级为2
      if (params.dataType === "node" && params.data.category === 1) {
        folda(params);
      }
    });
    // 应用配置信息
    force.setOption(mapoptions);
  }, []);
  let force = null;
  const mapoptions = {
    // 标题
    title: {
      text: "关系图",
      subtext: "Default layout",
      top: "bottom",
      left: "right",
    },
    // hover显示内容
    tooltip: {
      trigger: "item",
    },
    // 极坐标系配置
    // polar: {},
    // angleAxis: {},
    // radiusAxis: {},

    //每种颜色代表的数据
    // legend: [
    //   {
    //     // selectedMode: 'single',
    //     data: mapdata.categories.map(function (a) {
    //       return a.name;
    //     }),
    //   },
    // ],
    // selectMode: 'single',
    animationDuration: 1500,
    animationEasingUpdate: "quinticInOut",
    series: [
      {
        name: "个人数据",
        type: "graph",
        layout: "force",
        // 极坐标系
        // coordinateSystem: 'polar',
        data: datasource.nodes,
        links: datasource.links,
        categories: datasource.categories,
        // center: [0, 0],
        roam: false,
        label: {
          show: true,
          position: "right",
          formatter: "{b}",
          color: "black",
          // backgroundColor: {
          //   image: 'https://picture.djwl.top/img/8ec34cb882dc4.jpg',
          // },
          // width: '30',
          // overflow: 'truncate',
        },
        lineStyle: {
          color: "source",
          curveness: 0,
        },
        // itemStyle: {
        //   color: 'red',
        //   borderColor: 'red',
        // },
        // emphasis: {
        //   focus: 'adjacency',
        //   lineStyle: {
        //     width: 10,
        //   },
        // },
        // hover提示框
        // tooltip: {
        //   extraCssText:
        //     'width:200px;height:200px;background:white;color:black;padding:30px',
        // },

        force: {
          // initLayout: '',
          gravity: 0.2,
          repulsion: 50,
          // edgeLength: 100,
        },
      },
    ],
  };
  const fold = () => {
    // 储存隐藏的节点
    let hidenode = {};
    return function zhedie(params) {
      // console.log(params.data.name);
      let data = datasource;
      // 判断节点是否隐藏
      if (hidenode[params.data.name] === undefined) {
        hidenode[params.data.name] = [];
        let nodename = [];
        // 获取需要折叠的节点
        data.links.forEach((item) => {
          if (item.source === params.data.name) {
            nodename.push(item.target);
          }
        });
        // 删除需要隐藏的节点数据
        nodename.forEach((item) => {
          for (let i = 0; i < data.nodes.length; i++) {
            if (data.nodes[i].name === item) {
              hidenode[params.data.name].push(data.nodes[i]);
              data.nodes.splice(i, 1);
              i = i - 1;
            }
          }
        });
      }
      // 还原节点
      else {
        hidenode[params.data.name].forEach((item) => {
          data.nodes.push(item);
        });
        delete hidenode[params.data.name];
      }
      // 显示被隐藏的节点
      // console.log(hidenode);
      mapoptions.series[0].data = data.nodes;
      force.setOption(mapoptions);
    };
  };

  return <div id="force" style={{ height: "500px" }}>123</div>;
}
