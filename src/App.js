import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Splashscreen from './Components/home/Splashscreen';
import Register from './Components/home/Register';
import NewLogin from './Components/home/NewLogin';
import NewSignUp from './Components/home/NewSignUp';
import CategoriesPage from './Components/categories/CategoriesPage';
import MotorcycleList from './Components/motorcycles/MotorcycleList';
import MotorcycleDetails from './Components/motorcycles/MotorcycleDetails';
import AddCategory from './Components/crud/AddCategory';
import MyReservations from './Components/reservations/MyReservations';
import Reservation from './Components/reservations/reservation';
import NotFoundPage from './Components/shared/NotFoundPage';
import DelCategory from './Components/crud/DelCategory';

const App = () => (
  <>
    <Routes>
      <Route path="/addcategory" element={<AddCategory />} />

      <Route path="/" element={<Splashscreen />} />
      <Route path="register" element={<Register />}>
        <Route path="login" element={<NewLogin />} />
        <Route path="signup" element={<NewSignUp />} />
      </Route>
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/:id" element={<MotorcycleList />} />
      <Route
        path="/categories/:id/motorcycles/:mid"
        element={<MotorcycleDetails />}
      />
      <Route path="/add_category" element={<AddCategory />} />
      <Route path="/del_category" element={<DelCategory />} />
      <Route path="/motorcycles" element={<MotorcycleList />} />
      <Route path="/my_reservations" element={<MyReservations />} />
      <Route path="/categories/:id/motorcycles/:mid/reservation" element={<Reservation />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);

export default App;
