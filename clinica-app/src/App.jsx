import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isAuthenticated } from './services/authService';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import MyAppointmentsPage from './pages/MyAppointmentsPage';
import NewAppointmentPage from './pages/NewAppointmentPage';
import DatesByDayPage from './pages/DatesByDayPage';
import CentersPage from './pages/CentersPage';
import CalendarPage from './pages/CalendarPage';

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default function App() {
  return (
    <BrowserRouter>
      {isAuthenticated() && <Navbar />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/my-appointments" 
          element={
            <ProtectedRoute>
              <MyAppointmentsPage />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/new-appointment" 
          element={
            <ProtectedRoute>
              <NewAppointmentPage />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/dates-by-day" 
          element={
            <ProtectedRoute>
              <DatesByDayPage />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/centers" 
          element={
            <ProtectedRoute>
              <CentersPage />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/calendar" 
          element={
            <ProtectedRoute>
              <CalendarPage />
            </ProtectedRoute>
          } 
        />
        
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
