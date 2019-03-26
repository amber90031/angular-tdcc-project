import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Annoucement } from '../share/annoucement';

@Injectable({
  providedIn: 'root'
})
export class AnnoucementService {
  // 公告內容
  anmtList: Annoucement[];

  constructor(private hcSrv: HttpClient) {}

  getAnnoucementData() {
    this.hcSrv
      .get('/api/annoucement.json')
      .subscribe((response: any) => {
        this.anmtList = response as Annoucement[];
      });
  }
}
