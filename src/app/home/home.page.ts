import { Component } from '@angular/core';
import { Food } from '../models/food.model';
import { FoodService } from './../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  itemsEat: Food[];
  public nome = 'Amaury Gonçalves';
  public imagemUrl = 'https://i.pravatar.cc/300';

  constructor(private foodService: FoodService) {
    this.itemsEat = foodService.getFoods();
  }

  public getValor(): number {
    return 4;
  }
}
