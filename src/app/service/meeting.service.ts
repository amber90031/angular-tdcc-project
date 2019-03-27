import { Injectable } from '@angular/core';
import { Meeting } from '../share/meeting';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  list: Meeting[];
  newList: Meeting[];

  constructor(private http: HttpClient) { }

  loadMeetingInfoList() {
    this.http.get('/api/meetingInfo.json')
      .subscribe(response => {
        this.list = response as Meeting[];
        this.newList = this.list;
        console.log('Srv-loadMeetingInfoList()');
      });
  }

  searchAndOrderMeetingInfoList(orderType: string, searchType: string, keyword: string) {
    this.searchMeetingInfoList(this.list, searchType, keyword);
    console.log('step 1 end');
    this.orderMeetingInfoList(this.newList, orderType);
  }

  orderMeetingInfoList(list: Meeting[], orderType: string) {
    console.log('orderType: ' + orderType);
    switch (orderType) {
      case '1':
        // 股東會日期由遠至近
        this.newList = list.sort((m1, m2) => {
          return this.sortCompare(m2.date, m1.date);
        });
        break;
      case '2':
        // 股東會日期由近至遠
        this.newList = list.sort((m1, m2) => {
          return this.sortCompare(m1.date, m2.date);
        });
        break;
      case '3':
        // 證券代號由小至大
        this.newList = list.sort((m1, m2) => {
          return this.sortCompare(m1.id, m2.id);
        });
        break;
      case '4':
        // 投票起日由近至遠
        this.newList = list.sort((m1, m2) => {
          return this.sortCompare(m1.vote_s, m2.vote_s);
        });
        break;
      case '5':
        // 投票起日由遠至近
        this.newList = list.sort((m1, m2) => {
          return this.sortCompare(m2.vote_s, m1.vote_s);
        });
        break;
      default:
        this.newList = list;
        break;
    }
  }

  searchMeetingInfoList(list: Meeting[], searchType: string, keyword: string) {
    console.log('searchType: ' + searchType + ',keyword: ' + keyword);
    if (keyword) {
      switch (searchType) {
        case '1':
          // 證券代號
          this.newList = list.filter(info => info.id.indexOf(keyword) !== -1);
          break;
        case '2':
          // 證券名稱
          this.newList = list.filter(info => info.name.indexOf(keyword) !== -1);
          break;
        case '3':
          // 股東會日期
          this.newList = list.filter(info => info.date === keyword);
          break;
        default:
          this.newList = list;
          break;
      }
    } else {
      this.newList = list;
    }
  }

  sortCompare(a, b): number {
    if (a > b) { return 1; }
    if (a < b) { return -1; }
    return 0;
  }
}
