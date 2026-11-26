import { Link } from 'react-router-dom';
import { logout } from '../services/authService';

export default function Navbar() {
  const handleLogout = () => {
    logout();
  };

  return (
    <nav style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/dashboard" style={{ marginRight: '20px' }}>Dashboard</Link>
        <Link to="/my-appointments" style={{ marginRight: '20px' }}>Mis Citas</Link>
        <Link to="/new-appointment" style={{ marginRight: '20px' }}>Nueva Cita</Link>
        <Link to="/calendar" style={{ marginRight: '20px' }}>Calendario</Link>
        <Link to="/dates-by-day" style={{ marginRight: '20px' }}>Citas por Día</Link>
        <Link to="/centers" style={{ marginRight: '20px' }}>Centros</Link>
        <Link to="/profile" style={{ marginRight: '20px' }}>Perfil</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
