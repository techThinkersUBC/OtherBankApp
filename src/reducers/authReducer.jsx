import {
    SET_EMAIL,
    SET_NAME,
    SET_PASSWORD,
    LOGIN,
} from '../actions/auth.js';

const cachedState = localStorage.getItem("authReducer");

export const initialState = cachedState ? JSON.parse(cachedState) : {
    authenticated: false,
    loading: false,
    error: null,
    password: "",
    name: "",
    email: "",
};

export default function authReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_EMAIL:
            return {
                ...state,
                email: action.email,
            };
        case SET_PASSWORD:
            return {
                ...state,
                password: action.password,
            };
        case SET_NAME:
            return {
                ...state,
                name: action.name,
            };
        case LOGIN:
            const cachedState = {
                ...state,
                authenticated: true,
            };
            localStorage.setItem('authReducer', JSON.stringify(cachedState));

            return {
                ...state,
                authenticated: true,
            };
        default:
            return state;
    }
}
