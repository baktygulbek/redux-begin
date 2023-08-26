import { DECREMENT, INCREASE,INCREMENT,TOGGLECOUNTER,} from "../utils/constant";
  
  const initState = {
    counter: 0,
    toggleCounter: false,
  };
     export const counterReducer = (state = initState, action) => {
      if (action.type === INCREMENT) {
        return {
          ...state,
          counter: state.counter + 1,
        };
      }
      if (action.type === DECREMENT) {
        return {
          ...state,
          counter: state.counter - 1,
        };
      }
      if (action.type === TOGGLECOUNTER) {
        return {
          ...state,
          toggleCounter:!state.toggleCounter,
        };
      }
      if (action.type === INCREASE) {
        return {
          ...state,
          counter: state.counter + action.payload,
        };
      }
      return state;
  }
  
  