import {postData} from './utils';

const GET_ESTIMATE_URL = 'https://zs106rc44f.execute-api.us-east-1.amazonaws.com/dev/properties';
// const GET_ESTIMATE_URL = 'http://localhost:3000/properties';

export const getEstimateApi = (formData) => {
    const formattedFormData = JSON.stringify(formData);

    try {
        return postData(GET_ESTIMATE_URL, formattedFormData);
    } catch(e) {
        return `Error occurred while posting: ${e}`;
    }
};