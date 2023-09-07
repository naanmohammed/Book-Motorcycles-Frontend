/* eslint-disable react-hooks/rules-of-hooks */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../api';

const reservation = createAsyncThunk(
  'reservation/reservation',
  (reserve) => {
    axios.post(`${BASE_URL}api/v1/add_reservation`, reserve, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        const { data } = response;
        return data;
      });
  },
);

export default reservation;
