//sera transdere au format JSON
export class Auteur {

    id : number;
    nom : string;
    prenom : string;

constructor (id : number = 0,
             nom : string = "?",
             prenom : string = "?") {
    
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;


}



}