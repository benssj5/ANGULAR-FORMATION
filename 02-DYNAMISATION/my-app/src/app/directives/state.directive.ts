import { Directive, Input, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: 'appState'
})
export class StateDirective {

//  8.1.2 injection de ElementRef et Renderer dans le constructor
  constructor(public element: ElementRef, public renderer: Renderer) { }

// 8.1.3 utiliser le cycle ngOnChanges pour modifier le texte
//       et la class de l'element natif dans le html à chaque changement de la page
  ngOnChanges(){
    //  8.1.4 declarer 3 variables pour la class, le texte et le noeud html
    let cssClass = 'state-'+this.itemState;
    let text = 'A livrer';
    let elementNode = this.element.nativeElement;

// 8.1.5 switch pour générer une classe et un texte en fonction du state
    switch(parseInt(this.itemState)){
      case 1:
        text = 'En cours de livraison';
        break;
      case 2:
        text = 'Livrée';
        break;
    }

//  8.1.6 utiliser setElementClass() pour ajouter la bonne class au noeud html
    this.renderer.setElementClass(elementNode, cssClass, true);
    // 8.1.7 utiliser innerHTML pour ajouter texte dans le noeud html
    elementNode.innerHTML = text;

  }

// 8.1.1 @Input pour recuperer le state
  @Input('state') itemState: any;

}
