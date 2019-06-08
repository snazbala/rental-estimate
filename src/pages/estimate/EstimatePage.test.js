import React from 'react';
import EstimatePage from './EstimatePage';
import {mount} from 'enzyme';

const mountedEstimatePage = (overrideProps) => (
    mount(<EstimatePage {...overrideProps} />)
);

describe('estimate page', () => {
    let component;

    afterEach(() => {
        component.unmount();
    });

    describe('render', () => {
        it('should render the container', () => {
            component = mountedEstimatePage();
            const actual = component.find('.estimate-page__container');

            expect(actual.exists()).toBe(true);
        });

        describe('form', () => {
            it('should render an email input field', () => {
                component = mountedEstimatePage();
                const actual = component.find('.estimate-page__email');

                expect(actual.exists()).toBe(true);
            });

            it('should render each of the address input fields', () => {
                component = mountedEstimatePage();
                const address1 = component.find('.estimate-page__address1');
                const address2 = component.find('.estimate-page__address2');
                const city = component.find('.estimate-page__city');
                const state = component.find('.estimate-page__state');
                const zipCode = component.find('.estimate-page__zip-code');

                expect(address1.exists()).toBe(true);
                expect(address2.exists()).toBe(true);
                expect(city.exists()).toBe(true);
                expect(state.exists()).toBe(true);
                expect(zipCode.exists()).toBe(true);
            });

            it('should render a submit button', () => {
                component = mountedEstimatePage();
                const actual = component.find('.estimate-page__submit-button');
                // the button component is nested within several, just pick the first
                // to verify the text
                const text = actual.at(0).text();
                const expectedText = 'Get Estimate';

                expect(actual.exists()).toBe(true);
                expect(text).toEqual(expectedText)
            });
        });
    });
});