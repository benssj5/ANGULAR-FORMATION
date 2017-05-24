import { Component, Input} from '@angular/core'; // 11.1.1 Import de Output et deEventEmitter-> pour transmettre de l'info du composant enfant au composant parent
// 2.1.1 imports trigger, state, styles, transition, animate
import {trigger, state, style, transition, animate } from '@angular/animations'; 
import { Item } from './models/item'; // 7.2.1 import de la classe Item


@Component({
  selector: 'item-component',
  templateUrl: './item.component.html', 
  styleUrls: ['./item.component.css'] ,
  //  2.5.1 creation animations dans @component
  animations: [
    trigger('itemAnimateState',[
    // on va definir des etats et des animations
    state('inactive', style({color: 'red'})),
    state('active', style({color: 'blue'})),
    //<=> pour dire que les transition se font à l'identique entre les 2 etats
    transition(('inactive <=> active'),animate('500ms ease-in')) //ease-in : plus rapide vers la fin

    ])
  ]
})


export class ItemComponent {
    
    @Input() item: Item; // on crée une entité réutilisable dans d'autres composants
    
    //  2.1.2 creer fonction changeState()
    public changeState(event : Event, state: number) {
      this.item.state = state;
    }

}