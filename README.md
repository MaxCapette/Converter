# Convertisseur

## Objectif

Réaliser ce projet de convertisseur de devises. On demande pour l'instant uniquement de réaliser un affichage, pas de gérer les interactions (on verra ça dès demain !)

![résultat](./__docs/resultat.gif)

## Instructions

## 1. Cloner ce projet avec le script du React Model Vite
Pour coder en React dans ce projet il nous faut les outils (bundler, transpiler, linter...) et la config de ces outils, on récupère tout ça dans le React Model Vite. 

## 2. Commencer par la structure des composants statiques
On remplace le composant `App` copié du React Model Vite par un composant `Converter`. Dans ce composant qui sera notre composant principal on importe 3 sous composants qu'on écrit chacun dans un dossier/fichier séparé et qui font chacun le rendu d'une petite partie d'UI : 
- `Header` : le titre
- `Currencies` : la liste des devises 
- `Amount` : le résultat de la conversion

Pour l'instant le JSX de nos sous-composants est complétement statique.

## 3. Un peu de style

On code le style avec SCSS pour se rapprocher de la maquette de base. Mais sans y passer 2h non plus hein, c'est pas une spé coloriage 😉

### Font

[Spartan](https://gwfh.mranftl.com/fonts/league-spartan)

- `300` : textes
- `500` : liste de devises
- `700` : titre et résultat

### Couleurs

- Principale `#bb5432`
- Alternative `#f1c5b6`
- Claire `#fff`

### BONUS : Transitions
On ajoute des transitions sur le hover des `<li>`
- Rapide : `0.2s`
- Lente : `1s`

<https://developer.mozilla.org/fr/docs/Web/CSS/overflow>
<https://developer.mozilla.org/fr/docs/Web/CSS/transition>


## 4. Identifier les données à transmettre et placer des props

Maintenant que notre rendu est bien, on va essayer de dynamiser nos sous composant pour les rendre plus paramètrables !
Toutes nos données seront définies / importées dans le composant principal `Converter` et on va faire passer leurs valeurs aux sous composants via des props.

### 4.1 Props du composant `Header`
Ca serait bien que le composant puisse afficher un autre montant que 1 euro ?
- Dans le composant principal `Converter` on créé une variable `amount` contenant la valeur `1`
- on fait passer cette valeur via une prop au composant `Header`
- Dans le composant `Header` on récupère la prop `amount`, on écrit l'interface pour la typer et on affiche sa valeur dans le JSX.

### 4.2 Props du composant `Currencies`
Ca serait bien que notre composant n'importe quelle liste des devises ?
- On importe le tableau des devises depuis le fichier `currencies.js` dans le composant principal `Converter`, 
- on le fait passer au sous composant `Currencies` via une prop.
- Dans le composant `Currencies`, on récupère la prop `currencyList`, on écrit l'interface pour la typer.
- Et on utilise cette liste pour générer avec `map` un tableau d'element JSX `<li>`. On oublie pas d'ajouter une prop `key` sur nos li car React en a besoin pour identifier des elements frères rendus depuis un tableau.

### 4.3 Props du composant `Amount`
Notre composant voudra surement afficher un autre résultat que 1.09 United States Dollars ?
- Dans le composant principal `Converter` on créé :
  - une variable `currencyName` contenant la chaine de caractère `United States Dollars`
  - une variable `amount` contenant le number `1.09`
- on fait passer ces 2 valeurs au sous composant `Amount` via des props
- Dans le composant `Amount` on récupère les props, on écrit l'interface pour les typer et on affiche leurs valeurs dans le JSX.

