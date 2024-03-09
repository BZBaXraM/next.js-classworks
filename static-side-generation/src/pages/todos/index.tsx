export default function TodosPage({ todo }: any) {
  return (
    <div>
      <h1>Todo Page</h1>
      <ul>
        {todo.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  return {
    props: {
      todos: data,
    },
  };
}
