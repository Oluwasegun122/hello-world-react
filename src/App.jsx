import React, { useState, useEffect } from "react";
import NaijaList from "./components/NaijaList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Using a reliable API with Nigerian user data
        const response = await fetch(
          "https://randomuser.me/api/?results=5&nat=NG"
        );
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        setUsers(
          data.results.map((user) => ({
            id: user.login.uuid,
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            phone: user.phone,
            location: `${user.location.city}, Nigeria`,
          }))
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="app">
      <h1>Nigerian Users Directory</h1>
      <NaijaList items={users} loading={loading} error={error} />
    </div>
  );
}

export default App;
