import { ADD_TO_HISTORY } from "../actionTypes/actionTypes"

const initialState = {
    history: []
}

const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_HISTORY:
            const article = action.payload;
            let history = [...state.history];
            const index = history.findIndex((x) => x._id === article._id);

            if (index !== -1) {
                // If article already exists and is not already at the top of the history list,
                // move it to the top
                const filteredHistory = history.filter((x) => x._id !== article._id);
                history = [article, ...filteredHistory];
            } else {
                // If article does not exist in the history list, add it to the top
                history = [article, ...history];
            }

            return {
                ...state,
                history: history,
            };

        default:
            return state;

    }
}

export default historyReducer;