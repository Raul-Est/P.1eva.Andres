import api from './api';

export const getCenters = async () => {
  try {
    const response = await api.get('/centers');
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const createCenter = async (name, address) => {
  try {
    const response = await api.post('/centers', {
      name: name,
      address: address
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
