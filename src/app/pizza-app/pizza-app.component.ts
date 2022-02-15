import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pizza-app',
  templateUrl: './pizza-app.component.html',
  styleUrls: ['./pizza-app.component.scss'],
})
export class PizzaAppComponent {
  activePizza = 0;

  prices = {
    small: { base: 9.99, size: 10 },
    meduim: { base: 11.99, size: 12 },
    large: { base: 13.99, size: 14 },
    'x-large': { base: 15.99, size: 16 },
  };
  pizzaForm = this.fb.group({
    pizzas: this.fb.array([this.createPizza()]),
  });

  get pizzas(): FormArray {
    return this.pizzaForm.get('pizzas') as FormArray;
  }
  get openPizza() {
    return this.visiblePizza;
  }

  set openPizza(index: number){
    this.visiblePizza = index;
    if (~index) {
      this.togglePizza(index);
    }
  }

  private visiblePizza = 0;

  constructor(private fb: FormBuilder) {}
   //pizza 1: {size, toppings }
    //pizza 2: {size, toppings }

  createPizza() {
    return this.fb.group({
      size: '',
      toppings: [[]],
    });
  }

  addPizza(){
    this.pizzas.push(this.createPizza());
    this.openPizza = this.pizzas.length - 1;
  }

  removePizza(index:number) {
    this.pizzas.removeAt(index);
    this.openPizza = this.pizzas.length -1;
  }

  togglePizza(index: number) {
    this.activePizza = index;
  }

  toFormGroup(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }
}
