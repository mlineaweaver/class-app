import { PizzaService } from './../shared/services/pizzas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly pizzas$ = this.pizzasService.getPizzaPresets();

  constructor(private pizzasService: PizzaService) {}
}
