import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter: number = 0;



  increase(value: number):void {
    this.counter = this.counter + value;
  }

  resetCounter(){
    this.counter = 0;
  }
}
