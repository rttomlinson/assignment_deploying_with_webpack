import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({weather}) => {
    return (
        <div>
            {makeWeatherTiles(weather)}
        </div>    
    );
};


function makeWeatherTiles(weather) {
    return (
        <div>
            <p>City: {weather.title}</p>
            <p>Temp: {weather.consolidated_weather[0].the_temp} C</p>
            <p>Weather: {weather.consolidated_weather[0].weather_state_name}</p>
        </div>
    );
}


export default Dashboard;