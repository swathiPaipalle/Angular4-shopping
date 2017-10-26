import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output('recipeWasSelected') recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simply test', 'http://xantilicious.com/wp-content/uploads/2016/11/IMG_0202-copy-1.jpg'),
    new Recipe('New recipe', 'Add more spices', 'https://static.pexels.com/photos/5317/food-salad-restaurant-person.jpg')
    ];
  
  constructor() {

  }

  ngOnInit() {
  }

  onRecipeSelected(selectedRecipe: Recipe) {
    console.log(selectedRecipe);
    this.recipeWasSelected.emit(selectedRecipe);
  }

}
