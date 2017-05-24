import { Component, Input} from '@angular/core'; // 11.1.1 Import de Output et deEventEmitter-> pour transmettre de l'info du composant enfant au composant parent
// 5.2.3 supprimer les imports pour animation
import { Item } from './models/item'; // 7.2.1 import de la classe Item


@Component({
  // 5.2.2 supprimer animations dans @Component
  selector: 'item-component',
  templateUrl: './item.component.html', 
  styleUrls: ['./item.component.css'] ,
})


export class ItemComponent {
    
    @Input() item: Item; // on crée une entité réutilisable dans d'autres composants
    
    public changeState(event : Event, state: number) {
      this.item.state = state;

      // pour faire partir les commandes livrées
      // if(this.item.state === 2) {
      //    this.item.animateState = 'removed';
      //  }
     

    }

    public deleteItem (){
      this.item.animateState = 'removed';
      // 5.2.1 dans deleteItem() ajouter setTimeout() pour passer à l'etat 'removedFromDom'
       setTimeout(()=> {
         this.item.animateState = 'removedFromDom';
       }, 1000);
    }

}