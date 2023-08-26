import { DECREMENT,INCREASE,INCREMENT,TOGGLECOUNTER } from "./constant";


export const increment = () =>{
    return{type:INCREMENT}
}
export const decrement = () =>{
  return{type:DECREMENT}
}
export const increase = (payload) =>{
    return{type:INCREASE,payload:payload}
}
export const toggle= () =>{
    return{type:TOGGLECOUNTER}
}