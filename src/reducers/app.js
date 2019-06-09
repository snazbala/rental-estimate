export default (state = {}, action) => {
    switch (action.type) {
        case 'SAVE_ESTIMATE_AMOUNT':
            return {
                ...state,
                estimateAmount: action.payload,
            };
        case 'SAVE_IS_QUALIFIED':
            return {
                ...state,
                isQualified: action.payload,
            }
        default:
            return state;
    }
}