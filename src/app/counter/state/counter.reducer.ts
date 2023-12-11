import { createReducer, on } from "@ngrx/store"
import { initialState } from "./counter.state"
import { changeChanelName, customIncrement, decrement, increment, reset } from "./counter.action"
import { Action } from "@ngrx/store/src";

const _counterReducer = createReducer(
    initialState,
    on(increment,(state)=>{
    return {
    ...state,
    counter : state.counter + 1
    };
    }),
    on(decrement,(state)=>{
        return {
        ...state,
        counter : state.counter - 1
        };
    }),
    on(reset,(state)=>{
        return {
        ...state,
        counter : 0
        };
    }),
    on(customIncrement,(state,action)=>{
        return {
        ...state,
        counter : Number(state.counter) + Number((action.count == undefined) ? 0 : action.count),
        };
    }),
    on(changeChanelName,(state)=>{
        return{
        ...state,
        chanelName : "kasunYsoft"
        };
    })

);

export function counterReducer(state: any ,action: any){
    return _counterReducer(state,action)
}