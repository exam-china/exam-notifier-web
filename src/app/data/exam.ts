import * as moment from 'moment';

function getRemain(date: string) {
  var eventdate = moment(date);
  var todaysdate = moment();
  return eventdate.diff(todaysdate, 'days');
}


export interface IExam {
  name: string,
  date: string,
  remain?: number
}


const _exams : any = {
  '2023': [
    { name: '一级建造师', date: '2023-09-09' },
    { name: '注册城乡规划师', date: '2023-09-16' },
    { name: '设备监理师', date: '2023-09-23' },
    { name: '注册测绘师', date: '2023-09-23' },
    { name: '审计（初级、中级、高级）', date: '2023-09-24' },
    { name: '出版（初级、中级）', date: '2023-10-14' },
    { name: '通信（初级、中级）', date: '2023-10-14' },
    { name: '一级建筑师', date: '2023-10-14' },
    { name: '二级建筑师', date: '2023-10-14' },
    { name: '执业药师（药学、中药学）', date: '2023-10-21' },
    { name: '一级造价工程师', date: '2023-10-28' },
    { name: '中级注册安全工程师', date: '2023-10-28' },
    { name: '新闻记者职业资格', date: '2023-11-04' },
    { name: '注册土木工程师', date: '2023-11-04' },
    { name: '注册电气工程师', date: '2023-11-04' },
    { name: '注册公用设备工程师', date: '2023-11-04' },
    { name: '注册化工工程师', date: '2023-11-04' },
    { name: '注册环保工程师', date: '2023-11-04' },
    { name: '一级注册结构工程师', date: '2023-11-04' },
    { name: '二级注册结构工程师', date: '2023-11-05' },
    { name: '翻译专业资格（一、二、三级）', date: '2023-11-04' },
    { name: '一级注册消防工程师', date: '2023-11-04' },
    { name: '经济（初级、中级）', date: '2023-11-11' },
  ],
};

for(let i = 0; i < _exams['2023'].length; i++) {
  _exams["2023"][i].remain = getRemain(_exams["2023"][i].date);
}

export const exams = _exams;
