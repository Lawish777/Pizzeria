import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit , DoCheck {

  cartCount : number = 0;

  constructor(private cartService : CartService) {}

  ngOnInit() :void {
    this.cartCount = this.cartService.getCount();
}

ngDoCheck() : void {
  this.cartCount = this.cartService.getCount();
}
  
}
