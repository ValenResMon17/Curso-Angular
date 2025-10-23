import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CounterComponent  {
  counter = 10
  counterSignal = signal(10)

  constructor(){
    // setInterval(() => {
    //   this.increaseBy(1);
    //   console.log('Tick');
    // }, 2000)
  };

increaseBy(value: number) {
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update((current) => current + value);
  }

  reiniciar(){
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
