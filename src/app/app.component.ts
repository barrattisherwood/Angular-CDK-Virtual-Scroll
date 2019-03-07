import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  @ViewChild('gridtemplate') elementView: ElementRef;
  numbers: number[] = [];
  title = 'Virtual Scroll Prototype';
  public gridHeight = 300;

  constructor() {
    console.log('elementView', this.elementView);
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(this.randomIntFromInterval(1, 100));
    }
  }

  ngOnInit() {
    debugger;
    this.resize();
  }

  public resize(): void {
    // The Grid height is actually applied to the content area, not as total
    // This is **a bug** that will be fixed soon.
    this.gridHeight = this.elementView.nativeElement.offsetHeight - 100;
  }

  randomIntFromInterval(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
