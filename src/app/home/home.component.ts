import { Component } from '@angular/core';
import { PizzasStateService } from '../shared/services/pizzas-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly pizzas$ = this.pizzasStateService.loadPizzaPreset();

  constructor(private pizzasStateService: PizzasStateService) {}
}
