import api from './api';

export const getMyAppointments = async () => {
  try {
    const response = await api.get('/date/getByUser');
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const getAllAppointments = async () => {
  try {
    const response = await api.get('/dates');
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const getAppointmentsByDay = async (day) => {
  try {
    const response = await api.post('/date/getByDay', {
      day: day
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const createAppointment = async (center, date) => {
  try {
    const response = await api.post('/date/create', {
      center: center,
      date: date
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const deleteAppointment = async (center, date) => {
  try {
    const response = await api.post('/date/delete', {
      center: center,
      date: date
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
