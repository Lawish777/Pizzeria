import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzaUrl = 'http://localhost:5000/api/pizzas';
  private ingredientUrl = 'http://localhost:5000/api/ingredients';


  constructor(private http:HttpClient) { }

  getPizzas(): Observable<any[]> { 
    return this.http.get<any[]>(this.pizzaUrl);
  }

  getIngredients(): Observable<any[]> {
    return this.http.get<any[]>(this.ingredientUrl);
  }
}
