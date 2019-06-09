import {postData} from './utils';

const POST_PROPERTY_URL = 'https://zs106rc44f.execute-api.us-east-1.amazonaws.com/dev/properties';
const GET_OFFER_HISTORY_URL = 'https://zs106rc44f.execute-api.us-east-1.amazonaws.com/dev/offers/';

export const postPropertyApi = (formData) => {
    try {
        return postData(POST_PROPERTY_URL, formData);
    } catch(e) {
        return `Error occurred while posting: ${e}`;
    }
};

export const getOfferHistoryApi = async () => {
    const response = await fetch(GET_OFFER_HISTORY_URL);

    return response.json();
};

