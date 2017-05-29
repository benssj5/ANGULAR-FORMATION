import {Auteur} from "../model/auteur";
import {Headers, Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AuteurService {

private _headers = new Headers({'Content-Type': 'application/json'});

    //private listeAuteurs : Auteur[]; //jeux de données (simulations)
    // constructor () {
    //     this.listeAuteurs = [
    //         {"id":1, "nom":"Therieur", "prenom":"Alain"},
    //         {"id":2, "nom":"Du Jardin", "prenom":"Jean"}
    //     ];
    // }

    constructor (private _http : Http) {
        // _http injecté ici servira a appeler des WS REST
    }

    public rechercherListeAuteurs() : Observable<Auteur[]> {
        //return Observable.of(this.listeAuteurs);
        
        let urlWS : string = "http://localhost:8080/wsSpringCxfWeb/services/rest/auteurs/all";
        return this._http.get(urlWS)
                         .map(response => response.json())
                         .catch(e => Observable.throw("error : " + e));

    }

    public majAuteur(a : Auteur) : Observable<Auteur> {
         let urlWS : string = "http://localhost:8080/wsSpringCxfWeb/services/rest/auteurs/" + a.id;
        return this._http.put(urlWS, JSON.stringify(a),{headers: this._headers})
                         .map(response => response.json())
                         .catch(e => Observable.throw("error : " + e));
    }


}