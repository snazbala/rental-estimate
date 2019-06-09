import React from 'react';
import EstimateCard from './EstimateCard';
import {mount} from 'enzyme';

const mountedEstimateCard = (overrideProps) => (
    mount(<EstimateCard {...overrideProps} />)
);

describe('estimate card', () => {
    let wrapper;

    afterEach(() => {
        wrapper.unmount();
    });

    describe('when isQualified is true and an estimateAmount is passed', () => {
        xit('should render the correct text and style', () => {
            wrapper = mountedEstimateCard();
            // to be finished
        });
    });

    describe('when isQualified is false', () => {
        xit('should render the correct text and style', () => {
            wrapper = mountedEstimateCard();
            // to be finished
        });
    });
});