export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/';

// Rutas internas de la aplicación le dejamos la barra
export const ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  APPOINTMENTS: '/my-appointments',
  NEW_APPOINTMENT: '/new-appointment',
  CALENDAR: '/calendar',
  DATES_BY_DAY: '/dates-by-day',
  CENTERS: '/centers'
};

// Mensajes comunes
export const MESSAGES = {
  LOGIN_SUCCESS: 'Bienvenido',
  REGISTER_SUCCESS: 'Registro completado. Inicia sesión',
  LOGOUT_SUCCESS: 'Sesión cerrada',
  APPOINTMENT_CREATED: 'Cita creada correctamente',
  APPOINTMENT_DELETED: 'Cita cancelada',
  APPOINTMENT_ERROR: 'Error al gestionar la cita',
  CENTER_CREATED: 'Centro creado correctamente',
  LOAD_ERROR: 'Error al cargar los datos',
  UNEXPECTED_ERROR: 'Algo salió mal'
};

// Formatos de fecha
export const DATE_FORMATS = {
  API_FORMAT: 'dd/MM/yyyy HH:mm:ss',
  DISPLAY_FORMAT: 'dd/MM/yyyy',
  DISPLAY_FULL: 'dd/MM/yyyy HH:mm'
};
