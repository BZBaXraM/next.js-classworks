import Link from "next/link";

export default function UsersPage({ users }: any) {
  return (
    <div>
      <h1>Users Page</h1>
      <ul>
        {users.map((user: any) => (
          <Link key={user.id} href={`/users/${user.id}`}>
            <li>{user.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
