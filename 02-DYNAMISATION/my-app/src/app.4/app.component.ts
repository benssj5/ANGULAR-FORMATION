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


  constructor(){
    this.title = Config.APP_TITLE; // 8.2.2 use constante dans constructor 
    this.version = Config.APP_VERSION; // 8.2.2 use constante dans constructor 
    this.collection = Config.COLLECTION_BASE;
  }
  

  public createObject(item: Item){
    // 3.1.2 replacer push par unshift pour add item au début de la collection et plus à la fonction
    this.collection.unshift(item);//ajoute un element au debut du tableau alors que push elle ajoute a la fin
    // 3.1.1 ajouter un setTimeout dans methode createObject() pour passer l'etat à 'removed' après 2sec
    // setTimeout( ()=> {
    //   item.animateState = 'removed';
    // } ,2000 );//au bout de 2sec
  }

}
