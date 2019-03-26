import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { AnnoucementService } from 'src/app/service/annoucement.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  // 公告切換秒數
  anmtSecond: number;
  // 公告
  anmtStr: string = '';

  constructor(private anmtSrv: AnnoucementService) {
    console.log('constructor');
    this.anmtSecond = 5;
  }

  ngOnInit() {
    console.log('on init');
    this.anmtSrv.getAnnoucementData();
    this.changeAnmtStr();
  }

  /**
   * 修改最新公告
   *
   * @memberof IndexComponent
   */
  changeAnmtStr() {
    timer(0, 1000 * this.anmtSecond).subscribe(tmr => {
      if (this.anmtSrv.anmtList.length > 0) {
        const anmtLength = this.anmtSrv.anmtList.length;
        const anmtCnt = (tmr + anmtLength) % anmtLength;
        this.anmtStr = this.anmtSrv.anmtList[anmtCnt].data;
        console.log(this.anmtStr);
      }
    });
  }
}
