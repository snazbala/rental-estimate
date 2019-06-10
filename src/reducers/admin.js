const INITIAL_STATE = {
    offers: [],
    isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SAVE_OFFER_HISTORY':
            return {
                ...state,
                offers: action.payload,
            };
        case 'SAVE_OFFER_HISTORY_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};
