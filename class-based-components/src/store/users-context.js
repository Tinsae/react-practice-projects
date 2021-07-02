import React from 'react';
const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

const UsersContext = React.createContext({
  users: DUMMY_USERS
});

export default UsersContext;