import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    loadChildren: './index/index.module#IndexModule'
  },
  {
    path: 'login',
    component: MainComponent,
    loadChildren: './login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
