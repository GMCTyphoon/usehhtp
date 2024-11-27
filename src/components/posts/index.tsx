import { useEffect, useMemo, useState } from "react";
import useHttp from "../../hooks/useHttp";
import PostTodo from "./post";
import styles from "./todos.module.scss";
import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./inputSlice";

const requestConfig = {};
const itemsOnPage = 5;

export const Todos: React.FC = () => {
  const dispatch = useDispatch();
  const dataStore = useSelector((state: any) => state.generalSlice.dataStore);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { data, isLoading, error } = useHttp(
    "https://jsonplaceholder.typicode.com/posts",
    requestConfig,
    []
  );

  useEffect(() => {
    if (data.length) {
      dispatch(setData(data));
    }
  }, [data]);

  // Логика страниц
  const pageContent = useMemo(() => {
    const start = pageNumber * itemsOnPage - itemsOnPage;
    const end = pageNumber * itemsOnPage;

    return dataStore.slice(start, end);
  }, [pageNumber, dataStore]);

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
      <PostTodo />
      <ul className={styles.ul}>
        {pageContent.map((item: any) => (
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
