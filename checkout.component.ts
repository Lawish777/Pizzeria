
// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';

// @Component({
//   selector: 'app-checkout',
//   templateUrl: './checkout.component.html',
//   styleUrls: ['./checkout.component.css']
// })
// export class CheckoutComponent implements OnInit {

//   constructor(public cartService: CartService) { }

//   ngOnInit(): void {
//     // No extra logic needed as we call cartService directly in HTML
//   }

//   // Optional: Add a simple window alert for the Pay button
//   onPay() {
//     alert('Thank you for your order!');
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void { }

  // Finds the Custom Pizza price to update the Ingredients row
  getIngredientsTotal(): number {
    const customItem = this.cartService.getCart().find(item => item.tname === 'Custom Pizza');
    if (customItem) {
      // Use Number() to ensure math calculation, not side-by-side text
      return Number(customItem.price) * Number(customItem.qty);
    }
    return 0;
  }

  // Calculates standard pizza total for the summary
  getPizzaOnlyTotal(): number {
    return this.cartService.getTotal() - this.getIngredientsTotal();
  }
}