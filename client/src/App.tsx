import { useEffect } from 'react';

import { axios } from '@/lib';

export const App = () => {
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await axios.get('/users').then((res) => res.data);
      console.log('[users]:', users);
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>Misfit</h1>
    </div>
  );
};
