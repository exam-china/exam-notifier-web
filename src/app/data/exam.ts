import * as moment from 'moment';

function getRemain(date: string) {
  var eventdate = moment(date);
  var todaysdate = moment();
  return eventdate.diff(todaysdate, 'days');
}

export interface IExam {
  name: string;
  date: string;
  remain?: number;
  subscribed?: boolean;
}

const yijian = [
  {
    name: '建设工程经济',
    cover: "covers/yijian/2023/gcjj.png",
    date: '2023-09-09',
    start: '09:00',
    end: '11:00',
  },
  {
    name: '建设工程法规及相关知识',
    cover: "covers/yijian/2023/gcfg.jpeg",
    date: '2023-09-09',
    start: '14:00',
    end: '17:00',
  },
  {
    name: '建设工程项目管理',
    date: '2023-09-10',
    start: '09:00',
    end: '12:00',
  },
  {
    name: '建设工程法规及相关知识',
    date: '2023-09-10',
    start: '14:00',
    end: '18:00',
  },
];

const _exams: any = {
  '2023': [
    { name: '一级建造师', date: '2023-09-09' },
    { name: '注册城乡规划师', date: '2023-09-16' },
    { name: '设备监理师', date: '2023-09-23' },
    { name: '注册测绘师', date: '2023-09-23' },
    // { name: '审计（初级、中级、高级）', date: '2023-09-24' },
    { name: '审计', date: '2023-09-24' },
    { name: '出版（初级、中级）', date: '2023-10-14' },
    { name: '通信（初级、中级）', date: '2023-10-14' },
    { name: '一级建筑师', date: '2023-10-14' },
    { name: '二级建筑师', date: '2023-10-14' },
    // { name: '执业药师（药学、中药学）', date: '2023-10-21' },
    { name: '执业药师', date: '2023-10-21' },
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
    // { name: '翻译专业资格（一、二、三级）', date: '2023-11-04' },
    { name: '翻译专业资格', date: '2023-11-04' },
    { name: '一级注册消防工程师', date: '2023-11-04' },
    // { name: '经济（初级、中级）', date: '2023-11-11' },
    { name: '经济', date: '2023-11-11' },
  ],
};

export class ExamData {
  static key: string = 'exams';
  data: any;
  subscribedExams: IExam[] = [];
  constructor() {
    const json = localStorage.getItem(ExamData.key);
    if (json) {
      this.data = JSON.parse(json);
    } else {
      this.data = _exams['2023'];
    }
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].remain = getRemain(this.data[i].date);
      if (this.data[i].subscribed) {
        this.subscribedExams.push(this.data[i]);
      } else {
        this.data[i].subscribed = false;
      }
    }
  }

  recaculateSubscription() {
    this.subscribedExams = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].subscribed) {
        this.subscribedExams.push(this.data[i]);
      } else {
        this.data[i].subscribed = false;
      }
    }
    return this.subscribedExams;
  }

  save() {
    localStorage.setItem(ExamData.key, JSON.stringify(this.data));
  }

  subscribe(name: string, isSubscribe: boolean) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].name === name) {
        this.data[i].subscribed = isSubscribe;
        break;
      }
    }
    this.recaculateSubscription();
    this.save();
  }
}

export const exams = _exams;
