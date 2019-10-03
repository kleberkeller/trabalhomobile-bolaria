import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  public getFoods(): Food[] {
    const itemsEat: Food[] = [
      {
        nome: 'Juice',
        quantidade: 2
      },
      {
        nome: 'Rice',
        quantidade: 4
      },
      {
        nome: 'beef',
        quantidade: 10
      }
    ];

    return itemsEat;

  }
}
