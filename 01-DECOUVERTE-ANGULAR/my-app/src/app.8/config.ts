// 8.3.1 import class Item
import { Item } from './models/item';

// 8.1.1 export class config
export class Config {

    // 8.1.2 declaration 2 constantes
    public static get APP_TITLE(): string {return "Application livreur";}
    public static get APP_VERSION(): string {return "Version 1.0";}    
    // 8.3.2 declaration constante BASE_COLLECTION
    public static get BASE_COLLECTION(): Item[] {
        return [ 
            // 8.3.3 couper coller tableau collection depuis app.component.ts
            new Item({reference: '1234',name: 'Christophe', state: 0}),
            new Item({reference: '5124',name: 'Momo', state: 1}),
            new Item({reference: '5896',name: 'Siham', state: 2})
            ];
    }

}