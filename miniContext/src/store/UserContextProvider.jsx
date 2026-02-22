import { useState, useEffect } from 'react';
import UserContext from './UserContext';
import dummyData from './data.json';

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating a fetch call with dummy JSON data
        const fetchData = () => {
            setTimeout(() => {
                setProfiles(dummyData);
                setLoading(false);
            }, 1000); // 1 second delay to simulate network request
        };

        fetchData();
    }, []);

  return (
    <UserContext value={{ user, setUser, profiles, loading }}>
      {children}
    </UserContext>
  );
};

export default UserContextProvider;
 