import { Link } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>Dashboard</h1>
      <p>Bienvenido a la aplicación de citas médicas</p>

      <div style={{ marginTop: '30px' }}>
        <h2>Accesos Rápidos:</h2>
        <ul>
          <li><Link to="/my-appointments">Mis Citas</Link></li>
          <li><Link to="/new-appointment">Nueva Cita</Link></li>
          <li><Link to="/calendar">Calendario</Link></li>
          <li><Link to="/dates-by-day">Citas por Día</Link></li>
          <li><Link to="/centers">Centros</Link></li>
          <li><Link to="/profile">Mi Perfil</Link></li>
        </ul>
      </div>
    </div>
  );
}

