import React from 'react';
import AdminPage from './AdminPage';
import {mount} from 'enzyme';

const aMountedAdminPage = (overrideProps) => (
    mount(<AdminPage {...overrideProps} />)
);

describe('estimate page', () => {
    describe('render', () => {
        it('should render the container', () => {
            const component = aMountedAdminPage();
            const expected = 1;
            const actual = component.find('.admin-page--container').length;

            expect(actual).toEqual(expected)
        });
    });
});