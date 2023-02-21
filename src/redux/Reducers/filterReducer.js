import { TOGGLE_DATE, UPDATE_TAGS_FILTER } from "../actionTypes/actionTypes";

const initialState = {
    datesOrder: 'first',
    tagsFilter: [],
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DATE:
            if(action.payload === 'true'){
                return {
                    ...state,
                    tagsFilter: [],
                    datesOrder: action.payload
                }
            }
            return {
                ...state,
                datesOrder: action.payload
            }
        case UPDATE_TAGS_FILTER:
            if (state.tagsFilter.includes(action.payload)) {
                return {
                    ...state,
                    tagsFilter: [...state.tagsFilter]
                };
            }
            else {
                return {
                    ...state,
                    tagsFilter: [...state.tagsFilter, action.payload]
                }
            }

        default:
            return state;
    }

}
export default filterReducer;