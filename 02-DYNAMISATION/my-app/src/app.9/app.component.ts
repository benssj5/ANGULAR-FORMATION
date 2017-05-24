import { Component, OnInit } from '@angular/core';
import { Item } from './models/item';
import { Config } from './config';
import { ItemService } from "app/services/item.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  private title: string;
  private version: string;
  private collection: Item[];


  constructor(private _Config: Config, private _ItemService: ItemService) {
  }

  ngOnInit(): void {
    this.title = this._Config.APP_TITLE;
    this.version = this._Config.APP_VERSION;
    //this.collection = this._ItemService.collection;
  }

  public createObject(item: Item) {
    this.collection.unshift(item);
  }

}
