import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root/root.component';
import { Page1Component } from './routes/page1/page1.component';
import { Page2Component } from './routes/page2/page2.component';
import { Page3Component } from './routes/page3/page3.component';
import { MainNavComponent } from './component/main-nav/main-nav.component';
import { DatepickerModule } from './modules/datepicker/datepicker.module';

@NgModule({
  declarations: [RootComponent, Page1Component, Page2Component, Page3Component, MainNavComponent],
  imports: [BrowserModule, AppRoutingModule, DatepickerModule],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
