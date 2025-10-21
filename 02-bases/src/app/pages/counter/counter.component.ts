import { Component } from "@angular/core";

@Component({
  template: `
  <h1>Counter: {{ counter + 1 }}</h1>
  <button (click)="increaseBy(1)"> +1</button>
  `
})

export class CounterComponent  {
  counter = 10

  increaseBy(value: number){
    this.counter += value
  }
}
