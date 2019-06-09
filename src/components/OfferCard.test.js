import React from 'react';
import OfferCard from './OfferCard';
import {mount} from 'enzyme';

const mountedOfferCard = (overrideProps) => (
    mount(<OfferCard {...overrideProps} />)
);

describe('offer card', () => {
    let wrapper;

    afterEach(() => {
        wrapper.unmount();
    });

    describe('when offerAmount is > 0', () => {
        it('should render the correct text and style', () => {
            wrapper = mountedOfferCard({offerAmount: 1234});
            const actual = wrapper.find('.offer_card--qualified');

            const text = actual.at(0).text();
            const expectedText = 'Congrats! We can offer you a monthly rent of $1234.';

            expect(actual.exists()).toBe(true);
            expect(text).toEqual(expectedText);
        });
    });

    describe('when offerAmount is 0', () => {
        it('should render the correct text and style', () => {
            wrapper = mountedOfferCard({offerAmount: 0});
            const actual = wrapper.find('.offer_card--not-qualified');

            const text = actual.at(0).text();
            const expectedText = 'Sorry, but we are unable to make an offer on this property.';

            expect(actual.exists()).toBe(true);
            expect(text).toEqual(expectedText);

        });
    });
});