import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { MeetingsComponent } from './meetings/meetings.component';

@NgModule({
  declarations: [IndexComponent, MeetingsComponent],
  imports: [
    CommonModule
  ]
})
export class IndexModule { }
