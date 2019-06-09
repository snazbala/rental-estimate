import React from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {getOfferHistoryAction} from '../../actions/offers';

const styles = {
    title: {
        margin: '40px 20px 40px 20px',
    },
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
};

const OffersTable = ({offers}) => {
    return (
        <Paper style={styles.paper}>
            <Table style={styles.table}>
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
            <TableBody>
                {offers.map((offer) => {
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
                    )
                })}
            </TableBody>
            </Table>
        </Paper>
    )
}

export class AdminPage extends React.Component {
    componentDidMount() {
        if (this.props.offers.length === 0) {
            this.props.getOffers();
        }
    }

    render() {
        const {offers} = this.props;
        let table;

        if (offers) {
            table = <OffersTable offers={offers} />;
        }

        return (
            <div className="admin-page__container">
                <Grid container justify="center">
                    <Grid item xs={10}>
                        <h2 style={styles.title}>Offer History</h2>
                        {table}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
   offers: state.admin.offers,
});

const mapDispatchToProps = dispatch => ({
    getOffers: () => dispatch(getOfferHistoryAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
