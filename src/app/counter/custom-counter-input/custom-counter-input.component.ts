import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeChanelName, customIncrement } from '../state/counter.action';
import { Observable } from 'rxjs';
import { getChanelName } from '../state/counter.selector';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value? : number;
  chanelName? : Observable<string>;
  
  constructor(private store :Store<{counter:CounterState}>) {
   
    
  }
  ngOnInit(): void {
    this.chanelName = this.store.select(getChanelName);
  }
  onAddCounter(): void{
    
    this.store.dispatch(customIncrement({count:this.value}))
  }

  onChangeChanelName():void{
   this.store.dispatch(changeChanelName());
  }

}
