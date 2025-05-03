import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Login from './pages/Auth/Login';
import Home from './pages/Home';
import Events from './pages/Eventos';
import LayoutCompra from './pages/Compra/LayoutCompra';

export default function App(): JSX.Element {
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
