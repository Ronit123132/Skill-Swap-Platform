// App.jsx
import React, { useEffect, useState } from 'react';
import  './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    skillsOffered: '',
    skillsWanted: '',
    availability: '',
    isPublic: true,
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      skillsOffered: formData.skillsOffered.split(',').map(skill => skill.trim()),
      skillsWanted: formData.skillsWanted.split(',').map(skill => skill.trim()),
    };

    fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSend),
    })
    .then(() => {
      alert('User added!');
      setFormData({ name: '', location: '', skillsOffered: '', skillsWanted: '', availability: '', isPublic: true });
    });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Skill Swap Platform</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <strong>{user.name}</strong> offers {user.skillsOffered.join(', ')} and wants {user.skillsWanted.join(', ')}
          </li>
        ))}
      </ul>

      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} /><br/>
        <input placeholder="Location" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} /><br/>
        <input placeholder="Skills Offered (comma-separated)" value={formData.skillsOffered} onChange={e => setFormData({...formData, skillsOffered: e.target.value})} /><br/>
        <input placeholder="Skills Wanted (comma-separated)" value={formData.skillsWanted} onChange={e => setFormData({...formData, skillsWanted: e.target.value})} /><br/>
        <input placeholder="Availability" value={formData.availability} onChange={e => setFormData({...formData, availability: e.target.value})} /><br/>
        <label>
          <input type="checkbox" checked={formData.isPublic} onChange={e => setFormData({...formData, isPublic: e.target.checked})} />
          Make Profile Public
        </label><br/>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default App;