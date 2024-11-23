import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import PostTodo from "./post";
import styles from "./todos.module.css";
import classNames from "classnames";

const requestConfig = {};
const itemsOnPage = 5;

export function Todos() {
  const [dataStore, setDataStore] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
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

  const userInputHandler = (newData) => {
    setDataStore(dataStore.concat([newData]));
  };

  // Логика страниц
  const start = pageNumber * itemsOnPage - itemsOnPage;
  const end = pageNumber * itemsOnPage;
  const pagesCountArray = new Array();
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
            className={classNames(styles.li, styles.paginationLi, {
              [styles.active]: pageNumber === index + 1,
            })}
            key={item}
            onClick={() => {
              setPageNumber(index + 1);
            }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
