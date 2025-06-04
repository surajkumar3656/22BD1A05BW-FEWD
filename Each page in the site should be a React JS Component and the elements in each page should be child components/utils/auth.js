export const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user1', password: 'password1' },
  ];
  
  export const authenticate = (username, password) => {
    return users.some(user => user.username === username && user.password === password);
  };
  