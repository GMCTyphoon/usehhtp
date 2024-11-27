import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const userInput = useSelector((state) => state.userInput);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{userInput.title}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment by 10
      </button>
      <div>{count}</div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
