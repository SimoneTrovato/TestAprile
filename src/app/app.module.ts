import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { service } from './service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [service],
  bootstrap: [AppComponent]
})
export class AppModule { }
