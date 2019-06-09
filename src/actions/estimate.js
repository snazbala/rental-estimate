import {getEstimateApi} from '../api/properties';

/**
 * Returns an offer amount if the property is qualified:
 * Must meet the following conditions:
 * - the total annual income of the property (regular rent + Airbnb income) minus the estimated
 *   annual full home rent cost must be greater than $4,000.
 * If so, returns an offer that is equal to the entire home rate + 10% of the Airbnb income
 * (calculated as a monthly average from the annual estimate)
 * Returns 0 if the property is not qualified.
*/
const getOffer = (estimate) => {
    const {
        airbnbIncome,
        fullHomeRent,
        renterRent
    } = estimate;

    const annualFullHomeRent = fullHomeRent * 12;
    const annualRenterRent = renterRent * 12;
    const annualAirbnbIncome = airbnbIncome.reduce((acc, current) => acc + current);
    const totalAnnualIncome = annualRenterRent + annualAirbnbIncome;

    const potentialProfit = totalAnnualIncome - annualFullHomeRent;

    if (potentialProfit > 4000) {
        const averageMonthlyAirbnbIncome = annualAirbnbIncome / 12;
        const offer = fullHomeRent + (averageMonthlyAirbnbIncome * .10);

        return offer;
    } else {
        // The property doesn't qualify
        return 0;
    }
}

export const getEstimateAction = (formData) => async (dispatch) => {
    debugger;
    const estimateData = await getEstimateApi(formData);

    const offer = getOffer(estimateData.estimate);

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