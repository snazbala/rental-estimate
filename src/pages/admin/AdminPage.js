import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {getOfferHistoryAction} from '../../actions/offers';
import './adminPage.css';

const OffersTableHead = () => (
    <TableHead>
        <TableRow>
            <TableCell>Created Date</TableCell>
            <TableCell>Email Address</TableCell>
            <TableCell>Address1</TableCell>
            <TableCell>Address2</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Zip Code</TableCell>
            <TableCell>Bedrooms</TableCell>
            <TableCell>Bathrooms</TableCell>
            <TableCell>Sq Ft</TableCell>
            <TableCell>Offer</TableCell>
            <TableCell>Airbnb Income</TableCell>
            <TableCell>Full Home Rent</TableCell>
            <TableCell>Renter Rent</TableCell>
        </TableRow>
    </TableHead>
);

const getRows = (offers) => (
    offers.map((offer) => {
        // MongoDB ids are hashed timestamps
        const createdDateObj = new Date(
            parseInt(offer._id.substring(0, 8), 16) * 1000
        );

        return (
            <TableRow key={offer._id}>
                <TableCell component="th" scope="offer">
                    {createdDateObj.toLocaleString()}
                </TableCell>
                <TableCell>{offer.emailAddress}</TableCell>
                <TableCell>{offer.address.address1}</TableCell>
                <TableCell>{offer.address.address2}</TableCell>
                <TableCell>{offer.address.city}</TableCell>
                <TableCell>{offer.address.state}</TableCell>
                <TableCell>{offer.address.zipCode}</TableCell>
                <TableCell>{offer.numBedrooms}</TableCell>
                <TableCell>{offer.numBathrooms}</TableCell>
                <TableCell>{offer.sqFt}</TableCell>
                <TableCell>{offer.offer}</TableCell>
                <TableCell>{offer.estimate.airbnbIncome.toString()}</TableCell>
                <TableCell>{offer.estimate.fullHomeRent}</TableCell>
                <TableCell>{offer.estimate.renterRent}</TableCell>
            </TableRow>
        );
    })
);

const OffersTable = ({offers}) => (
    <Paper className="admin_page__paper">
        <Table>
            <OffersTableHead />
            <TableBody>
                {getRows(offers)}
            </TableBody>
        </Table>
    </Paper>
);

export class AdminPage extends React.Component {
    componentDidMount() {
        if (this.props.offers.length === 0) {
            this.props.getOffers();
        }
    }

    render() {
        const {offers} = this.props;
        let table;

        if (offers.length > 0) {
            table = <OffersTable offers={offers} />;
        }

        return (
            <div className="admin-page__container">
                <Grid container justify="center">
                    <Grid item xs={10}>
                        <h2 className="admin_page__title">Offer History</h2>
                        {table}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

AdminPage.propTypes = {
    offers: PropTypes.array.isRequired,
    getOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    offers: state.admin.offers,
});

const mapDispatchToProps = dispatch => ({
    getOffers: () => dispatch(getOfferHistoryAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
