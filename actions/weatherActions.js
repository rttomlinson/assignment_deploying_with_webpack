export const UPDATE_WEATHER_DATA = "UPDATE_WEATHER_DATA";
export const FAILURE_WEATHER_DATA = "FAILURE_WEATHER_DATA";
export const FETCH_WEATHER_DATA = "FETCH_WEATHER_DATA";


export function updateWeather(data){
    return {
        type: UPDATE_WEATHER_DATA,
        data
    };
}

export function failureWeather(error){
    return {
        type: FAILURE_WEATHER_DATA,
        error
    };
}

export function fetchWeather(){
    return{
        type: FETCH_WEATHER_DATA
    };
}