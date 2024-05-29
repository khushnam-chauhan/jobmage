import React, { useState, useEffect } from 'react';
import { deleteUser, changeUserRole, getAllUsers } from '../../../utils/api';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './UserList.css'; // Import the CSS file

function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeRole = async (userId, newRole) => {
    try {
      const user = users.find(user => user._id === userId);
      if (user.role !== newRole) {
        const confirmed = window.confirm(`Are you sure you want to change the role to ${newRole}?`);
        if (confirmed) {
          await changeUserRole(userId, newRole);
          setUsers(users.map(user => user._id === userId ? { ...user, role: newRole } : user));
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <button className="back-button" onClick={handleBackClick}>Back</button>
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="delete-button" onClick={() => handleDeleteUser(user._id)}>Delete</button>
                <select className="role-select" value={user.role} onChange={(e) => handleChangeRole(user._id, e.target.value)}>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                  <option value="employer">Employer</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
