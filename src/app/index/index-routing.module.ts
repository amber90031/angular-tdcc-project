import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Route[] = [
  {
    // 預設的子路由
    path: '',
    redirectTo: 'index', // 要導向的網頁
    pathMatch: 'full' // pathMatch:路由的匹配規則; prefix:符合前綴即可;full:需全部符合
  },
  {
    path: 'index',
    component: IndexComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule {}
