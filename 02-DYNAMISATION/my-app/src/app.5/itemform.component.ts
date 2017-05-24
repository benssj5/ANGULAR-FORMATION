import { Component, Output, EventEmitter } from '@angular/core'; // Import de Output et deEventEmitter-> pour transmettre de l'info du composant enfant au composant parent
import { Item } from './models/item'; // import de la classe Item

// @Component pour déclarer notre composant avec un sélector, un template html et un styleUrl
@Component({
  selector: 'itemform-component',
  templateUrl: './itemform.component.html', // precise le chemin vers le template
  styleUrls: ['./itemform.component.css'] // precise le chemin vers le css
})

// export de la classe ItemFormComponent
export class ItemFormComponent {
  private newItem: Item;
  @Output() onCreateObject: EventEmitter<any> = new EventEmitter(); // 11.1.2 declarer Output qui prend un new EventEmitter ; onGetDetails est un événement qui remplace le click dans getDetails
  
  constructor(){
      this.resetItem();
  }

  public createObject(){
    this.onCreateObject.emit(this.newItem);
    this.resetItem();
  }

  // on vide l'objet
  public resetItem(){
    this.newItem = new Item({reference: '', name: '', state: 0}); // 7.2.5 instances newItem dans resetItem()
  }

}