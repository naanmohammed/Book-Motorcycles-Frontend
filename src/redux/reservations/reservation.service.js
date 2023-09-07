import { createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../api';

const Navigator = () => {
  const navigate = useNavigate();

  return null;
}

const reservation = createAsyncThunk(
  'reservation/reservation',
  (reserve) => {
    const navigate = render(<Navigator/>).navigate;
    axios.post(`${BASE_URL}api/v1/add_reservation`, reserve, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        navigate('/my_reservations');
        const { data } = response;
        return data;
      });
  },
);

export default reservation;
