import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TermsComponent } from './terms/terms.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, TermsComponent],
  imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule],
  exports: [LoginComponent, TermsComponent]
})
export class LoginModule {}
