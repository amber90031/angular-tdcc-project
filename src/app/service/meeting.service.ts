import { Injectable } from '@angular/core';
import { Meeting } from '../share/meeting';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  infoList: Meeting[];

  constructor(private http: HttpClient) { }

  getMeetingInfoList() {
    this.http.get('/api/meetingInfo.json')
      .subscribe(response => {
        this.infoList = response as Meeting[];
        console.log('Srv: ' + this.infoList);
      });
  }
}
