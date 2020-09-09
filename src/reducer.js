export const initialState = {
    user: null
};

// Action Types
export const actTypes = {
    SET_USER: "SET_USER"
};

const reducer = (state, act) => {
    switch (act.type) {
        case actTypes.SET_USER:
            return {
                ...state,
                user: act.user
            };
        default:
            return state;
    }
};

export default reducer;