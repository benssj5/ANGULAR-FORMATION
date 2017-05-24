import { Item } from './models/item'; // import de la classe Item

export class Config{
    public static get APP_TITLE(): string{return "Application livreur"}
    public static get APP_VERSION(): string{return "Version 1.0"}

    public static get COLLECTION_BASE(): Item[]{
        return [
          new Item({reference: '1234', name: 'Christophe', state: 0}), 
          new Item({reference: '5678', name: 'Momo', state: 1}),
          new Item({reference: '9101', name: 'Siham', state: 2})
    ]}
}