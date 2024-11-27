import { useRef } from "react";
import useHttp from "../../hooks/useHttp";
import styles from "./todos.module.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { setTitle } from "./inputSlice";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

const PostTodo: React.FC = () => {
  const dispatch = useDispatch();

  const { error, sendRequest } = useHttp(
    "https://jsonplaceholder.typicode.com/posts",
    requestConfig
  );
  const dataRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const userInput = {
      title: dataRef.current!.value,
      id: new Date().toISOString(),
    };
    dispatch(setTitle(userInput));
    console.log("form submitted", userInput);
    sendRequest(JSON.stringify(userInput));
  };

  return (
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.formDiv}>
          <label className={styles.formDivLabel} htmlFor="data">
            Input data
          </label>
          <input className={styles.formDivInput} id="data" ref={dataRef} />
          {error && <p> Failed to submit order message={error} </p>}
        </div>
        <button className={styles.button} type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default PostTodo;
