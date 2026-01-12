import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-buildpizza',
  templateUrl: './buildpizza.component.html',
  styleUrls: ['./buildpizza.component.css']
})
export class BuildpizzaComponent implements OnInit {
  ingredients: any[] = [];
  totalCost: number = 0;

  constructor(
    private pizzaService: PizzaService,
    public cartService: CartService // Accessing your existing addItem method
  ) { }

  ngOnInit(): void {
    this.pizzaService.getIngredients().subscribe((data) => {
      this.ingredients = data;
    });
  }

  // Updates the cost display in real-time
  // Inside your BuildpizzaComponent
onCheckboxChange(price: any, event: any) {
  // Convert price to a number to prevent side-by-side text joining
  const numericPrice = Number(price); 

  if (event.target.checked) {
    this.totalCost = this.totalCost + numericPrice; // Mathematical addition
  } else {
    this.totalCost = this.totalCost - numericPrice; // Mathematical subtraction
  }
}

  // Uses your existing service without changing any logic
  buildPizza() {
    if (this.totalCost === 0) {
      alert("Please select at least one ingredient!");
      return;
    }

    const customPizza = {
      _id: 'built-' + Date.now(), // Unique ID for your removeItem function
      tname: 'Custom Pizza',
      price: this.totalCost,
      qty: 1,
      image: 'assets/OIP.jpg', // Using your logo or a default pizza icon
      type: 'veg'
    };

    this.cartService.addItem(customPizza);
    alert("Ingredients added to cart!");
  }
}