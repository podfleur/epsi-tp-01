# Ensemble des problèmes à résoudre et leurs solutions

## TODO 1 & 3 : Navigation incorrecte
### Description du problème 
Certains liens rechargent complètement la page au lieu d'utiliser le routeur Angular
### Solution technique
Ajout d'une directive `routerLink` dans les balises `<a>` 

## TODO 2 : Besoin de formatage de texte
### Description du problème 
Les titres des livres ne sont pas affichées correctement
### Solution technique
Création d'un pipe permettant de formatter correctement les titres des livres

## TODO 4 : Affichage des pages
### Description du problème 
La liste de livres ne s'affiche pas
### Solution technique
Supprimer la propriété `data` (qui n'est jamais utilisée) de `BookListComponent` et la remplacer par `books` dans la condition d'affichage du composant

## TODO 5 : Route pour la page détail d'un livre
### Description du problème
Absence de route pour la page détail d'un livre
### Solution technique 
Le problème avait déjà été résolu

## TODO 6 : Création d'un formulaire pour ajouter un livre
### Description du problème
Un formulaire doit être créé pour permettre la saisie des informations d’un livre, incluant les champs title, author, description, category, rating et isFavorite. Il doit également inclure une validation des données saisies.
### Solution technique
L’implémentation repose sur Reactive Forms d’Angular en utilisant FormBuilder pour initialiser le formulaire et Validators pour imposer des contraintes sur les champs. Lier ces champs à un template HTML permettra une saisie dynamique avec gestion des erreurs.

## TODO 7 : Ajout des validations nécessaires au formulaire
### Description du problème
Les champs du formulaire ne possèdent pas les validations nécessaires pour garantir l'intégrité des données saisies par l'utilisateur.
### Solution technique
Ajouter des validations pour chaque champ du formulaire en utilisant les directives Angular. Les validations à ajouter sont :
- `title` : requis et doit comporter au moins 3 caractères.
- `author` : requis et doit comporter au moins 3 caractères.
- `description` : requis et doit comporter au moins 10 caractères.
- `category` : requis.
- `rating` : requis et comrpis entre 0 et 5.
- `isFavorite` : égal à false par défaut.

## TODO 8 : Création d'un bouton permettant de revenir à la page précédente
### Description du problème
Le bouton permettant de revenir à la page précédente ne fonctionne pas
### Solution technique
Import du service `Location` de `@angular/common` afin de pouvoir ajouter une redirection vers la page précédente stockée dans l'historique du navigateur dans la fonction `goBack()` du composant `book-detail`.

## TODO 9 : Erreur de type dans la console
### Description du problème
On constate cette erreur : main.ts:5 ERROR TypeError: Cannot read properties of undefined (reading 'title')
### Solution technique
Vérification que l'objet book est bien défini avant de tenter d'accéder à ses propriétés.

## TODO 10 & 14 : Application de la directive highlight
### Description du problème
Appliquer la directive highlight au champ `book.title` du composant `book-detail.component.html`
### Solution technique
Ajout d'une directive dans le template book-detail.component.html. Il faut veiller à l'importer en amont dans le composant TypeScript.

## TODO 12 : Problème de fonctionnement sur le bouton retour arrière
### Description du problème
Le bouton permettant de revenir à la page précédente ne fonctionne pas
### Solution technique
Bouton déjà corrigé

## TODO 13 : Liste des livres invisible sur la page
### Description du problème
Les données sont passées à la liste mais pas affichées
### Solution technique
Changement de nom de variable dans le template. il faut afficher les livres qui sont dans une variable `books`, hors celle utilisée était `data`

## TODO 15 : Affichage de la description d'un livre
### Description du problème
Afficher la description du livre en utilisant un pipe pour limiter à 20 caractères et ajouter des points de suspension si la description est plus longue
### Solution technique
Création d'un pipe permettant de tronquer la description

## TODO 16 & 18 : Affichage d'une alerte qui indique que le favori a été modifié | que le livre a été supprimé
### Description du problème
Aucun message n'indique à l'utilisateur que l'opération a réussi
### Solution technique
Utilisation d'un `console.log()` pour afficher un message dans la console

## TODO 17 & 19 : Affichage d'une alerte qui indique que la modification du favori | que la suppression d'un livre a échoué
### Description du problème
Aucun message n'indique à l'utilisateur que l'opération a échoué
### Solution technique
Utilisation d'un `console.error()` pour afficher un message d'erreur dans la console

## TODO 20 : Correction de l'affichage du titre
### Description du problème
L'affichage du titre ne se fait pas correctement, le titre devrait être en majuscule
### Solution technique
Ajout d'une balise HTML et utilisation d'un Pipe natif Angular permettant de mettre le titre en majuscule

## TODO 22 & 23 : Création de composants header et footer
### Description du problème
Certains éléments sont redondants dans le code et devraient être déplacés dans des composants header/footer réutilisables au sein des autres pages
### Solution technique
Création d'un nouveau composant Angular, déplacement des différents morceaux de code et import du nouveau composant dans `app.component.html`

## TODO 24 : Modification de la directive pour que le texte soit en gras
### Description du problème
Si l'input est true, appliquer cela au champ title du livre sur les pages `book-detail` et `book-list`
### Solution technique
Ajout d'une condition dans la directive afin de changer la font-weight d'un texte en fonction de la valeur de l'input
