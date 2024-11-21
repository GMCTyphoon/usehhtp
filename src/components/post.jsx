import { useRef } from "react";
import useHttp from "../hooks/useHttp";
import PropTypes from "prop-types";
import styles from "./post.module.css";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

const PostTodo = ({ onDataChange }) => {
  const { error, sendRequest } = useHttp(
    "https://jsonplaceholder.typicode.com/posts",
    requestConfig
  );
  const dataRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const inputData = {
      title: dataRef.current.value,
      id: new Date().toISOString(),
    };
    sendRequest(
      JSON.stringify({
        title: inputData.title,
        id: new Date().toISOString(),
      })
    );

    onDataChange(inputData);
    dataRef.current.value = "";
  };

  return (
    <>
      <form className={styles} onSubmit={submitHandler}>
        <div>
          <label htmlFor="data">Input data</label>
          <input id="data" ref={dataRef} />
          {error && <p> Failed to submit order message={error} </p>}
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

PostTodo.propTypes = {
  onDataChange: PropTypes.func.isRequired,
};

export default PostTodo;
