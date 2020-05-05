import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../../img/logo-napis.svg';
import './Nav.css';

const Nav = ({ openedMenu, openCloseMenu }) => {
  let SideBarMenu = null;
  if (openedMenu)
    SideBarMenu = (
      <div className='SideBarMenu'>
        <Link onClick={openCloseMenu} to='/'>
          <img className='SideNavLogo' src={Logo} alt='Logo' />
        </Link>
        <ul className='NavigationList'>
          <li>
            <NavLink onClick={openCloseMenu} exact to='/'>
              <i className='fas fa-home fa-2x'></i> Strona Główna
            </NavLink>
          </li>
          <li>
            <NavLink onClick={openCloseMenu} to='/o-mnie'>
              <i className='far fa-user fa-2x'></i>O mnie
            </NavLink>
          </li>
          <li>
            <NavLink onClick={openCloseMenu} to='/oferowane-usługi'>
              <i className='fas fa-tools fa-2x'></i> Oferowane Usługi
            </NavLink>
          </li>
          <li>
            <NavLink onClick={openCloseMenu} to='/kontakt'>
              <i className='far fa-envelope fa-2x'></i>Kontakt
            </NavLink>
          </li>
        </ul>
      </div>
    );

  return (
    <Fragment>
      <div className='Nav text-dark-white'>
        <div className='container'>
          <Link to='/'>
            <img className='NavLogo' src={Logo} alt='Logo' />
          </Link>
          <ul className='NormalMenu NavigationList'>
            <li>
              <NavLink exact to='/'>
                <i className='fas fa-home fa-2x'></i> Strona Główna
              </NavLink>
            </li>
            <li>
              <NavLink to='/o-mnie'>
                <i className='far fa-user fa-2x'></i>O mnie
              </NavLink>
            </li>
            <li>
              <NavLink to='/oferowane-usługi'>
                <i className='fas fa-tools fa-2x'></i> Oferowane Usługi
              </NavLink>
            </li>
            <li>
              <NavLink to='/kontakt'>
                <i className='far fa-envelope fa-2x'></i>Kontakt
              </NavLink>
            </li>
          </ul>
          <div onClick={openCloseMenu} className='HamburgerMenu'>
            <i className='fas fa-bars'></i>
          </div>
        </div>
      </div>
      {SideBarMenu}
    </Fragment>
  );
};

export default Nav;
