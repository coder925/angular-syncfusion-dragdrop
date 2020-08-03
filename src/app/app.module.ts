import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailPlanningModule } from './detail-planning/detail-planning.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DetailPlanningModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
