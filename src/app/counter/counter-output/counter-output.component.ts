import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import {  Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit{
 //public count: any;
// public counterSubscribe!: Subscription;
 counter$!: Observable<number>;
 constructor(private store:Store<{counter:CounterState}>){

 }
  // ngOnDestroy(): void {
  //   if(this.counterSubscribe){
  //     this.counterSubscribe.unsubscribe();
  //   }
  // }
  ngOnInit(): void {
  //  this.counterSubscribe = this.store.select('counter').subscribe((data:any)=>{
  //     this.count = data.counter;
  //   }); 
   this.counter$ = this.store.select(getCounter)
  }

 


}
