import { useState } from "react";
import useHttp from "../hooks/useHttp";
import PostTodo from "./post";
import styles from "./todos.module.css";

const requestConfig = {};
const litsOnPage = 5;

export default function Todos() {
  const [data1, setData1] = useState([]);
  const { data, isLoading, error } = useHttp(
    "https://jsonplaceholder.typicode.com/posts",
    requestConfig,
    []
  );

  const data2 = data.concat(data1);
  const [todosOnPage, setTodosOnPage] = useState([
    { title: "1", id: "1" },
    { title: "2", id: "2" },
    { title: "3", id: "3" },
  ]);
  const handleDataChange = (newData) => {
    setData1((prevData) => [...prevData, newData]);
    todosOnPage.length < litsOnPage &&
      setTodosOnPage((prevData) => [...prevData, newData]);
  };

  // Логика страниц начало
  let postsLength = data2.length;
  let pages = Math.ceil(postsLength / litsOnPage);
  // console.log(postsLength);
  let arrayPages = new Array();
  // console.log(arrayPages);
  for (let i = 1; i <= pages; i++) {
    arrayPages.push(i);
  }
  // console.log(arrayPages);
  // логика страниц конец
  const pageContentHandler = (event) => {
    const pageNum = +event.target.textContent;
    const end = litsOnPage * pageNum;
    const start = end - litsOnPage;
    const todosPage = data2.slice(start, end);

    setTodosOnPage(todosPage);
    console.log(pageNum);
    console.log(todosPage);
  };
  if (isLoading) {
    return <p className="center">Fethching todos...</p>;
  }

  if (error) {
    return <p>Failed to fetch todos</p>;
  }

  return (
    <>
      <PostTodo onDataChange={handleDataChange} />
      <ul className={styles.ul}>
        {todosOnPage.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <ul className={styles.pagination}>
        {arrayPages.map((item) => (
          <li key={item} onClick={pageContentHandler}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
