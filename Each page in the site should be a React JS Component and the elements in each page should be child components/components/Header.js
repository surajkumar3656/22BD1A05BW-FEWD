import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ background: '#222', padding: '1rem', color: '#fff' }}>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/login">Login</Link>
    </header>
  );
}
