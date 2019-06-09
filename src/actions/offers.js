import {postPropertyApi, getOfferHistoryApi} from '../api/properties';

const ERROR_MESSAGE = `
    Could not get offer.
    Please check that you have filled in all required fields and try again.`;

const saveIsLoading = (isLoading) => ({
    type: 'SAVE_IS_LOADING',
    payload: isLoading,
});

const saveFormSubmitted = () => ({
    type: 'SAVE_FORM_SUBMITTED',
});

const saveOfferAmount = (offer) => ({
    type: 'SAVE_OFFER_AMOUNT',
    payload: offer,
});

const saveOfferHistory = (offers) => ({
    type: 'SAVE_OFFER_HISTORY',
    payload: offers,
});

/**
* Since the API that returns the offer is hard coded for now,
* and will ALWAYS return an offer let's use a randomizer to
* make this more interesting and sometimes return 0 so we can see
* the negative case in the UI.
*/
const getRandomizedOffer = (offer) => {
    const randomizer = Math.floor(Math.random() * Math.floor(10));

    if (randomizer > 2) {
        return offer
    }
    return 0;
};

export const postPropertyAction = (formData) => async (dispatch) => {
    let response;

    dispatch(saveIsLoading(true));

    try {
        response = await postPropertyApi(formData);
    } catch(e) {
        alert(ERROR_MESSAGE);
        dispatch(saveIsLoading(false));
        return;
    }

    dispatch(saveIsLoading(false));
    dispatch(saveFormSubmitted());

    if (response.offer) {
        const offerToSave = getRandomizedOffer(response.offer);

        dispatch(saveOfferAmount(offerToSave));
    }
};

export const getOfferHistoryAction = () => async (dispatch) => {
    const offers = await getOfferHistoryApi();

    dispatch(saveOfferHistory(offers));
};