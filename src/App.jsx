// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Login from './pages/Auth/Login';
import Home from './pages/Home';
import Events from './pages/Eventos';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/events"
        element={
          <Layout>
            <Events />
          </Layout>
        }
      />
    </Routes>
  );
}
