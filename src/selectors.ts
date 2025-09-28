import type { state } from "./store"
export function happyCountSelector(State:state){
    return State.happyCount;
}
export function SadCountSelector(State:state){
    return State.sadCount;
}