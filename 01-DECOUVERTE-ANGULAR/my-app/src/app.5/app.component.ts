import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // 1.1.2 déclarer 2 variables avec visibilité et typages dans notre class
  private title: string;
  private version: string;

  //2.1.1 declarer une variable collection
  private collection: any;

  // 1.1.1 créer constructor qui initialise 2 variables
  constructor() {
    this.title = "Application livreur";
    this.version = "1.0";

    //2.1.2 init collection
    this.collection = [
      // 3.1.1 ajout propriété state aux objets de la collection
      {reference: '1234',name: 'Christophe', state: 0},
      {reference: '5124',name: 'Momo', state: 1},
      {reference: '5896',name: 'Siham', state: 2}
    ]
  }

//  5.2.1 creer fonction getDetails()
  public getDetails(event:Event, param: string) {
    //  5.2.2 recupérer et afficher dans un console.log $event
    console.log(event);
    // 5.2.3 variable elem pour récuperer l'élément html à l'origine du click
    let elem = event.currentTarget || event.target || event.srcElement;
    // 5.2.4 afficher element récupérer
    console.log(elem);
    // 5.2.5 afficher valeur attr id
    console.log(elem['id']);
    // 5.2.6 afficher 2e argument personnalisé
    console.log(param);
  
  }

}
