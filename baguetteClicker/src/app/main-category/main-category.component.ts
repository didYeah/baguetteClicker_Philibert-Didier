import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {}

  checkIfActive(): void {
    for (let button of this.categories) {
      if (button.price <= this.totalGlobal) button.inactive = false;
      else button.inactive = true;
    }
  }

  onClickBread(): void {
    this.totalGlobal += this.clickValue; // Création de la fonction onClick
  }

  buyItem(itemId: number): void { // Création de la fonction buyItem
    const item = this.categories.find(category => category.id === itemId);
    if (item && this.totalGlobal >= item.price) {
      this.totalGlobal -= item.price; // déduire de la variable « totalGlobal » le prix de l'objet qui se trouve dans le tableau « categories »
      item.price = Math.round(item.price * 1.075); // Augmentez ensuite la valeur du prix de l'objet de 7.5% en utilisant la fonction Math.round() pour arrondir le résultat
      this.descCategories[itemId].total++; // incrémentez de 1 la propriété « total » de l'objet « descCategories » qui correspond à « itemId »
      if (this.descCategories[itemId].name !== 'Clics') { 
        this.descCategories[itemId].eachSecond = 5 * Math.pow(2, itemId) * this.descCategories[itemId].total;
      }
      this.totalPerSecond = 5 * Math.pow(2, itemId);
    }
  }

  addBreadPerSecondToTotal(): void {}

  ngOnDestroy(): void {}
}
