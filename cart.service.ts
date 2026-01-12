import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {

  cart: any[] = [];

  addItem(item: any) {
    const existing = this.cart.find(i => i._id === item._id);
    if (existing) {
      existing.qty++;
    } else {
      this.cart.push({ ...item, qty: 1 });
    }
  }

  removeItem(id: string) {
    this.cart = this.cart.filter(i => i._id !== id);
  }

  increase(id: string) {
    this.cart.find(i => i._id === id).qty++;
  }

  decrease(id: string) {
    const item = this.cart.find(i => i._id === id);
    item.qty--;
    if (item.qty === 0) this.removeItem(id);
  }

  getCart() {
    return this.cart;
  }

  getCount(): number {
    return this.cart.reduce((sum, i) => sum + (i.qty || 0), 0);
  }

  getTotal() {
    return this.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  }

  clear() {
    this.cart = [];
  }
}
