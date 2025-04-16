import React from "react";
import UserCard from "./UserCard";

const NaijaList = ({ items, loading, error }) => {
  if (loading) return <div className="loading">Loading Nigerian data...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!items?.length) return <div className="empty">No records found</div>;

  return (
    <ul className="list">
      {items.map((user) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
};

export default NaijaList;
