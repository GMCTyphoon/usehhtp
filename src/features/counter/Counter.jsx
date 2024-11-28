import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../components/posts/inputSlice";

export function Counter() {
  const countContent = useSelector((state) => state.generalSlice.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(increment(10))}>Increment by 10</button>
      <div>{countContent}</div>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
  );
}
