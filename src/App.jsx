import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './constants/AuthContext';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import DashboardAsesor from './components/DashboardAsesor/Dashboard';
import Inventario from './components/Inventario';
import DashboardDistribuidor from './components/DashboardDistribuidor/Dashboard';
import DashboardTeleventas from './components/DashboardTeleventas/Dashboard';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } 
          />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/catalogo" element={<PrivateRoute>
            <Inventario/>
          </PrivateRoute>} />
          <Route path="/dashboard-asesor" element={<PrivateRoute>
            <DashboardAsesor/>
          </PrivateRoute>} />
          <Route path="/dashboard-distribuidor" element={<PrivateRoute>
            <DashboardDistribuidor/>
          </PrivateRoute>} />
          <Route path="/dashboard-televentas" element={<PrivateRoute>
            <DashboardTeleventas/>
          </PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;