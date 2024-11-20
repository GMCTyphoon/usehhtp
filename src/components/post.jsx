import { useRef } from "react";
import useHttp from "../hooks/useHttp";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

export default function PostTodo() {
  const { error, sendRequest } = useHttp(
    "https://jsonplaceholder.typicode.com/posts",
    requestConfig
  );
  const dataRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const inputData = dataRef.current;
    sendRequest(JSON.stringify({ title: inputData.value }));
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="data">Input data</label>
          <input id="data" ref={dataRef} />
          {error && <p> Failed to submit order message={error} </p>}
        </div>
        <button>Send</button>
      </form>
    </>
  );
}
