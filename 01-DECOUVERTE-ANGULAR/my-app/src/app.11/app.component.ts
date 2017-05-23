import { Component } from '@angular/core';
import { Item } from './models/item';
import { Config } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title: string;
  private version: string;
  private collection: Item[];
  private newItem: Item;

  constructor() {

    this.title = Config.APP_TITLE;
    this.version = Config.APP_VERSION;
    this.resetItem();
    this.collection = Config.BASE_COLLECTION;
  }


  public getDetails(event:Event) { // pareil que : getDetails(item:Item)
    // 11.3.1 recuperer l'item et l'afficher dans la console
    console.log(event);
  }

  public createObject(){

    this.collection.push(this.newItem);//ajoute un ligne dans le tableau

    this.resetItem();
  }

  public resetItem(){
    this.newItem = new Item({reference: '',name: '', state: 0});
  }

}
