import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public pageTitle: string = 'Welcome to Pizzeria';

  constructor() { 
    // Dependency injection (if any) happens here
  }

  /**
   * ngOnInit is a lifecycle hook that runs after Angular has 
   * initialized all data-bound properties of a directive.
   */
  ngOnInit(): void {
    console.log('Home Component Initialized');
  }

}
