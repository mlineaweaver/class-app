import { PizzaEntity } from './../../../../api/lib/api-interfaces';
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, tap } from "rxjs";
import { PizzaResponse, PizzaService } from "./pizzas.service";

@Injectable({providedIn: 'root'})
export class PizzasStateService {
    private readonly pizzas = new BehaviorSubject<PizzaEntity[]>([])
    constructor(private pizzasService: PizzaService) {}

    loadPizzaPreset(): Observable<PizzaEntity[]> {
        return this.pizzasService.getPizzaPresets()
        .pipe(
            map((data: PizzaResponse) => data.pizzas),
            tap(pizzas => {
                this.pizzas.next(pizzas);
            })
         );
    }
}

