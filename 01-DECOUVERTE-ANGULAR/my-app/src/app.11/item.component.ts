// 11.1.1 import Output et EventEmitter
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './models/item';


@Component({
  selector: 'item-component',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {
    
    @Input() item:Item;

    // 11.1.2 declarer Output qui prend un new EventEmitter
    // EventEmitter : objet qui permet d emmettre un evt qui va passer tout et n importe quoi
    // de l'objet enfant vers l'objet parent
    @Output() onGetDetails: EventEmitter<any> = new EventEmitter();

    // 11.1.3 Créer la fonction getDetails
    public getDetails(event: Event) {
      event.preventDefault();// pour empecher l'execution du clic
      //  11.1.4 use emit sur l'EventEmitter pour emmetre un item
      this.onGetDetails.emit(this.item);

    }

}
