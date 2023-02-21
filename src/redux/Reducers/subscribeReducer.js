import { ADD_SUBSCRIBE, GET_MESSAGE, GET_SUBSCRIBE, SEND_MESSAGE } from "../actionTypes/actionTypes";

const initialState = {
    subscribers: [],
    message: []
}

const subscribeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUBSCRIBE:
            return {
                ...state,
            subscribers: action.payload
            }
        case ADD_SUBSCRIBE:
            return {
                ...state,
                subscribers: [...state.subscribers, action.payload]
            }
        case SEND_MESSAGE:
            return {
                ...state,
                message: [...state.message, action.payload]
            }
        case GET_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
            
        default:
            return state;

    }
}

export default subscribeReducer;