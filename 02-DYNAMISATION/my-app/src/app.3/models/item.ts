
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

    // 2.3.3 creer fonction toggleAnimateState()
    public toggleAnimateState() {
        // le '===' verifie le type et la valeur en javascript
        this.animateState = this.animateState === 'inactive' ? 'active' : 'inactive';
        console.log(this.animateState);
    }

}