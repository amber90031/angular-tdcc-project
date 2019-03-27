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

  orderMeetingInfoList(orderType: string) {
    console.log('orderType: ' + orderType);
    switch (orderType) {
      // case '1':
      //   this.newList = this.list.sort(); // 股東會日期由遠至近
      //   break;
      // case '2':
      //   this.newList = this.list.filter(info => info.name.indexOf(keyword) !== -1); // 股東會日期由近至遠
      //   break;
      // case '3':
      //   this.newList = this.list.filter(info => info.date === keyword); // 證券代號由小至大
      //   break;
      // case '4':
      //   this.newList = this.list.filter(info => info.date === keyword); // 投票起日由近至遠
      //   break;
      // case '5':
      //   this.newList = this.list.filter(info => info.date === keyword); // 投票起日由遠至近
      //   break;
      default:
        this.newList = this.list;
        break;
    }
  }

  searchMeetingInfoList(searchType: string, keyword: string) {
    console.log('searchType: ' + searchType + ',keyword: ' + keyword);
    switch (searchType) {
      case '1':
        this.newList = this.list.filter(info => info.id.indexOf(keyword) !== -1); // 證券代號
        break;
      case '2':
        this.newList = this.list.filter(info => info.name.indexOf(keyword) !== -1); // 證券名稱
        break;
      case '3':
        this.newList = this.list.filter(info => info.date === keyword); // 股東會日期
        break;
      default:
        this.newList = this.list;
        break;
    }
  }
}
