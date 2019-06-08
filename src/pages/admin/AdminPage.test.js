import React from 'react';
import AdminPage from './AdminPage';
import {mount} from 'enzyme';

const mountedAdminPage = (overrideProps) => (
    mount(<AdminPage {...overrideProps} />)
);

describe('estimate page', () => {
    describe('render', () => {
        it('should render the container', () => {
            const component = mountedAdminPage();
            const expected = 1;
            const actual = component.find('.admin-page__container').length;

            expect(actual).toEqual(expected)
        });
    });
});