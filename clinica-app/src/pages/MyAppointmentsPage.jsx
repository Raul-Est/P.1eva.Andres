import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getMyAppointments, deleteAppointment } from '../services/appointmentService';

export default function MyAppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const loadAppointments = async () => {
      try {
        setLoading(true);
        const data = await getMyAppointments(controller.signal);
        setAppointments(data);
      } catch (error) {
        toast.error('Error al cargar citas');
      } finally {
        setLoading(false);
      }
    };

    loadAppointments();
    return () => controller.abort();
  }, []);

  const handleDelete = async (center, date) => {
    try {
      await deleteAppointment(center, date);
      toast.success('Cita cancelada');
      setLoading(true);
      const data = await getMyAppointments();
      setAppointments(data);
      setLoading(false);
    } catch (error) {
      toast.error('Error al cancelar cita');
      setLoading(false);
    }
  };

  if (loading) return <div style={{ padding: '40px' }}><p>Cargando...</p></div>;

  return (
    <div style={{ padding: '40px' }}>
      <h1>Mis Citas</h1>
      
      {appointments.length === 0 ? (
        <p>No tienes citas programadas</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ccc' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Centro</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Fecha</th>
              <th style={{ textAlign: 'center', padding: '10px' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((apt, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>{apt.center}</td>
                <td style={{ padding: '10px' }}>{apt.date}</td>
                <td style={{ textAlign: 'center', padding: '10px' }}>
                  <button
                    onClick={() => handleDelete(apt.center, apt.date)}
                    style={{
                      padding: '8px 16px',
                      backgroundColor: '#FFFAFC',
                      color: '#3a3a3a',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: '500'
                    }}
                  >
                    Cancelar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
