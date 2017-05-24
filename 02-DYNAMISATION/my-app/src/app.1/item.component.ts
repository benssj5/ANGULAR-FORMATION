import { Component, Input } from '@angular/core'; // 11.1.1 Import de Output et deEventEmitter-> pour transmettre de l'info du composant enfant au composant parent
import { Item } from './models/item'; // 7.2.1 import de la classe Item


@Component({
  selector: 'item-component',
  templateUrl: './item.component.html', // precise le chemin vers le template
  styleUrls: ['./item.component.css'] // precise le chemin vers le css
})


export class ItemComponent {
    
    @Input() item: Item; // on crée une entité réutilisable dans d'autres composants
    


}