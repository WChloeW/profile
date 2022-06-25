//数据模拟  data.js

let testdata = {
  nodes: [
    {
      name: `node0`,
      category: 0,
      value: 100,
      x: 0,
      y: 0,
    },
  ],
  links: [],
  categories: [
    {
      name: 'master',
      symbolSize: 100,
      // 控制形状
      // symbol: 'image://https://picture.djwl.top/img/8ec34cb882dc4.jpg',
    },
    {
      name: 'property',
      symbolSize: 50,
    },
    {
      name: 'item',
      symbolSize: 20,
    },
  ],
};
//随机生成数据
for (let i = 1; i < 30; i++) {
  testdata?.nodes?.push({
    name: `node${i}`,
    category: i < 5 ? 1 : 2,
    value: i * 100,
    x: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 100,
    y: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 100,
    // symbolSize: i * 2,
    // fixed: true,
  });
  if (i < 5)
    testdata?.links.push({
      source: `node0`,
      target: `node${i}`,
    });
  else
    testdata?.links.push({
      source: `node${parseInt(Math.random() * 4) + 1}`,
      target: `node${i}`,
    });
}
export {testdata};
