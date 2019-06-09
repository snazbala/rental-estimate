export default (state = {offers: []}, action) => {
    switch (action.type) {
        case 'SAVE_OFFER_HISTORY':
            return {
                ...state,
                offers: action.payload,
            }
        default:
            return state;
    }
};