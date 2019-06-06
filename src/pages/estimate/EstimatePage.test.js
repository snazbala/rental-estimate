import React from 'react';
import EstimatePage from './EstimatePage';
import {mount} from 'enzyme';

const aMountedEstimatePage = (overrideProps) => (
    mount(<EstimatePage {...overrideProps} />)
);

describe('estimate page', () => {
    describe('render', () => {
        it('should render the container', () => {
            const component = aMountedEstimatePage();
            const expected = 1;
            const actual = component.find('.estimate-page--container').length;

            expect(actual).toEqual(expected)
        });
    });
});