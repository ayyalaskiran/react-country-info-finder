import React from 'react';
import AppTheme from '../../AppTheme';
import './Card.scss';

function Card(props) {
  const currentTheme = AppTheme[props.theme];
  return (
    <div
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        boxShadow: `${currentTheme.boxShadow}`,
        color: `${currentTheme.textColor}`
        }}
       className="card" onClick={() => props.openCard(props.country.name)}>
        <div className="card__box">
            <div className="image" style={{backgroundImage: "url(" + props.country.flag + ")"}} />
            <div className="desc">
                <div className="name">{props.country.name}</div>
                <div className="title population"><span className="normal">Population: </span> {props.country.population}</div>
                <div className="title region"><span className="normal">Region: </span>{props.country.region}</div>
                <div className="title capital"><span className="normal">Capital: </span>{props.country.capital}</div>
            </div>
        </div>
    </div>
  );
}

export default Card;