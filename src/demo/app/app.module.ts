import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxWatermarkModule } from 'ngx-watermark';
import { ColorTwitterModule } from 'ngx-color/twitter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxWatermarkModule,
    ColorTwitterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
