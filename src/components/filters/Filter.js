import React from 'react';
import AppTheme from '../../AppTheme';
import Search from '../../search.svg';
import SearchBlack from '../../search-black.svg';
import './Filter.scss';

function Filter(props) {
  const currentTheme = AppTheme[props.theme];
  return (
    <div className="filters">
        <div className="filters__box">
        <div className="search" style={{backgroundColor: `${currentTheme.backgroundColor}`, boxShadow: `${currentTheme.boxShadow}`}}>
            <img src={props.theme === "theme-light" ? SearchBlack : Search} alt="search" className="search__icon" />
            <input
              aria-label="country"
              style={{color: `${currentTheme.textColor}`, placeholder: `${currentTheme.textColor}`}}
              className="search__input" 
              onChange={props.changeSearch}
              type="text"
              placeholder="Search for a country..."
              name="country"
              autoComplete="off"
              value={props.filterCountry}
            />
        </div>

        <div
          style={{
            backgroundColor: `${currentTheme.backgroundColor}`,
            boxShadow: `${currentTheme.boxShadow}`,
            color: `${currentTheme.textColor}`,
            backgroundImage: `${currentTheme.backgroundImageArrow}`
          }}
           className="filter" onClick={props.openDropdown}>
            <div className="name">
              {props.filter.filterName ? props.filter.filterName : 'Filter by region'}
            </div>
        </div>

        {
          props.filter.dropdown === true ? 
          <ul
          style={{
            backgroundColor: `${currentTheme.backgroundColor}`,
            boxShadow: `${currentTheme.boxShadow}`,
            color: `${currentTheme.textColor}`,
          }}
          className="list">
          {props.regions.map((region, index)=> (
                <li
                  value={region} key={index} onClick={() => props.changeFilter(region)}>{region}</li>
            ))}
        </ul> : ''
        }

      
      </div>
    </div>
  );
}

export default Filter;