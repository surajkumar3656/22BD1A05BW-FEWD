import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm'; // move the logic here

export default function Login() {
  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
}
