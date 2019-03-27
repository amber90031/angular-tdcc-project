import { Component, OnInit } from '@angular/core';
import { MeetingService } from 'src/app/service/meeting.service';
import { Meeting } from 'src/app/share/meeting';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})

export class MeetingsComponent implements OnInit {
  // 下拉選單 內容
  options1 = [
    { name: '請選擇', value: 0 },
    { name: '依股東會日期由遠至近排序', value: 1 },
    { name: '依股東會日期由近至遠排序', value: 2 },
    { name: '依證券代號由小至大排序', value: 3 },
    { name: '依投票起日由近至遠排序', value: 4 },
    { name: '依投票起日由遠至近排序', value: 5 }
  ];
  options2 = [
    { name: '請選擇', value: 0 },
    { name: '依證券代號搜尋', value: 1 },
    { name: '依證券名稱搜尋', value: 2 },
    { name: '依股東會日期搜尋', value: 3 }
  ];

  // 下拉選單 預設值
  selected1 = '0';
  selected2 = '0';

  // 搜尋股東會
  keyword: string;

  // 股東會資訊
  get infoList() {
    // console.log('get infoList(): ' + this.mSrv.newList);
    return this.mSrv.newList;
  }

  constructor(private mSrv: MeetingService) {
  }

  ngOnInit() {
    this.mSrv.loadMeetingInfoList();
    console.log(this.mSrv.list);
  }

  doOrderType($event) {
    this.mSrv.orderMeetingInfoList(this.selected1);
  }

  doSearchType($event) {
    this.mSrv.searchMeetingInfoList(this.selected2, this.keyword);
  }
}
