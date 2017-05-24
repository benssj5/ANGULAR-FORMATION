import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemComponent } from './item.component';
import { ItemFormComponent } from './itemform.component';
import { ItemPipe } from './pipes/item.filter';
import  {TitleModule} from './title/title.module';

import { HighlightDirective } from './directives/highlight.directive';
import { StateDirective } from './directives/state.directive';
import { Config } from "app/config";
import { ItemService } from "app/services/item.service";
import { AppRoutingModule } from "app/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent, 
    ItemFormComponent,
    ItemPipe,
    HighlightDirective,
    StateDirective
      ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TitleModule,
    AppRoutingModule
  ],
  providers: [
    Config,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 

