import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splashscreen from './Components/home/Splashscreen';
import Register from './Components/home/Register';
import NewLogin from './Components/home/NewLogin';
import NewSignUp from './Components/home/NewSignUp';
import CategoriesPage from './Components/categories/CategoriesPage';
import MotorcycleList from './Components/motorcycles/MotorcycleList';
import MotorcycleDetails from './Components/motorcycles/MotorcycleDetails';

const App = () => (
  <Routes>
    <Route path="/" element={<Splashscreen />} />
    <Route path="register" element={<Register />}>
      <Route path="login" element={<NewLogin />} />
      <Route path="signup" element={<NewSignUp />} />
    </Route>
    <Route path="/categories" element={<CategoriesPage />} />
    <Route path="/categories/:id" element={<MotorcycleList />} />
    <Route path="/categories/:id/motorcycles/:mid" element={<MotorcycleDetails />} />
  </Routes>
);

export default App;
