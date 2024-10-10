import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Fetch current user information from the Rails backend
        const response = await axios.get('/users/current');
        setIsAdmin(response.data.admin); // Check if the user is an admin
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUser();
  }, []);

  if (!isAdmin) {
    return <p>You are not authorized to view this page</p>;
  }

  return (
    <div>
      <h1>Welcome, Admin!</h1>
      {/* Add admin-specific content here */}
    </div>
  );
};

export default AdminPage;
