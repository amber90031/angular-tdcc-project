import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TermsComponent } from './terms/terms.component';

const routes: Route[] = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
