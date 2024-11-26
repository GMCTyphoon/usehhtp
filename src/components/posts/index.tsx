import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import PostTodo from "./post";
import styles from "./todos.module.scss";
import classNames from "classnames";
import React from "react";
import { Todo } from "./types";

const requestConfig = {};
const itemsOnPage = 5;

export const Todos: React.FC = () => {
  const [dataStore, setDataStore] = useState<Todo[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { data, isLoading, error } = useHttp(
    "https://jsonplaceholder.typicode.com/posts",
    requestConfig,
    []
  );

  useEffect(() => {
    if (data.length) {
      setDataStore(data);
    }
  }, [data]);

  const userInputHandler = (inputData: Todo) => {
    setDataStore((prevData) => {
      return prevData.concat(inputData);
    });
  };

  // Логика страниц
  const start = pageNumber * itemsOnPage - itemsOnPage;
  const end = pageNumber * itemsOnPage;
  const pagesCountArray: number[] = new Array();
  for (let i = 1; i <= Math.ceil(dataStore.length / itemsOnPage); i++) {
    pagesCountArray.push(i);
  }

  if (isLoading) {
    return <p className="center">Fethching todos...</p>;
  }

  if (error) {
    return <p>Failed to fetch todos</p>;
  }
  return (
    <>
      <PostTodo onUserInput={userInputHandler} />
      <ul className={styles.ul}>
        {dataStore.slice(start, end).map((item) => (
          <li className={styles.li} key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
      <ul className={styles.pagination}>
        {pagesCountArray.map((item, index) => (
          <li
            className={classNames(styles.li, styles.paginationItem, {
              [styles.active]: pageNumber === index + 1,
            })}
            key={index}
            onClick={() => {
              setPageNumber(index + 1);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
