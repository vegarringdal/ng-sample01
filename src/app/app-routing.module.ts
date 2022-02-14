import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './routes/page1/page1.component';
import { Page2Component } from './routes/page2/page2.component';
import { Page3Component } from './routes/page3/page3.component';

const routes: Routes = [
  {
    path: 'page1',
    component: Page1Component,
  },
  {
    path: 'page2',
    component: Page2Component,
  },
  {
    path: 'page3',
    component: Page3Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
