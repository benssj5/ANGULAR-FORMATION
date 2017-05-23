import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private title: string;
  private version: string;
  private collection: any;
  // 6.4.1 declarer private newItem
  private newItem: {reference: string, name: string, state: number};

  constructor() {
    this.title = "Application livreur";
    this.version = "1.0";
    // 6.4.2 init newItem dans constructor
    //this.newItem = {reference: '',name: '', state: 0};
    // 6.4.5 utiliser resetItem dans constructor
    this.resetItem();

    this.collection = [
      {reference: '1234',name: 'Christophe', state: 0},
      {reference: '5124',name: 'Momo', state: 1},
      {reference: '5896',name: 'Siham', state: 2}
    ]
  }


  public getDetails(event:Event, param: string) {

    //console.log(event);
    let elem = event.currentTarget || event.target || event.srcElement;
    // console.log(elem);
    // console.log(elem['id']);
    // console.log(param);
  }

//  6.2.1 creer fonction createObject()
  public createObject(){
    //let obj = {reference: '2548',name: 'Boris', state: 0};
    // 6.2.2 push un objet dans la collection
    // 6.4.3 push newItem dans createObject()
    this.collection.push(this.newItem);//ajoute un ligne dans le tableau
    // 6.4.6 utiliser resetItem dans createObject()
    this.resetItem();
  }

// 6.4.4 creer fonction resetItem()pour vider l'objet
  public resetItem(){
    this.newItem = {reference: '',name: '', state: 0};
  }

}
