import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  numbers: number[] = [];
  title = 'Virtual Scroll Prototype';

  constructor() {
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(this.randomIntFromInterval(1, 100));
    }
  }

  randomIntFromInterval(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
