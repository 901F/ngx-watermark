import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxWatermarkModule } from 'ngx-watermark';
import { ColorTwitterModule } from 'ngx-color/twitter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxWatermarkModule,
    ColorTwitterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
