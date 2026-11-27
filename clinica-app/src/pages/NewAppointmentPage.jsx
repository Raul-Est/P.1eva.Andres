import { useState } from 'react';
import { toast } from 'react-toastify';
import { createAppointment } from '../services/appointmentService';

export default function NewAppointmentPage() {
  const [center, setCenter] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!center || !date) {
      toast.error('Completa todos los campos');
      return;
    }

    try {
      setLoading(true);
      await createAppointment(center, date);
      toast.success('Cita creada exitosamente');
      setCenter('');
      setDate('');
    } catch (error) {
      toast.error('Error al crear cita');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '500px' }}>
      <h1>Nueva Cita</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Centro Médico</label>
          <input
            type="text"
            value={center}
            onChange={(e) => setCenter(e.target.value)}
            placeholder="Nombre del centro"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Fecha</label>
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '12px',
            backgroundColor: '#F9FCFF',
            color: '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1,
            fontWeight: '500'
          }}
        >
          {loading ? 'Creando...' : 'Crear Cita'}
        </button>
      </form>
    </div>
  );
}
