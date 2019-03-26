import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annoucement } from '../share/annoucement';
import { Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnoucementService {
  // 公告內容
  anmtList: Annoucement[];

  constructor(private hcSrv: HttpClient) {}

  getAnnoucementData() {
    this.hcSrv
      .get('/assets/json/annoucement.json')
      .subscribe((response: any) => {
        this.anmtList = response as Annoucement[];
      });
  }
}
