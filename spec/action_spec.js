import deepFreeze from 'deep-freeze';

import {UPDATE_WEATHER_DATA, FAILURE_WEATHER_DATA, FETCH_WEATHER_DATA } from "../actions/weatherActions";
import weatherReducer from '../reducers/weatherReducer';
it("assigns weather info to the state", function(){
    const initialState = {
        isFetching: true,
        error: null,
        data: null
    }
    const action = {
        type: UPDATE_WEATHER_DATA,
        data: { weather: "yay" }
    }
    const finalState = {
        isFetching: false,
        error: null,
        data: { weather: "yay" }
    }
    deepFreeze(initialState);
    deepFreeze(action);
    expect(weatherReducer(initialState, action)).toEqual(finalState);
})
it("sets error on weather info", function(){
    const initialState = {
        isFetching: true,
        error: null,
        data: null
    }
    const action = {
        type: FAILURE_WEATHER_DATA,
        error: { error: "Failed to fetch data" }
    }
    const finalState = {
        isFetching: false,
        error:{ error: "Failed to fetch data" },
        data: null
    }
    deepFreeze(initialState);
    deepFreeze(action);
    expect(weatherReducer(initialState, action)).toEqual(finalState);
});
it("starts the fetch", function(){
    const initialState = {
        isFetching: false,
        error: { error: "Some error"},
        data: { data: "Old data" }
    }
    const action = {
        type: FETCH_WEATHER_DATA
    }
    const finalState = {
        isFetching: true,
        error: null,
        data: null
    }
    deepFreeze(initialState);
    deepFreeze(action);
    expect(weatherReducer(initialState, action)).toEqual(finalState);
})