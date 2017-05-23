RACOURCIS CLAVIERS:

- indentation auto : SHIFT + ALT + Z
- retour ligne auto : ALT + Z

POUR LANCER L'APPLI

    Se placer sur le dossier my-app
    Sur CMDR : ng serve --open

CHAPITRE 1 - CONSTRUCTOR - VISIBILITE - TYPAGE ---

    1.1 app.component.ts
        1.1.1 créer constructor qui initialise 2 variables
        1.1.2 déclarer 2 variables avec visibilité et typages dans notre class
    1.2 app.component.html
        1.2.1 afficher variables dans le template html


CHAPITRE 2 - CREER BOUCLE SUR UN TABLEAU -------------------

    on veut créer un tableau d'objet avec des commandes fictives pour les afficher dans le template à l'aide d'une boucle

    2.1 app.component.ts
        2.1.1 declarer une variable collection
        2.1.2 init collection dans constructor
    
    2.2 app.component.html
        2.2.1 utilise directive *ngFor pour afficher la collection dans une boucle
        2.2.2 afficher chaque item dans la boucle à l'aide de 2 <p>

CHAPITRE 3 - CONDITIONNER L'AFFICHAGE ------------------------

    on veut afficher  l'utilisateur l'état d'une commande (à livrer, encours de livraison, commande livrée)

    3.1 app.component.ts
        3.1.1 ajout propriété state aux objets de la collection
    
    3.2 app.component.html
        3.2.1 directive *ngIf pour conditionner l'affichage des états


CHAPITRE 4 - CONDITIONNER L'AFFICHAGE ------------------------

    Ajouter des styles en global et des styles propres à un composant

    4.1 styles.class
        4.1.1 ajout css sur les class state-0, state-1, state-2 et inspecteur d element

    4.2 app.component.css
        4.2.1 couper coller les css de styles.css vers app.component.css


CHAPITRE 5 - EVENT CLICK ------------------------

    5.1 app.component.html
        5.1.1 add button avec click pour appel getDetails() en lui passant $event en argument, et un argument personnalisé
        5.1.2 add attribut id dans le button avec item.reference comme valeur

    5.2 app.component.ts
        5.2.1 creer fonction getDetails()
        5.2.2 recupérer et afficher dans un console.log $event

        on veut récuperer l'élément html à l'origine du click et la valeur de son attr id

        5.2.3 variable elem pour récuperer l'élément html à l'origine du click
        5.2.4 afficher element récupérer
        5.2.5 afficher valeur attr id
        5.2.6 afficher 2e argument personnalisé

    
CHAPITRE 6 - UTILISER UN EVENT POUR CREER UN OBJET ------------------------

    on veut créer un bouton pour ajouter une commande dans la collection

    6.1 app.component.html
        6.1.1 add button avec click qui appel createObject()

    6.2 app.component.ts
        6.2.1 creer fonction createObject()
        6.2.2 push un objet dans la collection

    on veut permettre à l'utilisateur de saisir lui même une commande

    6.3 app.component.html
        6.3.1 add 3 balises input avec directive ngModel cablée à un nouvel objet newItem
        
    6.4 app.component.ts
        6.4.1 declarer private newItem
        6.4.2 init newItem dans constructor
        6.4.3 push newItem dans createObject()
        6.4.4 creer fonction resetItem()pour vider l'objet
        6.4.5 utiliser resetItem dans constructor
        6.4.6 utiliser resetItem dans createObject()


CHAPITRE 7 - CREER UN MODEL POUR LA COLLECTION ------------------------

    on veut creer une classe pour la collection et l'utiliser dans le composant
    on crée un dossier models
    et dedans on crée un fichier item.ts

    7.1 item.ts
        7.1.1 creer class item
        7.1.2 creer 3 variables private
        7.1.3 constructor qui prend un objet en argument

    7.2 app.component.ts
        7.2.1 import de la classe Item
        7.2.2 typage newItem
        7.2.3 instance de newItem dans le constructor
        7.2.4 instance de newItem dans resetItem()
        7.2.5 typage de la collection en Item[]

CHAPITRE 8 - UTILISER LES CONSTANTES ------------------------

    exemple de CONSTANTES
    creer un fichier app/config.ts

    8.1 config.ts
        8.1.1 export class config
        8.1.2 declaration 2 constantes

    8.2 app.component.ts
        8.2.1 import class config
        8.2.2 use constantes dans constructor

    EXERCICE SUR LES CONSTANTES
    dans config.ts créer une constante pour la collection avec la collection de base.
    appeler la constante BASE_COLLECTION
    utiliser la constante dans app.component.ts

    8.3 config.ts
        8.3.1 import class Item
        8.3.2 declaration constante BASE_COLLECTION
        8.3.3 couper coller tableau collection depuis app.component.ts

    8.4 app.component.ts
        8.4.1 use BASE_COLLECTION pour init variable collection dans constructor



