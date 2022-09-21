// import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useSelector} from 'react-redux';
import { useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Houston from '../../image/Houston.png';


function Nav(args) {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const user = useSelector((store) => store.user);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

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
          {(toggleMenu || screenWidth > 600) && (
            <>
              <Link className="navLink" to="/home">
                <div >
                  <nav>
                    <ul className='list'>
                      <li className='item'><a className="wood-texte" href="#">Home</a></li>
                    </ul>
                  </nav>
                </div>

              </Link>
              <Link className="navLink" to="/event">
                <div>
                  <nav>
                    <ul className='list'>
                      <li className='item'><a className="wood-texte" href="#">service</a></li>
                    </ul>
                  </nav>
                </div>
              </Link>
              <Link className="navLink" to="/location">
                <div>
                  <nav>
                    <ul className='list'>
                      <li className='item'><a className="wood-texte" href="#">Location</a></li>
                    </ul>
                  </nav>
                </div>

              </Link>

              <Link className="navLink" to="/about">
                <div >
                  <nav>
                    <ul className='list'>
                      <li className='item'><a className="wood-texte" href="#">About</a></li>
                    </ul>
                  </nav>
                </div>

              </Link>
              <Link className='navLink' to="/info">
                <div >
                  <nav>
                    <ul className='list'>
                      <li className='item'><a className="wood-texte" href="#">Info</a></li>
                    </ul>
                  </nav>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
      <button onClick={toggleNav} className='btnd'>Option</button>
      {/* </Collapse> */}
    </>
  );
}

export default Nav;
