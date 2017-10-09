import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simply test', 'http://xantilicious.com/wp-content/uploads/2016/11/IMG_0202-copy-1.jpg')
    ];
  
  constructor() {
    
    
  }

  ngOnInit() {
  }

}
