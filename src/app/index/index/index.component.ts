import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';
import { AnnoucementService } from 'src/app/service/annoucement.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {
  // 公告切換秒數
  anmtSecond: number;
  // 公告
  anmtStr: string = '';

  anmt: Subscription;

  constructor(private anmtSrv: AnnoucementService) {
    console.log('constructor');
    this.anmtSecond = 5;
  }

  ngOnInit() {
    console.log('on init');
    this.anmtSrv.getAnnoucementData();
    this.subscribeAnmt();
  }

  ngOnDestroy(): void {
    this.unSubscribeAnmt();
  }

  /**
   * 註冊最新公告控制器
   * @memberof IndexComponent
   */
  subscribeAnmt() {
    this.anmt = timer(0, 1000 * this.anmtSecond).subscribe(tmr => {
      if (this.anmtSrv.anmtList.length > 0) {
        const anmtLength = this.anmtSrv.anmtList.length;
        const anmtCnt = (tmr + anmtLength) % anmtLength;
        this.anmtStr = this.anmtSrv.anmtList[anmtCnt].data;
        console.log(this.anmtStr);
      }
    });
  }
  /**
   * 反註冊最新公告控制器
   * @memberof IndexComponent
   */
  unSubscribeAnmt() {
    if (this.anmt) {
      this.anmt.unsubscribe();
    }
  }
}
