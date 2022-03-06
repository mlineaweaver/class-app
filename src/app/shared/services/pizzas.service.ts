import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PizzaEntity, PizzaSize } from "api/lib/api-interfaces";
import { Observable, map } from "rxjs";

export interface PizzaForm {
    size: PizzaSize;
    toppings: string[];
  }
export interface PizzaResponse {
    msg: string;
    pizzas: PizzaEntity[];
}

@Injectable({
    providedIn: 'root',
})
export class PizzaService {
    constructor(private http: HttpClient) {}

    getPizzaPresets(): Observable<PizzaResponse> {
        return this.http.get<PizzaResponse>('/api/pizzas/presets');
        
    }
    savePizzas(pizzas: PizzaForm[]): Observable<PizzaEntity[]> {
        return this.http.post<PizzaEntity[]>('/api/pizzas', { pizzas });
      }
}