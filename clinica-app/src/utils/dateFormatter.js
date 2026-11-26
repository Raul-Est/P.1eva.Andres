import { parse, format } from 'date-fns';
import { es } from 'date-fns/locale';

// Convierte string DD/MM/YYYY HH:mm:ss de la API a objeto Date
export const parsearFechaAPI = (fechaString) => {
  if (!fechaString) return null;
  return parse(fechaString, 'dd/MM/yyyy HH:mm:ss', new Date());
};

// Convierte Date a formato DD/MM/YYYY HH:mm:ss para enviar a la API
export const formatearParaAPI = (date) => {
  if (!date) return null;
  return format(date, 'dd/MM/yyyy HH:mm:ss');
};

// Convierte Date a formato legible para mostrar (ej: 26 de noviembre de 2026)
export const formatearFechaLegible = (date) => {
  if (!date) return null;
  return format(date, "d 'de' MMMM 'de' yyyy", { locale: es });
};

// Convierte Date a formato corto (ej: 26/11/2026)
export const formatearFechaCorta = (date) => {
  if (!date) return null;
  return format(date, 'dd/MM/yyyy');
};

// Convierte Date a solo hora (ej: 14:30)
export const formatearHora = (date) => {
  if (!date) return null;
  return format(date, 'HH:mm');
};

// Convierte Date a fecha y hora legible (ej: 26/11/2026 14:30)
export const formatearFechaHora = (date) => {
  if (!date) return null;
  return format(date, 'dd/MM/yyyy HH:mm');
};
