import Button from "./button/Button.jsx";
import Modal from "./modal/Modal.jsx";
import {useCallback, useEffect, useState} from "react";

export default function EffectSection() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, [])

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers])

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
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>)}
    </section>
  )
}
