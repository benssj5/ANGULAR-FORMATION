import { Component, OnInit } from '@angular/core';
import {Auteur} from "./model/auteur";
import { AuteurService } from './service/auteur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{


  title = 'Les Auteurs avec WS Rest!';
  auteurs : Auteur[];
  sA : Auteur; // l'auteur selectionné via liste déroulante
  
  constructor(private _auteurService : AuteurService) {
    // _auteurService est injecté ici via angular

  }

  ngOnInit(): void {
    
    this._auteurService.rechercherListeAuteurs()
        .subscribe( listAut => {this.auteurs = listAut;
                                if(this.auteurs.length >= 1)
                                  this.sA = this.auteurs[0];} , 
                    e => console.log(e.message));
  }


  public onSelectionChange(event:any) : void {
    let selectedId = event.target.value;
    for(let a of this.auteurs) {
      if(a.id == selectedId) {
        this.sA = a; break;
      }
    }
  }

  public onUpdateAuteur() {
    console.log("update ...");
    this._auteurService.majAuteur(this.sA)
        .subscribe( auteurMisAjour => { console.log("Auteur mis à jour : " + auteurMisAjour.prenom
                                        + " " + auteurMisAjour.nom)
          } , 
                    e => console.log(e.message));
  }

 

}
