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
    <div style={{ backgroundColor: '#0e7dff', padding: '10px', height: '10px', width: '1375px',textAlign: 'center', borderRadius: '0px',color: 'white',}}>
      <h2>User List</h2>
      <div className="user-cards" style={{ display: 'flex', marginBottom: '10px' }}>
        {users.map(user => (
          <div style={{ marginRight: '40px' , border: '1px solid #000000', padding: '10px',borderRadius: '10px'}}>
          <Link key={user.id} to={`/user/${user.id}`} className="user-card">
            <img src={user.avatar} alt={`Avatar of ${user.first_name}`} 
            style={{ marginBottom: '10px', border: '1px solid #000000', padding: '10px',borderRadius: '10px'}} />
            <h3>Name: {user.first_name}</h3>
            <h6>Email: {user.email}</h6>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
