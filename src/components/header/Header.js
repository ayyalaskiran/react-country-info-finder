import React from 'react';
import Moon from '../../moon.svg';
import MoonWhite from '../../moon-white.svg';
import AppTheme from '../../AppTheme';
import './Header.scss';

function Header(props) {
  const currentTheme = AppTheme[props.theme];
  return (
    <header className="header"
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        boxShadow: `${currentTheme.boxShadow}`,
        color: `${currentTheme.textColor}`
      }}
    >
      <div className="header__box">
        <div className="row">
          <div className="title">Country Info Finder</div>

          <div className="button" onClick={props.toggleTheme}>
            <img src={props.theme === "theme-dark" ? Moon : MoonWhite} className="icon" alt="moon" />
            <div className="title">{props.theme === "theme-dark" ? 'Dark Mode' : 'Light Mode'}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;