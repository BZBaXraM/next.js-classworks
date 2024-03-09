interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
}

interface UserDetailsProps {
  user: User;
}

export default function UserDetails({ user }: UserDetailsProps) {
  return (
    <div>
      <h1>User Details</h1>
      <h2>User Name: {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company Name: {user.company.name}</p>
    </div>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await response.json();
  const paths = data.map((user: User) => ({
    params: {
      userId: user.id.toString(),
    },
  }));

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps = async (context: any) => {
  const { userId } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const data = await response.json();

  return {
    props: {
      user: data,
    },
  };
};
