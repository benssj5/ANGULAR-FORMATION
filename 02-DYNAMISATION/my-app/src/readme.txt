RACOURCIS CLAVIERS:

- indentation auto : SHIFT + ALT + F
- retour ligne auto : ALT + Z

install du plugin : vscode-icons de Roberto Huaertas
    -> Fichier->Preference->Parametre
            -> rechercher 'workbench.i'
                ->cliquer sur le petit crayon -> modifier -> vscode-icons

install du plugin : AngularDoc for Visual Studio Code


POUR LANCER L'APPLI

    Se placer sur le dossier my-app
    Sur CMDR : ng serve --open

CHAPITRE 1 - BOOTSTRAP  ----------------------------

    1.1 npm install bower -g
    1.2 bower install bootstrap sur my-app
    1.3 ajouter chemin bootstrap.css dans .angular-cli.json
    1.4 ajouter class bootstrap sur index.html
    1.5 ajouter class bootstrap sur item.component.html
    1.6 ajouter class bootstrap sur itemform.component.html
    1.7 supprimer button getDetails sur item.cmoponent.html
    1.8 supprimer Output, EventEmitter, et methode getDetails() sur item.component.ts
    1.9 supprimer methode getDetails() sur app.component.ts 

CHAPITRE 2 - ANIMATION ANGULAR ---------------------------

    créer une amination avec angular

    2.1 item.composant.ts
        2.1.1 imports trigger, state, styles, transition, animate
        2.1.2 creer fonction changeState()

    2.2 item.component.html
        2.2.1 ajout click pour appeler fonction toggleAnimateState()

    2.3 models/item.ts
        2.3.1 declarer variable animateState
        2.3.2 init variable dans constructor
        2.3.3 creer fonction toggleAnimateState()

        pour utiliser les animations angular :
        npm install @angular/animations --save

    2.4 app.module.ts
        2.4.1 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
        2.4.2 declaration dans les imports

    2.5 item.component.ts
        2.5.1 creation animations dans @component

    2.6 item.component.html
        2.6.1 referencer le trigger sur le div panel-defaut et cabler à la propriété animateState

    

