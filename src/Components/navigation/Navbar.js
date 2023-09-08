import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/user/logoutSlice';
import './navbar.scss';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);
  const [showText1, setShowText1] = useState(false);

  const clickHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  const toggleText = () => {
    setShowText(!showText);

    setTimeout(() => {
      setShowText(false);
    }, 2000);
  };

  const toggleText1 = () => {
    setShowText1(!showText);

    setTimeout(() => {
      setShowText1(false);
    }, 2000);
  };

  return (
    <nav className="navbar desktop-sidebar">
      <div className="logo-container">
        <Link to="/categories">
          <p className="logo-name">Book Motorcyles</p>
        </Link>
      </div>
      <div className="links-container">
        <ul>
          <li>
            <Link
              className="link1"
              to="/add_category"
            >
              ADD CATEGORIES
            </Link>
          </li>
          <li>
            <Link
              className="link1"
              to="/categories"
              onClick={toggleText}
            >

              RESERVE MOTORCYCLE
            </Link>
          </li>

          <li>
            <Link
              className="link1"
              to="/categories"
              onClick={toggleText1}
            >

              VIEW MOTORCYCLES
            </Link>
          </li>

          <li>
            <Link
              className="link1"
              to="/categories"
            >
              CATEGORIES
            </Link>
          </li>
          <li>
            <Link
              className="link1"
              to="/my_reservations"
            >
              My Reservations
            </Link>
          </li>
          <li>
            <Link
              className="link1"
              to="/del_category"
            >
              DELETE CATEGORIES
            </Link>
          </li>
          <li>
            <button type="button" className="logoutBtn" onClick={clickHandler}>
              LOGOUT
            </button>
          </li>
        </ul>
      </div>
      <br />
      <p className="copyright">&copy; Naan & Cisco | Microverse</p>

      {showText && (
        <div className="popup">
          <p>Choose a category to reserve from</p>
        </div>
      )}

      {showText1 && (
        <div className="popup">
          <p>Choose a category to show Motorcycles</p>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
