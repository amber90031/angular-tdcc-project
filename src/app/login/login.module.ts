import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [LoginComponent, TermsComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
