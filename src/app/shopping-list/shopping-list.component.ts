import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [
    new Ingredient('Chicken', 1),
    new Ingredient('Buns', 2),
    new Ingredient('Pickle slice', 5)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
