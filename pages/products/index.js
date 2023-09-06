import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Products() {
  const { data, isLoading, error } = useSWR("/api/products");

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <ul>
      {data.map(({ id, name, description }) => (
        <li key={id}>
          <span>
            Name: {name}, description: {description},
          </span>
        </li>
      ))}
    </ul>
  );
}