CHAPITRE 9 - UTILISER LES FORMULAIRES ------------------------

    on veut ajouter un item à l'aide d'un formulaire et vérifier que le formulaire est valide avant d'ajouter l'item

    9.1 app.component.html
        9.1.1 add form avec une reference #itemForm="ngForm"
        9.1.2 add attr html aux input (name, required, minLength)
        9.1.3 use directive [disabled]="!itemForm.valid" qui rend disabled le bouton tant que le       formulaire est invalide
        9.1.4 add #ref sur premier input cablé à ngModel
        9.1.5 add span avec directive [hidden] pour afficher message erreur si champ mal rempli


CHAPITRE 10 - CREER UN SOUS COMPOSANT ------------------------

    on veut créer un composant qui s'occupe d'afficher uniquement les items

    Créer fichier item.component.ts, .html, .css

    10.1 item.component.html
        10.1.1 couper coller contenu de la boucle for depuis app.component.html

    10.2 item.component.ts
        10.2.1 imports de Component, de Item et de input
        10.2.2 @Component pour déclarer notre composant avec un selector, un template html,         un stylesUrls.
        10.2.3 export de la class ItemComponent
        10.2.4 créer @Input item

    10.3 app.component.html
        10.3.1 utiliser @input() item dans la balise <item-component>

    10.4 app.module.ts
        10.4.1 import de ItemComponent
        10.4.2 declarer la class ItemComponent dans @ngModule

    10.5 item.component.css
        10.5.1 recuperer css depuis app.component.css

        REMARQUE : à ce niveau là, il y a une erreur si on appuie sur le bouton détail
        car on utilise une fonction getDetails qui n'est pas contenu


CHAPITRE 11 - OUTPUT  ------------------------

    11.1 item.component.ts
        11.1.1 import Output et EventEmitter
        11.1.2 declarer Output qui prend un new EventEmitter
        11.1.3 Créer la fonction getDetails
        11.1.4 use emit sur l'EventEmitter pour emmetre un item

    11.2 app.component.html
        11.2.1 dans le selector <item-component> on utilise l'EventEmitter pour appeler la fonction getDetails() qui se trouve sur ce composant et on lui passe $event qui contient un item

    11.3 app.component.ts
        11.3.1 recuperer l'item et l'afficher dans la console


CHAPITRE 12 - EXERCICE  ------------------------

    En prenant exemple sur item component, créer un composant appelé itemform.component qui ne contiendra que le formulaire
    
    Créer composant itemform.component.html, css, ts

    12.1 itemform.component.html
        12.1.1 couper coller le form depuis app.component.html

    12.2 itemform.component.ts
        12.2.1 imports de Component, Output, EventEmmiter, Item
        12.2.2 declaration @Component
        12.2.3 declaration @Output()
        12.2.4 creer createObject()
        12.2.5 use methode emit sur l'EventEmitter pour passer newItem au composant parent
        12.2.6 couper coller la methode resetItem() depuis app.component.ts
        12.2.7 couper coller la private newItem depuis app.component.ts
        12.2.8 constructor avec resetItem()

    12.3 app.component.html
        12.3.1 use le selector itemform-component pour afficher le template                         itemform-component.html
        12.3.2 use l'EventEmitter pour passer newItem au parent

    12.4 app.component.ts
        12.4.1 modifier methode createObject pour qu'elle recupere l'EventEmitter et push           dans la collection
    
    12.5 app.module.ts
        12.5.1 import ItemformComponent
        12.5.2 declaration ItemformComponent


CHAPITRE 13 - LES PIPES  ------------------------

    on veut créer un pipe personnalisé pour faire un moteur de recherche sur les propriété name

    Créer un dossier pipes et un fichier item.filter.ts

    13.1 item.filter.ts
        13.1.1 imports de Pipe et PipeTransform
        13.1.2 declarer @Pipe
        13.1.3 utilisation methode transform
        13.1.4 return tableau à partir de notre collection filtree

    13.2 app.component.html
        13.2.1 add input pour saisi d'une chaine de recherche avec ref et keyup
        13.2.2 utilisation du pipe dans la boucle ngFor sur la collection
        
    13.3 app.module.ts
        13.3.1 import de ItemPipe
        13.3.2 declaration de ItemPipe



