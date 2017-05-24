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

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent, 
    ItemFormComponent,
    ItemPipe,
    HighlightDirective
      ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TitleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 

