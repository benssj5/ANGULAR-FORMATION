
export class Item{
    

    public reference: string;
    public name: string;
    public state: number;
    // 2.3.1 declarer variable animateState
    public animateState: string;


    constructor(data:any){
        this.reference = data.reference;
        this.name =  data.name;
        this.state = data.state;
        // 2.3.2 init variable dans constructor
        this.animateState = 'inactive';
    }

    
// 5.4.1 supprimer toggleAnimateState

}