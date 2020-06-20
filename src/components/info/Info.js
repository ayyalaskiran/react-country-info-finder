import React from 'react';
import AppTheme from '../../AppTheme';
import './Info.scss';

function Info(props) {
  const currentTheme = AppTheme[props.theme];
  return (
    <div className="info" style={{color: `${currentTheme.textColor}`}}>
        <div className="info__box">
            
            <div className="image" style={{backgroundImage: `url(${props.data.flag})`}} />

            <div className="left-column">
                <div className="title">{props.data.name}</div>

                <div className="row">
                    <div className="col">
                        <div className=""><span className="name">Native name: </span>{props.data.nativeName}</div>
                        <div className=""><span className="name">Population: </span>{props.data.population}</div>
                        <div className=""><span className="name">Region: </span>{props.data.region}</div>
                        <div className=""><span className="name">Sub Region: </span>{props.data.subregion}</div>
                        <div className=""><span className="name">Capital: </span>{props.data.capital}</div>
                    </div>
                    <div className="col">
                        <div className=""><span className="name">Top Level Domain: </span>{props.data.topLevelDomain}</div>
                        <div className=""><span className="name">Curriencies: </span>{props.data.currencies[0].name}</div>
                        <div className=""><span className="name">Languages: </span>
                        {props.data.languages.map((lang, index) => (
                            <span key={index}>{lang.name}{ props.data.languages.length - 1 === index ? '' : ', '}</span>))}
                        </div>
                    </div>
                </div>

                {
                    props.data.borders.length === 0 ? ''
                     : <div className="border-countries">
                        <div className="name">Border Countries: </div>
                        {props.data.borders.map((bord, index) => (
                            <div
                            style={{
                                backgroundColor: `${currentTheme.backgroundColor}`,
                                boxShadow: `${currentTheme.boxShadow}`,
                                color: `${currentTheme.textColor}`
                            }}
                            className="tag" key={index}>{bord} </div>
                        ))}
                    </div>

                }
                
            </div>
            
        </div>
    </div>
  );
}

export default Info;