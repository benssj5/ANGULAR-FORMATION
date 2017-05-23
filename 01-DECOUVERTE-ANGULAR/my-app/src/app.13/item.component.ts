import { Component, Input, Output, EventEmitter } from '@angular/core'; // 11.1.1 Import de Output et deEventEmitter-> pour transmettre de l'info du composant enfant au composant parent
import { Item } from './models/item'; // 7.2.1 import de la classe Item

// 10.2.2 @Component pour déclarer notre composant avec un sélector, un template html et un styleUrl
@Component({
  selector: 'item-component',
  templateUrl: './item.component.html', // precise le chemin vers le template
  styleUrls: ['./item.component.css'] // precise le chemin vers le css
})

// 10.2.3 export de la classe ItemComponent
export class ItemComponent {
    // 10.2.4 creer @Input () item qu'on va pouvoir utiliser comme référence dans le template app.component.html
    @Input() item: Item; // on crée une entité réutilisable dans d'autres composants
    @Output() onGetDetails: EventEmitter<any> = new EventEmitter(); // 11.1.2 declarer Output qui prend un new EventEmitter ; onGetDetails est un événement qui remplace le click dans getDetails

   // 11.1.3 créer la fonction getDetails
   public getDetails(event: Event) {// cette fonction prend $event en entrée
      event.preventDefault();
      this.onGetDetails.emit(this.item); // 11.1.4 dans cette fonction, utiliser methode emit sur l'EventEmitter pour emmettre un item. ; emit : permet d'envoyer quelque chose dans un evenement
   }
}