import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  // 公告
  anmtStr: string;
  // 公告切換秒數
  anmtSecond: number;
  // 公告內容
  anmtList: string[] = ['aaa', 'bbb', 'ccc', 'ddd'];

  constructor() {
    this.anmtSecond = 5;
    console.log('constructor');
  }

  ngOnInit() {
    console.log('on init');
    this.changeAnmtStr();
  }

  /**
   * 修改最新公告
   *
   * @memberof IndexComponent
   */
  changeAnmtStr() {
    timer(0, 1000 * this.anmtSecond).subscribe(tmr => {
      const anmtLength = this.anmtList.length;
      const anmtCnt = (tmr + anmtLength) % anmtLength;
      this.anmtStr = this.anmtList[anmtCnt];
    });
  }
}
