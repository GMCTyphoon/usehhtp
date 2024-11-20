import useHttp from "../hooks/useHttp";

const requestConfig = {};

export default function Todos() {
  const { data, isLoading, error } = useHttp(
    "https://jsonplaceholder.typicode.com/posts",
    requestConfig,
    []
  );

  if (isLoading) {
    return <p className="center">Fethching todos...</p>;
  }

  if (error) {
    return <p>Failed to fetch todos</p>;
  }

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}
