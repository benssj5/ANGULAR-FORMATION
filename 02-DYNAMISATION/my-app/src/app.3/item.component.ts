import { Component, Input} from '@angular/core'; // 11.1.1 Import de Output et deEventEmitter-> pour transmettre de l'info du composant enfant au composant parent
// 2.1.1 imports trigger, state, styles, transition, animate
import {trigger, state, style, transition, animate } from '@angular/animations'; 
import { Item } from './models/item'; // 7.2.1 import de la classe Item


@Component({
  selector: 'item-component',
  templateUrl: './item.component.html', 
  styleUrls: ['./item.component.css'] ,
 
  animations: [
    trigger('itemAnimateState',[
        state('inactive', style({color: 'red'})),
        state('active', style({color: 'blue'})),
        //  3.2.1 creer 2 transitions
        //         de void (n'existe pas dans le dom) vers n'importe quel état
        //         et de n'importe quel état vers void
        transition('void => *', [
          style({transform: 'translateX(-100%)'}),
          animate(1000)
        ]), //animation vers n'importe qu'elle état
        transition('* => void', [
          animate(1000, style({transform: 'translateX(100%)'}))
        ])
      ])
  ]
})


export class ItemComponent {
    
    @Input() item: Item; // on crée une entité réutilisable dans d'autres composants
    
    public changeState(event : Event, state: number) {
      this.item.state = state;

      /* pour faire partir les commandes livrées
      if(this.item.state === 2) {
         this.item.animateState = 'removed';
       }
     */

    }

}