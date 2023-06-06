import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';


@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.css'],
})

export class MainCategoryComponent implements OnInit {
  totalGlobal: number = 0;
  totalPerSecond: number = 0;
  clickValue: number = 0;
  titlesList: string[] = ['pains', 'pains par seconde'];
  breadClicker: string[] = ['assets/img/bread.png', 'Tranche de pain'];
  categories: { id: number; name: string; price: number; inactive: boolean }[] =
    [];
  descCategories: {
    id: number;
    name: string;
    total: number;
    eachSecond: number;
  }[] = [];
  intervalId = setInterval(() => {
    this.addBreadPerSecondToTotal();
  }, 1000);

  constructor() {
    this.clickValue = 1;
    this.descCategories = [
      { id: 0, name: 'Clics', total: 0, eachSecond: 0 }, 
      { id: 1, name: 'Employé(e)s', total: 0, eachSecond: 0 },
      { id: 2, name: 'Fournisseurs', total: 0, eachSecond: 0 },
      { id: 3, name: 'Nouvelles recettes', total: 0, eachSecond: 0 },
      { id: 4, name: 'Succursales', total: 0, eachSecond: 0 },
    ];
    this.categories = [
      { id: 0, name: 'Clic', price: 10, inactive: true }, 
      { id: 1, name: 'Employé(e)', price: 500, inactive: true },
      { id: 2, name: 'Fournisseur', price: 3000, inactive: true },
      { id: 3, name: 'Nouvelle recette', price: 15000, inactive: true },
      { id: 4, name: 'Succursale', price: 100000, inactive: true },
    ];
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => { // Initialisation du minuteur
      this.addBreadPerSecondToTotal(); // Calcul du nombre de pain par seconde 
    }, 1000); // toutes les 1000 millisecondes
  }

  checkIfActive(): void {  // Vérification de la quantité total de pain
    for (let i = 0; i < this.categories.length; i++) {  // Initialisation de la variable i à O
      const item = this.categories[i];
      if (this.totalGlobal >= item.price) {
        item.inactive = false; // Si le total est supérieur au prix
      } else {
        item.inactive = true; // Si le total est inférieur au prix
      }
    }
  }

  onClickBread(): void {
    this.totalGlobal += this.clickValue; // Création de la fonction onClick
  }

  // III Cycle de jeu et évenements 
  // III.2 Les boutons
  buyItem(itemId: number): void { // Création de la fonction buyItem qui prend en paramètre "itemId"
    const item = this.categories[itemId]; // Innitialisation de la constante itemId
    const itemPrice = item.price;         // Innitialisation de la constante itemPrice
    if (this.totalGlobal >= itemPrice) {  // 
      this.totalGlobal -= itemPrice;
      item.price = Math.round(item.price * 1.075); // Augmentation de 7,5% du prix en arrondissant le résultat
      this.descCategories[itemId].total += 1; // Incrémentation de 1 de la propriété "total" de "desCategories" correspondant à "itemId"
      if (this.descCategories[itemId].name !== 'Clics') { // Vérification du nom de l'objet "Clics" avant de lancer la calcul
        this.descCategories[itemId].eachSecond = 5 * Math.pow(2, itemId) * this.descCategories[itemId].total;
      }
      this.totalPerSecond = 5 * Math.pow(2, itemId); // Ajout de la formule à la variable "totalPerSecond"
    }
  }

  addBreadPerSecondToTotal =(): void =>{ 
    if (this.totalPerSecond > 0) {
      this.totalGlobal += this.totalPerSecond; // Si le "totalPerSecond" est > 0 on ajoute au total
    }
    this.checkIfActive();  // Changement de l'état des boutons en fonction de la quantité total de pains disponible
  }

  ngOnDestroy(): void {}
}
