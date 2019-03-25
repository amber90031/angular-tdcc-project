import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { RouterModule } from '@angular/router';
import { IndexRoutingModule } from './index-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent,
    MeetingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IndexRoutingModule,
    FormsModule
  ],
  exports: [
    IndexComponent,
    MeetingsComponent
  ]
})
export class IndexModule {}
