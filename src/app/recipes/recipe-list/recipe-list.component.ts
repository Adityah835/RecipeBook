import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe('Fried Chicken Sandwich', 'A simple fried chicken sandwich', 'https://easychickenrecipes.com/wp-content/uploads/2019/06/fried-chicken-sandwich-4-of-7.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
