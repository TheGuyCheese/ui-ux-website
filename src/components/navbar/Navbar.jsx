import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { usestate } from 'react';
import logo from '../../assets/logo.svg';
import './navbar.css';


const Menu = () => (
  <>
  <p><a href = "#home">Home</a></p>
  <p><a href = "#wgpt3">What is GPT?</a></p>
  <p><a href = "#possibility">Open AI</a></p>
  <p><a href = "#features">Case Studies</a></p>
  <p><a href = "#blog">Library</a></p>
  </>
)



const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);

  return (
    <div className='blog__navbar'>
      <div className='blog__navbar-links'>
        <div className='blog__navbar-links_logo'>
            <img src={ logo } alt='logo' />
        </div>
        <div className='blog__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='blog__navbar-sign'>
        <p>Sign In</p>
        <button type='button'> Sign Up</button>
      </div>
      <div className='blog__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick = {() =>setToggleMenu(false)} />
          :<RiMenu3Line color="#fff" size={27} onClick = {() =>setToggleMenu(true)} />}
          {toggleMenu && (
            <div className='blog__navbar-menu_container scale-up-center'>
              <div className='blog__navbar-menu_container-links'>
                <Menu />
                <div className='blog__navbar-menu_container-links-sign'>
                  <p>Sign In</p>
                  <button type='button'> Sign Up</button>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Navbar