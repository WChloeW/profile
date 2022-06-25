//数据模拟  data.js

let testdata = {
    nodes: [
      {
        name: `陈列平`,
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

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
  }

  for (let i = 1; i < 21; i++) {
    const nameArray= ['陈列平','K,Tamada', 'Sheng,Yao', 'Xiaojie,Wang', 'Garth L,Warnock', 'Haiying,Xu', 'Dawei,Ou', 'Koji,Tamada', 'Jianqiang,Hao', 'Daniel L,Metzger', 'Ziliang,Ao', 'Gefeng,Zhu', 'Miguel F,Sanmamed', 'Ignacio,Melero', 'David L,Rimm', '王盛典', 'Houot, Roch', 'Alice L.-F,Mui', 'H,Tamura', 'Luo, Liqun', 'Levy, Ronald'];
    console.log(nameArray.length);

    testdata?.nodes?.push({
      name: nameArray[i],
      category: i < 15 ? 1 : 2,
      value: i,
      x: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 90,
      y: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 90,
      // symbolSize: i * 2,
      // fixed: true,
    });
    if (i < 15)
      testdata?.links.push({
        source: nameArray[0],
        target: nameArray[i],
      });
    else
      testdata?.links.push({
        source: nameArray[getRandomInt(5,15)],
        target: nameArray[i],
      });
  }
  console.log(testdata);
  console.log(parseInt(Math.random() * 10) + 2);
  export {testdata};
  