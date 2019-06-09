import {getEstimateApi} from '../api/properties';

export const getEstimateAction = (formData) => async (dispatch) => {
    let estimateData;

    try {
        estimateData = await getEstimateApi(formData);
    } catch(e) {
        alert(`
            Could not get estimate.
            Please check that you have filled in all required fields and try again.
        `);
        return;
    }

    // Since the API that returns the offer is hard coded for now,
    // and will ALWAYS return an offer let's use a randomizer to
    // make this more interesting and sometimes return 0 so we can see
    // the negative case in the UI.
    const randomizer = Math.floor(Math.random() * Math.floor(2));
    const offer = randomizer ? estimateData.offer : 0;

    if (offer) {
        dispatch({
            type: 'SAVE_IS_QUALIFIED',
            payload: true,
        });
        dispatch({
            type: 'SAVE_ESTIMATE_AMOUNT',
            payload: offer,
        });
    } else {
        dispatch({
            type: 'SAVE_IS_QUALIFIED',
            payload: false,
        });
    }
};