import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ModalComponent } from './modal/modal.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

declare const chance;

@NgModule({
  imports:      [ BrowserModule, FormsModule, InfiniteScrollModule ],
  declarations: [ AppComponent, HelloComponent, ModalComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
