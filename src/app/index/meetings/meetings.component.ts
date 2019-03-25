import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  selected1 = '0';
  selected2 = '0';

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

  constructor() { }

  ngOnInit() {
  }

  doOrderType($event) {
    console.log(this.selected1);
  }

  doSearchType($event) {
    console.log(this.selected2);
  }
}
