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
        xit('should render the correct text and style', () => {
            wrapper = mountedOfferCard();
            // to be finished
        });
    });

    describe('when offerAmount is 0', () => {
        xit('should render the correct text and style', () => {
            wrapper = mountedOfferCard();
            // to be finished
        });
    });
});