CHAPITRE 3 - ANIMATION EN ENTREE ET EN SORTIE AVEC * ET VOID  ---------------------------

    on veut faire une animation quand un item est ajouté dans le dom,
    puis faire une autre animation pour le faire disparaitre apres quelques secondes

    3.1 app.component.ts
        3.1.1 ajouter un setTimeout dans methode createObject() pour passer l'etat à 'removed' après 2sec
        3.1.2 replacer push par unshift pour add item au début de la collection et plus à la fonction

    3.2 item.component.ts
        3.2.1 creer 2 transitions
                de void (n'existe pas dans le dom) vers n'importe quel état
                et de n'importe quel état vers void
    
    3.3 item.component.html
        3.3.1 ajouter un *ngIf pour masquer le div panel si etat === 'removed'
        3.3.2 ajouter div avec 2 boutons pour passer d'un etat à l'autre
                 grace à la methode changeState()



CHAPITRE 4 - EXERCICE  ---------------------------

    une fois que commande livrée (state === 2) on ajoute un bouton avec un icon corbeille
    pour passer l'etat de la commande à 'removed'
    et le sortir du dom grace à notre animation angular

    4.1 item.component.html
        4.1.1 ajout div et button si etat === 2

    4.2 app.component.ts
        4.2.1 suppression setTimeout

    4.3 item.component.ts
        4.3.1 creation fonction deleteItem()



CHAPITRE 5 - UTILISER LA LIBRAIRIE ANIMATE.CSS  ---------------------------    

    bower install animate.css --save

    On veut quand les panels apparaissent une animation rubberBand.
    Après avoir passé une commande en Livrée, la corbeille apparait et quand
    on clique sur la corbeille on veut une aimation fadeOut.
    Ensuite on veut que le panel disparaisse du Dom grace à un *ngIf

    Quand le panel apparait, animateState === 'inactive' (models/item.ts)
    dans le html [ngClass] applique la class 'rubberBand'

    quand on clique sur la corbeille, la methode deleteItem() (item.component.ts)
    passe animateState à 'removed' donc dans le html [ngClass] applique la class 'fadeOut'

    dans la methode deleteItem(), un setTimeout passe animateState à 'removedFromDom'
    apres 500ms donc dans le html le *ngIf sur le panel empeche le panel de s'afficher
    dans le dom

    5.1 app.component.ts
        5.1.1 supprimer setTimeout() dans createObject()

    5.2 item.component.ts
        5.2.1 dans deleteItem() ajouter setTimeout() pour passer à l'etat 'removedFromDom'
        5.2.2 supprimer animations dans @Component
        5.2.3 supprimer les imports pour animation

    5.3 item.component.html
        5.3.1 modifier *ngIf pour supprimer panel si animateState === 'removedFromDom'
        5.3.2 directive [ngClass] pour class rubberBand ou fadeOut selon valeur de animateState


    5.4 models/item.ts
        5.4.1 supprimer toggleAnimateState()


CHAPITRE 6 - CREATION MODULE  ---------------------------    

    pour illustrer la creation et l'injection de modules, on va créer un module
    uniquement pour afficher le titre de l'appli et on va l'importer entierement
    dans notre module principal

    créer un dossier title dans app
    créer un fichier title.module.ts
    créer les fichiers title.component.ts, .html, .css

    6.1 title.module.ts
        6.1.1 import de ngModule
        6.1.2 import de TitleComponent
        6.1.3 créer le ngModule
        6.1.4 declaration de TitleComponent
        6.1.5 exports TitleComponent

    6.2 title.component.ts
        6.2.1 import de Component et Config
        6.2.2 créer @Component
        6.2.3 créer class TitleComponent
        6.2.4 private title
        6.2.5 init this.title dans constructor

    6.3 title.component.html
        6.3.1 couper coller la balise <h1> depuis app.component.html

    6.4 app.component.html
        6.4.1 utiliser le selecteur <app-title> pour afficher la template title.cmoponent.html
        
    6.5 app.module.ts
        6.5.1 import du module TitleModule
        6.5.2 declarer TitleModule dans les imports



CHAPITRE 7 - LES DIRECTIVES  ---------------------------    

    Les directives permettent de donner des ordres, 
    le plus souvent des ordres structurés (*ngIf, *ngFor, ...),
    on trouve aussi des directives d'attribut et d'affichage ([ngClass], [hidden], [disabled]...)
    elles permettent d'ajouter du js dans le dom et d'agir sur l'affichage.

    créer un dossier directives
    créer highlight.directive.ts

    
CHAPITRE 8 - CREER UNE DIRECTIVE D'AFFICHAGE  ---------------------------    

    sur item.component.html on utilise 3 span avec *ngIf pour afficher les etats de chaque commande.
    On va créer une directive pour remplacer dans le html ces 3 span par un seul element html
    qui jouera la logique developpée dans notre directive.
    L'avantage de la directive c'est que l'on peut l'utiliser dans plusieurs composants.
    Si on vient faire une modif dans notre directive, elle va s'appliquer à tous nos composants.

    creer une directive state.directive.ts
        se placer sur le dossier directive avec CMDR -> (ng g directive state)

    8.1 state.directive.ts
        8.1.1 @Input pour recuperer le state
        8.1.2 injection de ElementRef et Renderer dans le constructor
        8.1.3 utiliser le cycle ngOnChanges pour modifier le texte
                 et la class de l'element natif dans le html à chaque changement de la page
        8.1.4 declarer 3 variables pour la class, le texte et le noeud html
        8.1.5 switch pour générer une classe et un texte en fonction du state
        8.1.6 utiliser setElementClass() pour ajouter la bonne class au noeud html
        8.1.7 utiliser innerHTML pour ajouter texte dans le noeud html

    8.2 item.component.html
        8.2.1 utiliser notre directive avec la balise <appState></appState> et l'@Input state
    
    8.3 app.module.ts
        (imports et declaration automatique lors de la création de la directive avec ng generate ...)


CHAPITRE 9 - CREER UN SERVICE POUR GERER LES ITEMS  ---------------------------  

    créer un dossier 'services'

    on veut creer un service qui gere les item et les methodes des items, ajouter et supprimer des items

    ng g service item

    9.1 item.service.ts
        9.1.1 variable emptyItem
        9.1.2 constructor appelle resetItem() pour init variable emptyItem
        9.1.3 coolection d'item
        9.1.4 creation d'une methode add pour ajouter des item
        9.1.5 methode changeState()
        9.1.6 methode delete()
        9.1.7 methode methode resetItem()

    9.2 item.component.html
        9.2.1 à chaque appelle de la methode changeState() on passe 1 item et un state en parametre
        9.2.2 à l appelle de deleteItem() on passe un item en parametre
        9.2.3 couper coller le *ngFor depuis app.component.html
        9.3.4 couper coller le input de fitre reherche depuis app.component.html

    9.3 item.component.ts
        9.3.1 class implements OnInit
        9.3.2 import OnInit
        9.3.3 utilise la methode ngOnInit() pour initialiser nos variables
        9.3.4 injection ItemService dans constructor
        9.3.5 changeState() utilise la methode changeState() de ItemService
        9.3.6 deleItem() utilise la methode delete() de ItemService
        9.3.7 supprimer les @Input() et @Output()
        9.3.8 supprimer les import Input et Output, EventEmitter

    9.4 itemform.component.ts
        9.4.1 class implements OnInit
        9.4.2 import de OnInit
        9.4.3 methode ngOnInit()
        9.4.4 methode createObject() qui utilise add() et emptyItem de ItemService
        9.4.5 supprimer les @Input() et @Output()
        9.4.6 supprimer les import Input et Output, EventEmitter

    9.5 config.ts
        9.5.1  on garde uniquement 2 variables pour title et version

    9.6 app.component.html
        garder uniquement les selectors pour item-component, item-form et app-title

    9.7 app.component.ts
        9.7.1 import de ItemService
        9.7.2 implementation de OnInit
        9.7.3 import de OnInit
        9.7.4 injection dans constructor de Config et ItemService
        9.7.5 utilsation methode ngOnInit()


CHAPITRE 10 - ROUTES ANGULAR ---------------------------  

    on veut creer 2 routes pour chacun de nos components
    avec une page qui affiche la collection et une page qui affiche le formulaire


    creer un fichier app-routing.module.ts

    10.1 app-routing.module.ts
        10.1.1 imports de nos components, ngModule, Route, RouterModule
        10.1.2 const qui contient toutes nos routes
        10.1.3 declaration de @ngModule
        10.1.4 RouterModule.forRoot(appRoutes) dans imports
        10.1.5 RouterModule dans les exports

    10.2 app.module.ts
        10.2.1 imports de AppRoutingModule (notre class qui contient les routes)
        10.2.2 ajouter AppRoutingModule dans les imports

    10.3 app.component.html
        10.3.1 ajouter une navigation avec 2 liens vers nos routes
        10.3.2 ajouter la balise <router-outlet></router-outlet> 
                qui va afficher nos components en fonction de nos routes