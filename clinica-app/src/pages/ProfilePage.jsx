import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProfile } from '../services/userService';
import { toast } from 'react-toastify';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (error) {
        toast.error('Error al cargar perfil');
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) return <div style={{ padding: '40px' }}>Cargando...</div>;

  return (
    <div style={{ padding: '40px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Mi Perfil</h1>

      {profile && (
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
          <p><strong>Usuario:</strong> {profile.username}</p>
          <p><strong>Nombre:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Teléfono:</strong> {profile.phone}</p>
          <p><strong>Fecha de nacimiento:</strong> {profile.date}</p>
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <Link to="/dashboard">Volver al dashboard</Link>
      </div>
    </div>
  );
}

