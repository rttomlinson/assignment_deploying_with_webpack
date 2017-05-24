import { UPDATE_WEATHER_DATA, FAILURE_WEATHER_DATA, FETCH_WEATHER_DATA } from '../actions/weatherActions';


const INITIAL_STATE = {
    isFetching: false,
    data: null,
    error: null
};

export default function weatherReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case UPDATE_WEATHER_DATA:
            return {
                isFetching: false,
                data: action.data,
                error: null
            };
        case FAILURE_WEATHER_DATA:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        case FETCH_WEATHER_DATA:
            return {
                isFetching: true,
                error: null,
                data: null
            };
        default:
            return state;
    }
}