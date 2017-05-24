import { Component, OnInit } from '@angular/core';
import { Item } from './models/item';
import { ItemService } from "app/services/item.service";


@Component({
  selector: 'item-component',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})


export class ItemComponent implements OnInit {
 

  private collection: Item[];

  constructor(private _ItemService: ItemService) {
  }

    ngOnInit(): void {
      this.collection = this._ItemService.collection;
  }

  public changeState(item:Item, state: number) {
    this._ItemService.changeState(item,state);
  }

  public deleteItem(item: Item) {
    this._ItemService.deleteItem(item);
  }

}