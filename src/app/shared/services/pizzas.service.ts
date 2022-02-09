import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PizzaEntity } from "api/lib/api-interfaces";
import { Observable, map } from "rxjs";


interface PizzaResponse {
    msg: string;
    pizzas: PizzaEntity[];
}

@Injectable({
    providedIn: 'root',
})
export class PizzaService {
    constructor(private http: HttpClient) {}

    getPizzaPresets(): Observable<PizzaEntity[]> {
        return this.http
        .get<PizzaResponse>('http://localhost:4000/api/pizzas/presets')
        .pipe(map((data) => data.pizzas));
    }
}