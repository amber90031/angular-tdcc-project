import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { RouterModule } from '@angular/router';
import { IndexRoutingModule } from './index-routing.module';

@NgModule({
  declarations: [IndexComponent, MeetingsComponent],
  imports: [CommonModule, RouterModule, IndexRoutingModule],
  exports: [IndexComponent, MeetingsComponent]
})
export class IndexModule {}
