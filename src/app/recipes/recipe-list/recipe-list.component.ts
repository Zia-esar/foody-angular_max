import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('White Karahi',
    'A special dish made of chicken hello world',
    'https://thumbs.dreamstime.com/z/square-shape-classic-italian-margarita-pizza-served-wooden-pan-freshly-baked-hot-spicy-179861418.jpg'),
    new Recipe('White Karahi',
    'A special dish made of chicken hello world',
    'https://thumbs.dreamstime.com/z/square-shape-classic-italian-margarita-pizza-served-wooden-pan-freshly-baked-hot-spicy-179861418.jpg'),
  ];

  constructor() { }

  ngOnInit(): void { }

}
