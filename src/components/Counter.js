import { useDispatch,useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { decrement, increase, increment, toggle } from '../utils/helpers';

const Counter = () => {
  const dispatch =useDispatch()
  const {counter,toggleCounter} = useSelector((state)=>state)
 
const incrementHandler = ()=>{
  dispatch(increment())
}
const decrementHandler =()=>{
  dispatch(decrement())
}
  const toggleCounterHandler = () => {
    dispatch (toggle())
  };
  const increaseHandler  =() =>{
    dispatch(increase(10))
  }
  

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>INCREMENT</button>
      <button onClick={decrementHandler}>DECREMENT</button>
      <button onClick={increaseHandler}> Increase  </button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      
    </main>
  );
};

export default Counter;
