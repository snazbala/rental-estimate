import React from 'react';
import {AdminPage} from './AdminPage';
import {mount} from 'enzyme';

const PROPS = {
    offers: [],
    getOffers: jest.fn()
};

const mountedAdminPage = (overrideProps) => (
    mount(<AdminPage {...overrideProps} />)
);

describe('admin page', () => {
    describe('render', () => {
        it('should render the container', () => {
            const component = mountedAdminPage(PROPS);
            const expected = 1;
            const actual = component.find('.admin-page__container').length;

            expect(actual).toEqual(expected)
        });
    });
});