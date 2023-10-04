'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout, toggleModerator } from '@/redux/features/auth-slice';
import { AppDispatch } from '@/redux/store';

const Login = () => {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const onClickLogin = () => {
    dispatch(login(username));
  };
  const onClickLogout = () => {
    dispatch(logout());
  };
  const onClickToggle = () => {
    dispatch(toggleModerator());
  };

  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <br />
      <button onClick={onClickLogin}>Login</button>
      <br />
      <button onClick={onClickLogout}>Logout</button>
      <br />
      <button onClick={onClickToggle}>Toggle Moderator Status</button>
    </div>
  );
};

export default Login;
