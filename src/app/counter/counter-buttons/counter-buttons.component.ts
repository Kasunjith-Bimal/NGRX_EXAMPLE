import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {

  constructor(private store:Store<{counter:CounterState}>){

  }
  onIncriment(){
    this.store.dispatch(increment())
  }

  onDecriment(){
    this.store.dispatch(decrement())
  }

  onReset(){
    this.store.dispatch(reset())
  }
}
