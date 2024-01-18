import * as moment from 'moment';
import examjson from "./exam2024.json"

function getRemain(date: string) {
  var eventdate = moment(date);
  var todaysdate = moment();
  return eventdate.diff(todaysdate, 'days');
}

function getNearest(dates: string[]) {
  return dates.sort()[0];
}

export interface IExam {
  name: string;
  dates: string;
  remain?: number;
  subscribed?: boolean;
}

const _exams: any = {
  '2024': examjson
};

const _subjects = {
  一级建造师: {
    公共课: [
      {
        name: '建设工程经济',
        cover: 'covers/yijian/2023/gcjj.png',
        dates: '2023-09-09',
        start: '09:00',
        end: '11:00',
      },
      {
        name: '建设工程法规及相关知识',
        cover: 'covers/yijian/2023/gcfg.jpeg',
        dates: '2023-09-09',
        start: '14:00',
        end: '17:00',
      },
      {
        name: '建设工程项目管理',
        dates: '2023-09-10',
        start: '09:00',
        end: '12:00',
      },
    ],
    "专业课": [

    ]
  },
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
      this.data = _exams['2024'];
    }
    for (let i = 0; i < this.data.length; i++) {
      const latest = getNearest(this.data[i].dates);
      this.data[i].remain = getRemain(latest);
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
export const subjects = _subjects;
