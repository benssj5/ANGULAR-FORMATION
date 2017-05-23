//  7.1 creer class Item()
export class Item{
    
    // 7.1.2 déclarer 3 propriétés private
    private reference: string;
    private name: string;
    private state: number;

    // 7.1.3 constructor qui prend un objet en argument
    constructor(data:any){
        this.reference = data.reference;
        this.name =  data.name;
        this.state = data.state;
    }
}