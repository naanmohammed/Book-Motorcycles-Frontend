import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { logout } from '../../redux/user/logoutSlice';
import './toggle.scss';

function Toggle() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);
  const [showText1, setShowText1] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

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
    <nav className="navBar toggle">
      <button type="button" className="btn" onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose className="closebtn" />
        ) : (
          <FiMenu className="listbtn" />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <li className="book-racerlink">
          <Link to="/categories">Book Motorcyles</Link>
        </li>

        <li>
          <NavLink
            to="/my_reservations"
            className="active-link"
            onClick={() => closeMenu()}
            exact="true"
          >
            My Reservations
          </NavLink>
        </li>

        <li>
          <NavLink
            className={(navData) => (navData.isActive ? 'active link' : 'link')}
            to="/add_category"
            onClick={() => closeMenu()}
          >
            ADD CATEGORIES
          </NavLink>
        </li>

        <li>
        <Link
              className="link1"
              to="/categories"
              onClick={() => {
                toggleText();
                closeMenu();
              }}

            >

              RESERVE MOTORCYCLE
            </Link>
        </li>
        <li>
            <Link
              className="link1"
              to="/categories"
              onClick={() => {
                toggleText1();
                closeMenu();
              }}
            >

              VIEW MOTORCYCLES
            </Link>
          </li>

        <li>
            <Link
              className="link1"
              to="/categories"
              onClick={() => closeMenu()}
            >

              CATEGORIES
            </Link>
          </li>

        <li>
          <button type="button" className="logout" onClick={clickHandler}>
            LOGOUT
          </button>
        </li>
        <br />
        <p className="copyright" style={{ color: '#fff' }}>
          &copy; Naan and Cisco @Microverse 2023
        </p>
      </ul>
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

export default Toggle;
