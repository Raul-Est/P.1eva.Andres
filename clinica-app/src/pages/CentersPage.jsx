import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getCenters, createCenter } from '../services/centerService';

export default function CentersPage() {
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [showForm, setShowForm] = useState(false);

  const loadCenters = async () => {
    try {
      setLoading(true);
      const data = await getCenters();
      setCenters(data);
    } catch (error) {
      toast.error('Error al cargar centros');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCenters();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !address) {
      toast.error('Completa todos los campos');
      return;
    }

    try {
      await createCenter(name, address);
      toast.success('Centro creado exitosamente');
      setName('');
      setAddress('');
      setShowForm(false);
      loadCenters();
    } catch (error) {
      toast.error('Error al crear centro');
    }
  };

  if (loading) return <div style={{ padding: '40px' }}><p>Cargando...</p></div>;

  return (
    <div style={{ padding: '40px' }}>
      <h1>Centros Médicos</h1>

      <button
        onClick={() => setShowForm(!showForm)}
        style={{
          marginBottom: '20px',
          padding: '10px 20px',
          backgroundColor: '#F8FFF7',
          color: '#333',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: '500'
        }}
      >
        {showForm ? 'Cancelar' : 'Agregar Centro'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre del centro"
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Dirección"
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#F8FFF7',
              color: '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            Crear
          </button>
        </form>
      )}

      {centers.length === 0 ? (
        <p>No hay centros disponibles</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ccc' }}>
              <th style={{ textAlign: 'left', padding: '10px' }}>Nombre</th>
              <th style={{ textAlign: 'left', padding: '10px' }}>Dirección</th>
            </tr>
          </thead>
          <tbody>
            {centers.map((center, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>{center.name}</td>
                <td style={{ padding: '10px' }}>{center.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
