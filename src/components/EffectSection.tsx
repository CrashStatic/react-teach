import Button from "./button/Button";
import Modal from "./modal/Modal";
import { useEffect, useState} from "react";
import useInput from "../hooks/useInput";

interface User {
  id: number;
  name: string;
}

export default function EffectSection() {
  const input = useInput();
  const [modal, setModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users: User[] = await response.json();
      setUsers(users);
      setLoading(false);
    }

    fetchUsers();
  }, [])

  return (
    <section>
      <h2>Effects</h2>

      <Button style={{marginBottom: '1rem'}} onClick={() => setModal(true)}>Открыть информацию</Button>

      <Modal open={modal}>
        <h2>Hello from modal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis porta tortor. Aenean mattis, erat
          at condiment tincidunt, eros augue facilisis quam, vel pharetra leo nibh sit amet nisl.
        </p>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>

      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          <input type="text" className='control' {...input} />
          <ul>
            {users
              .filter((user) => user.name.toLowerCase().includes(input.value.toLowerCase()))
              .map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </>
      )
      }
    </section>
  )
}
