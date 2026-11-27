import { useState } from 'react';
import { toast } from 'react-toastify';
import { createAppointment } from '../services/appointmentService';
import { formatAppointmentDate, getNextHour, isFutureAppointment } from '../utils/appointmentDate';

export default function NewAppointmentPage() {
  const [center, setCenter] = useState('');
  const [date, setDate] = useState(getNextHour);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!center || !date) {
      toast.error('Completa todos los campos');
      return;
    }

    const formattedDate = formatAppointmentDate(date);
    if (!formattedDate) {
      toast.error('Selecciona una fecha válida y una hora en punto');
      return;
    }

    if (!isFutureAppointment(date)) {
      toast.error('Selecciona una fecha y hora futuras');
      return;
    }

    try {
      setLoading(true);
      await createAppointment(center, formattedDate);
      toast.success('Cita creada exitosamente');
      setCenter('');
      setDate(getNextHour());
    } catch (error) {
      const message = error?.error || error?.msg || error?.message;
      toast.error(typeof message === 'string' ? message : 'Error al crear cita');
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
          <label style={{ display: 'block', marginBottom: '5px' }}>Fecha y hora en punto</label>
          <input
            type="datetime-local"
            step="3600"
            min={getNextHour()}
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
