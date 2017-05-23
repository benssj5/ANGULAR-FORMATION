import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//permet qu il soit utilisable dans toute l'appli
// 10.4.1 import de ItemComponent
import { ItemComponent } from './item.component';

@NgModule({
  declarations: [
    AppComponent,
    // 10.4.2 declarer la class ItemComponent dans @ngModule
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
