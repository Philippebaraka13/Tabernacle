// import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import React, { useState } from 'react';
// import menuIcon from '../../images/menu_icon.svg'
import Houston from '../../image/Houston.png'


function Nav(args) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const user = useSelector((store) => store.user);

  return (
    <>
      {/* <img src={menuIcon} onClick={toggle} className='menuIcon' /> */}
      {/* <Collapse className='h' isOpen={isOpen} {...args}> */}
      <div className="nav">
        <Link >
        <div>
          <h2 className="wood-text" >Houston Tabernacle</h2>
          <img className="image" src={Houston} />
          </div>
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
              <Link className="navLink" to="/user">
                user
              </Link>

              {/* <Link className="navLink" to="/info">
              Info Page
            </Link>  */}

              {/* <LogOutButton className="navLink" />  */}
            </>
          )}
          <Link className="navLink" to="/start">
            <div >
              <nav>
                <ul>
                  <li><a className="wood-texte" href="#">Home</a></li>
                </ul>
              </nav>
            </div>

          </Link>
          <Link className="navLink" to="/event">
            <div>
              <nav>
                <ul>
                  <li><a className="wood-texte" href="#">UpComing</a></li>
                </ul>
              </nav>
            </div>

          </Link>
          <Link className="navLink" to="/contact">
            <div>
              <nav>
                <ul>
                  <li><a className="wood-texte" href="#">Contact</a></li>
                </ul>
              </nav>
            </div>

          </Link>
          <Link className="navLink" to="/location">
            <div>
              <nav>
                <ul>
                  <li><a className="wood-texte" href="#">Location</a></li>
                </ul>
              </nav>
            </div>

          </Link>

          <Link className="navLink" to="/about">
            <div >
              <nav>
                <ul>
                  <li><a className="wood-texte" href="#">About</a></li>
                </ul>
              </nav>
            </div>

          </Link>
          <Link className='navLink' to="/info">
            <div >
              <nav>
                <ul>
                  <li><a className="wood-texte" href="#">Info</a></li>
                </ul>
              </nav>
            </div>
          </Link>
        </div>
      </div>
      {/* </Collapse> */}
    </>
  );
}

export default Nav;
