import React from 'react';
import { AdminPage } from './AdminPage';
import { mount } from 'enzyme';

const PROPS = {
    offers: [],
    getOffers: jest.fn(),
};

const mountedAdminPage = overrideProps => mount(<AdminPage {...overrideProps} />);

describe('admin page', () => {
    let wrapper;

    afterEach(() => {
        wrapper.unmount();
    });

    describe('render', () => {
        it('should render the container', () => {
            wrapper = mountedAdminPage(PROPS);
            const actual = wrapper.find('.admin-page__container');

            expect(actual.exists()).toBe(true);
        });
    });
});
