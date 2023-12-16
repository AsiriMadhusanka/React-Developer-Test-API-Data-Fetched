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
        <button onClick={handleBackClick}>Back</button>
      <h2>User Profile</h2>
      {user && (
        <div>
          
          <p>Name: {user.first_name} {user.last_name}</p>
          <p>Email: {user.email}</p>
          <img src={user.avatar} alt={`Avatar of ${user.first_name}`} />
        </div>
      )}
    </div>
  );
};

export default UserProfile;
