import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './pages/Home';
import Events from './pages/Eventos';
import LayoutCompra from './pages/Compra/LayoutCompra';
import EventInformation from './components/HomeContentNew/EventInformation/EventInformation';
import AuthCallback from './components/Auth/AuthCallback';
import ConfirmSignUp from './components/Auth/ConfirmSignUp';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/auth/callback" element={<AuthCallback />} />
      <Route path="/auth/confirm-signup" element={<ConfirmSignUp />} />
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
      <Route
        path="/event"
        element={
          <Layout>
            <EventInformation />
          </Layout>
        }
      />
      <Route
        path="/BuyProcces"
        element={
          <Layout>
            <LayoutCompra />
          </Layout>
        }
      />
    </Routes>
  );
} 