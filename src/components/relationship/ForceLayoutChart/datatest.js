//数据模拟  data.js

let testdata = {
    nodes: [
      {
        name: `a`,
        category: 0,
        value: 50,
        x: 0,
        y: 0,
      },
    ],
    links: [],
    categories: [
      {
        name: 'master',
        symbolSize: 60,
        // 控制形状
        // symbol: 'image://https://picture.djwl.top/img/8ec34cb882dc4.jpg',
      },
      {
        name: 'property',
        symbolSize: 30,
      },
      {
        name: 'item',
        symbolSize: 20,
      },
    ],
  };
  //随机生成数据
  for (let i = 1; i < 30; i++) {
    const nameArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','aa','bb','cc','vv','ee','ww','ii','yy','pp','wef','sd','rgy','weowe','sdf','h5h','xcox'];
    console.log(nameArray.length);

    testdata?.nodes?.push({
      name: nameArray[i],
      category: i < 20 ? 1 : 2,
      value: i,
      x: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 90,
      y: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 90,
      // symbolSize: i * 2,
      // fixed: true,
    });
    if (i < 20)
      testdata?.links.push({
        source: nameArray[0],
        target: nameArray[i],
      });
    else
      testdata?.links.push({
        source: nameArray[parseInt(Math.round(Math.random()*10+10))],
        target: nameArray[i],
      });
  }
  console.log(testdata);
  export {testdata};
  