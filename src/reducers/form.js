const DEFAULT_STATE = {
    offerAmount: null,
    isLoading: false,
    formSubmitted: false,
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SAVE_OFFER_AMOUNT':
            return {
                ...state,
                offerAmount: action.payload,
            };
        case 'SAVE_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            }
        case 'SAVE_FORM_SUBMITTED':
            return {
                ...state,
                formSubmitted: true,
            }
        default:
            return state;
    }
};