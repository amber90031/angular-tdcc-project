import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { MaskPipe } from '../mask.pipe';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainComponent, MaskPipe],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent]
})
export class LayoutModule {}
