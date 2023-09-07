import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { delcat } from '../../redux/category/delcatSlice';
import Navbar from '../navigation/Navbar';
import Toggle from '../navigation/Toggle';
import './addcategory.scss';

function DelCategory() {
  const dispatch = useDispatch();
  const [categoryId, setCategoryId] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    // Dispatch the delcat action to delete the category
    dispatch(delcat({ id: categoryId }))
      .then(() => {
        // Successfully deleted category, navigate to the desired page (e.g., /categories)
        navigate('/categories');
      })
      .catch((error) => {
        // Handle any errors here, such as displaying an error message
        console.error('Error deleting category:', error);
      });
  };

  return (
    <div className="wrapper">
      <div>
        <Navbar />
        <Toggle />
      </div>
      <div className="container">
        <h1>Delete Category</h1>
        <form className="form-container" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Category ID"
            name="categoryId"
            className="form-input"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          />
          <button type="submit" className="form-button button">
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}

export default DelCategory;
