import React, {
    Component
}
from 'react';
import Dashboard from '../components/Dashboard';
import 'isomorphic-fetch';
import weatherReducer from '../reducers/weatherReducer';
import {
    updateWeather,
    fetchWeather,
    failureWeather
}
from '../actions/weatherActions';

class DashboardContainer extends Component {
    constructor() {
        super()

        this.state = {
            isFetching: false,
            data: null,
            error: null
        }
    }


    componentDidMount() {
        console.log("dashboard container mounted");
        //check if data is already being fetching
        fetch("https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02")
            .then(response => {
                if (!response.ok) {
                    throw response;
                }
                return response.json();
            })
            .then((locationInfo) => {
                console.log("location info received", locationInfo);
                const closestLocation = locationInfo[0].woeid;
                return fetch(`https://www.metaweather.com/api/location/${closestLocation}`);
            })
            .then(response => {
                if (!response.ok) {
                    throw response;
                }
                return response.json();
            })
            .then((weatherInfo) => {
                console.log("weather info received", weatherInfo);

                this.setState(weatherReducer(this.state, updateWeather(weatherInfo)));
            })
            .catch((error) => {
                console.log("error", error);
                //dispatch error
                this.setState(weatherReducer(this.state, failureWeather(error)));

            });
    }
    


    render() {
        console.log("current state", this.state);
        if (this.state.data === null) {
            return (
                <div>Loading...</div>  
            );
        }
        return (<Dashboard weather={this.state.data} />);
    }
}

export default DashboardContainer;
