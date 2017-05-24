import { Component, OnInit } from '@angular/core'; // Import de Output et deEventEmitter-> pour transmettre de l'info du composant enfant au composant parent
import { Item } from './models/item'; // import de la classe Item
import { ItemService } from "app/services/item.service";

// @Component pour déclarer notre composant avec un sélector, un template html et un styleUrl
@Component({
  selector: 'itemform-component',
  templateUrl: './itemform.component.html',
  styleUrls: ['./itemform.component.css']
})


export class ItemFormComponent implements OnInit{
  private newItem: Item;

  constructor(private _ItemService: ItemService) {

  }

//se declenche direct apres le constructor
  ngOnInit() {
    this.newItem = this._ItemService.emptyItem;
  }

//utilise les methodes d'un service
  createObject() {
    this._ItemService.add(this.newItem);
    this.newItem = this._ItemService.emptyItem;
  }



}