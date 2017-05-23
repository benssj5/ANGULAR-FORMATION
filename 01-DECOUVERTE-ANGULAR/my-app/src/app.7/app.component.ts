import { Component } from '@angular/core';
// 7.2.1 import de la classe Item
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title: string;
  private version: string;
  // 7.2.5 typage de la collection en Item[]
  private collection: Item[];
  //  7.2.2 typage newItem
  private newItem: Item;

  constructor() {
    this.title = "Application livreur";
    this.version = "1.0";
    this.resetItem();

    this.collection = [
      // 7.2.3 instance de newItem dans le constructor
      new Item({reference: '1234',name: 'Christophe', state: 0}),
      new Item({reference: '5124',name: 'Momo', state: 1}),
      new Item({reference: '5896',name: 'Siham', state: 2})
    ]
  }


  public getDetails(event:Event, param: string) {
    let elem = event.currentTarget || event.target || event.srcElement;
  }

  public createObject(){

    this.collection.push(this.newItem);//ajoute un ligne dans le tableau

    this.resetItem();
  }

  public resetItem(){
    // 7.2.4 instance de newItem dans resetItem()
    this.newItem = new Item({reference: '',name: '', state: 0});
  }

}
