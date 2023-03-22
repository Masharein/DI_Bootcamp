import { useState, useEffect } from 'react';
import User from './User';
const API_URL = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  console.log(users)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        setUsers(json);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <h1>List of Users:</h1>
      {loading ? <h1>Loading...</h1> : users.map((user) => <User key={user.id} {...user} />)}
    </>
  );
};

export default Users;
