import React, { useContext } from 'react';
import UserContext from '../store/UserContext';

function Profile() {
  const { user, profiles, loading } = useContext(UserContext);
  return (
    <div>
      {!user ? null : <h2>Name is:- {user.userName}</h2>}
      {!user ? null : <h3>Password is:- {user.password}</h3>}

      <hr />
      <h2>Profiles from JSON (fetched via useEffect)</h2>

      {loading ? (
        <p>Loading profiles...</p>
      ) : (
        profiles.map((profile) => (
          <div
            key={profile.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              margin: '10px 0',
              borderRadius: '8px',
            }}
          >
            <h3>{profile.name}</h3>
            <p>Email: {profile.email}</p>
            <p>Role: {profile.role}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Profile;
