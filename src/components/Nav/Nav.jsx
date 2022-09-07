import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link >
        <h2 className="wood-text">Houston Tabernacle</h2>

      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            {/* Login / Register */}
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            {/* <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link> */}

            {/* <LogOutButton className="navLink" /> */}
          </>
        )}
         <Link className="navLink" to="/about">
        <div id="container" >
            <nav>
              <ul>
                <li><a className="wood-texte" href="#">Home</a></li>
              </ul>
            </nav>
          </div>
          
        </Link>
         <Link className="navLink" to="/about">
        <div id="container">
            <nav>
              <ul>
                <li><a className="wood-texte" href="#">UpComing Event</a></li>
              </ul>
            </nav>
          </div>
          
        </Link>
         <Link className="navLink" to="/about">
        <div id="container">
            <nav>
              <ul>
                <li><a className="wood-texte" href="#">Conctact</a></li>
              </ul>
            </nav>
          </div>
          
        </Link>
         <Link className="navLink" to="/about">
        <div id="container">
            <nav>
              <ul>
                <li><a className="wood-texte" href="#">Location</a></li>
              </ul>
            </nav>
          </div>
          
        </Link>

        <Link className="navLink" to="">
        <div id="container">
            <nav>
              <ul>
                <li><a className="wood-texte" href="#">About</a></li>
              </ul>
            </nav>
          </div>
          
        </Link>
        <Link className='navLink' to="/">
          <div id="container">
            <nav>
              <ul>
                <li><a className="wood-texte" href="#">new</a></li>
              </ul>
            </nav>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
