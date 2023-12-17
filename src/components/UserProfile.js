// UserProfile.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Update import statement
import axios from 'axios';

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(response.data.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  const handleBackClick = () => {
    navigate(-1); // Use navigate(-1) to go back
  };

  return (
    <div>
        <button style={{
    backgroundColor: '#0e7dff',
    color: 'white',
    padding: '10px',
    borderRadius: '0px',
    cursor: 'pointer',
    width: '1375px',
    border: 'none',
    textAlign: 'left',
    paddingLeft: '10px',
  }} onClick={handleBackClick} >Back</button>
      <h2>User Profile</h2>
      {user && (
        <div>
          <img src={user.avatar} alt={`Avatar of ${user.first_name}`} style={{ maxWidth: '100%', maxHeight: '200px', marginBottom: '10px',position: 'absolute',top: '50%',  left: '40%', transform: 'translate(-50%, -50%)', border: '1px solid #000000', padding: '10px',borderRadius: '10px'}} />
          <div style={{ backgroundColor: '#f4f4f4', padding: '10px', height: '110px', width: '300px', borderRadius: '10px',position: 'absolute',
        top: '50%',  
        left: '70%',  
        transform: 'translate(-50%, -50%)', }}>
          <p>Name: {user.first_name} {user.last_name}</p>
          <p>Email: {user.email}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
