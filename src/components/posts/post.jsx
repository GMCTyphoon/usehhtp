import { useRef } from "react";
import useHttp from "../../hooks/useHttp";
import PropTypes from "prop-types";
import styles from "./post.module.css";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

const PostTodo = ({ onUserInput }) => {
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

    onUserInput(inputData);
    dataRef.current.value = "";
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

PostTodo.propTypes = {
  onUserInput: PropTypes.func.isRequired,
};

export default PostTodo;
