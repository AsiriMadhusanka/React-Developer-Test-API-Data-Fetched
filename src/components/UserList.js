// UserList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=1');
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <div className="user-cards">
        {users.map(user => (
          <Link key={user.id} to={`/user/${user.id}`} className="user-card">
            <img src={user.avatar} alt={`Avatar of ${user.first_name}`} />
            <p>Name: {user.first_name}</p>
            <p>Email: {user.email}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserList;
