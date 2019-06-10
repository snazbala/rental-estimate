import React from 'react';
import { OfferPage } from './OfferPage';
import { mount } from 'enzyme';

const PROPS = {
    formSubmitted: false,
    isLoading: false,
    onSubmit: jest.fn(),
};

const mountedOfferPage = overrideProps => mount(<OfferPage {...overrideProps} />);

describe('offer page', () => {
    let wrapper;

    afterEach(() => {
        wrapper.unmount();
    });

    describe('render', () => {
        it('should render the container', () => {
            wrapper = mountedOfferPage(PROPS);
            const actual = wrapper.find('.offer-page__container');

            expect(actual.exists()).toBe(true);
        });

        describe('form', () => {
            it('should render an email input field', () => {
                wrapper = mountedOfferPage(PROPS);
                const actual = wrapper.find('.contact-information__email');

                expect(actual.exists()).toBe(true);
            });

            it('should render each of the address input fields', () => {
                wrapper = mountedOfferPage(PROPS);
                const address1 = wrapper.find('.address-fields__address1');
                const address2 = wrapper.find('.address-fields__address2');
                const city = wrapper.find('.address-fields__city');
                const state = wrapper.find('.address-fields__state');
                const zipCode = wrapper.find('.address-fields__zip-code');

                expect(address1.exists()).toBe(true);
                expect(address2.exists()).toBe(true);
                expect(city.exists()).toBe(true);
                expect(state.exists()).toBe(true);
                expect(zipCode.exists()).toBe(true);
            });

            it('should render each of the property information fields', () => {
                wrapper = mountedOfferPage(PROPS);
                const numBeds = wrapper.find('.property-information__num-beds');
                const numBaths = wrapper.find('.property-information__num-baths');
                const sqFt = wrapper.find('.property-information__sq-ft');

                expect(numBeds.exists()).toBe(true);
                expect(numBaths.exists()).toBe(true);
                expect(sqFt.exists()).toBe(true);
            });

            it('should render a submit button', () => {
                wrapper = mountedOfferPage(PROPS);
                const actual = wrapper.find('.offer-page__submit-button');
                // the button wrapper is nested within several, just pick the first
                // to verify the text
                const text = actual.at(0).text();
                const expectedText = 'Get Offer';

                expect(actual.exists()).toBe(true);
                expect(text).toEqual(expectedText);
            });
        });
    });

    describe('lifecycle', () => {
        xit('should update the state when fields are updated', () => {
            wrapper = mountedOfferPage(PROPS);
            const field = wrapper.find('.contact-information__email');

            // simulate typing into the field
            field.at(0).prop('onChange')({ target: { value: 'test@email.com' } });

            // TODO: investigate 'state() can only be called on class components' error here
            expect(wrapper.state('emailAddress')).toEqual('test@email.com');
        });

        it('should call the submit handler when the submit button is clicked', () => {
            wrapper = mountedOfferPage(PROPS);
        });

        xit('should not allow you to submit without all required fields', () => {
            // TODO: implement form validation
        });
    });
});
