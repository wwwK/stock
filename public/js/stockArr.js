/*
  从2014年7月开始恢复股票池的发布。
  2015年4月暂停，10月份继续发布。
*/

var historyArr = new Array (
/*  达成日期     股票代码  股票名称  初始价格  目标价格  达成价  累计涨幅%  行业分类   关注日期     总计天数  */
  ["2015-12-21", "002327", "富安娜", "10.94", "12.00", "12.41", "13.44", "纺织和服装", "2015-10-14", "69"],
  ["2015-11-20", "000619", "海螺型材", "12.80", "14.80", "15.82", "23.59", "建筑和工程", "2015-10-26", "26"],
  ["2015-11-20", "002631", "德尔未来", "20.90", "26.00", "26.71", "27.80", "家用轻工", "2015-10-26", "26"],
  ["2015-11-11", "600720", "祁连山", "7.58", "8.50", "8.56", "12.93", "非金属类建材", "2015-10-29", "14"],
  ["2015-11-09", "600449", "宁夏建材", "9.61", "11.00", "11.25", "17.07", "非金属类建材", "2015-10-28", "13"],
  ["2015-11-06", "300078", "思创医惠", "35.09", "37.97", "40.07", "14.19", "电子行业", "2015-10-23", "15"],
  ["2015-11-04", "603766", "隆鑫通用", "17.14", "21.00", "21.17", "23.51", "非汽车交运", "2015-10-11", "25"],
  ["2015-10-17", "300465", "高伟达", "62.27", "68.00", "70.97", "13.97", "计算机行业", "2015-10-12", "5"]
);

//指数数组与股票数组为二维数组，可以用统一的接口来调用
var indexArr = new Array(["0000001"],["1399001"],["1399006"],["1399300"]);

var hqArr = new Array(
/* 股票代码   所属行业     关注日期   前日收盘价   目标价    评级 */
  ["1300227", "电子行业", "2016-02-17", "24.63",  "30.00",  "买入"],
  ["0603808", "纺织和服装", "2016-02-17", "40.39",  "60.00",  "买入"],
  ["1002572", "造纸印刷轻工", "2016-01-29", "37.40",  "49.70",  "买入"],
  ["1300180", "基础化工", "2016-01-29", "11.13",  "15.20",  "买入"],
  ["1000555", "电子行业", "2016-01-19", "30.75",  "44.50",  "买入"],
  ["1002229", "造纸印刷轻工", "2016-01-19", "18.86",  "23.00",  "增持"],
  ["1002402", "电子行业", "2016-01-19", "19.11",  "36.00",  "买入"],
  ["1002131", "机械行业", "2016-01-08", "17.01",  "28.00",  "买入"],
  ["1300202", "计算机行业", "2015-12-23", "35.70",  "50.00",  "增持"],
  ["1300387", "化学制品", "2015-12-23", "30.66",  "35.00",  "增持"],
  ["0603015", "电力设备与新能源", "2015-12-23", "36.13",  "40.00",  "增持"],
  ["0600176", "基础化工", "2015-12-23", "26.89",  "34.00",  "买入"],
  ["1002406", "汽车和汽车零部件", "2015-12-23", "12.25",  "17.00",  "买入"],
  ["0600718", "计算机行业", "2015-12-23", "30.97",  "35.00",  "买入"],
  ["1002565", "造纸印刷轻工", "2015-12-23", "13.00",  "15.00",  "买入"],
  ["1002429", "家电行业", "2015-12-15", "13.38",  "15.30",  "买入"],
  ["1300271", "计算机应用", "2015-12-15", "47.10",  "63.60",  "买入"],
  ["0600715", "汽车和汽车零部件", "2015-12-04", "32.54",  "48.00",  "买入"],
  ["1002573", "环保工程 ", "2015-12-04", "22.92",  "31.58",  "买入"],
  ["1002126", "汽车和汽车零部件", "2015-11-27", "16.21",  "22.60",  "买入"],
  ["1300145", "机械行业", "2015-11-12", "45.49",  "57.62",  "买入"],
  ["0603766", "非汽车交运", "2015-11-05", "21.17",  "30.00",  "买入"],
  ["0600588", "计算机行业", "2015-11-02", "29.97",  "40.00",  "买入"],
  ["1002303", "造纸印刷轻工", "2015-11-02", "11.68",  "16.20",  "买入"],
  ["1000789", "非金属类建材", "2015-11-02", "7.06",  "10.00",  "买入"],
  ["1002658", "仪器仪表", "2015-10-28", "26.46",  "30.90",  "买入"],
  ["0600486", "基础化工", "2015-10-28", "26.76",  "38.10",  "买入"],
  ["0600699", "基础化工", "2015-10-28", "33.30",  "40.00",  "买入"],
  ["1002250", "基础化工", "2015-10-27", "18.28",  "25.68",  "买入"],
  ["1300422", "环保工程", "2015-10-27", "44.61",  "58.10",  "买入"],
  ["0600585", "非金属类建材", "2015-10-27", "18.17",  "25.00",  "买入"],
  ["1002271", "非金属类建材", "2015-10-27", "18.55",  "25.00",  "买入"],
  ["1002029", "纺织和服装", "2015-10-27", "12.38",  "15.00",  "买入"],
  ["1002372", "基础化工", "2015-10-26", "17.39",  "21.00",  "买入"],
  ["1002042", "纺织和服装", "2015-10-26", "9.81",  "15.00",  "买入"],
  ["1000885", "非金属类建材", "2015-10-26", "20.05",  "23.00",  "买入"],
  ["1002521", "造纸印刷轻工", "2015-10-25", "10.69",  "13.80",  "买入"],
  ["1300005", "纺织和服装", "2015-10-25", "20.23",  "30.00",  "买入"],
  ["1002448", "汽车和汽车零部件", "2015-10-22", "10.09",  "18.00",  "买入"],
  ["0600801", "非金属类建材", "2015-10-21", "8.30",  "12.00",  "买入"],
  ["0600398", "纺织和服装", "2015-10-20", "14.95",  "20.00",  "买入"],
  ["1000877", "非金属类建材", "2015-10-15", "8.33",  "11.00",  "买入"],
  ["0600418", "汽车和汽车零部件", "2015-10-12", "14.20",  "21.00",  "买入"],
  ["1000672", "建筑材料", "2015-10-07", "7.91",  "12.10",  "增持"]
);

