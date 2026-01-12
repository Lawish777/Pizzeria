import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { CartService } from '../cart.service'; // Ensure this path is correct

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // Array to store pizza data fetched from the database
  pizzas: any[] = [];

  constructor(
    private pizzaService: PizzaService, 
    private cartService: CartService // Injecting CartService to update the navbar
  ) { }

  ngOnInit(): void {
    // Fetching the list of pizzas from your backend service
    this.pizzaService.getPizzas().subscribe({
      next: (data) => {
        // Initialize the 'isAdded' property to false for each pizza
        this.pizzas = data.map(p => ({ ...p, isAdded: false }));
      },
      error: (err) => {
        console.error("Error fetching pizzas:", err);
      }
    });
  }

  /**
   * Toggles the pizza state between added and removed.
   * Updates the global CartService which in turn updates the Navbar count.
   */
  toggleCart(pizza: any): void {
    // Flip the local UI state
    pizza.isAdded = !pizza.isAdded;

    if (pizza.isAdded) {
      // Logic to add the item to the global cart
      this.cartService.addItem(pizza);
      console.log(`${pizza.name} added to cart.`);
    } else {
      // Logic to remove the item from the global cart using its ID
      this.cartService.removeItem(pizza.id);
      console.log(`${pizza.name} removed from cart.`);
    }
  }
}