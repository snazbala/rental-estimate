import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import ContactInformation from '../../components/ContactInformation';
import AddressFields from '../../components/AddressFields';
import PropertyInformation from '../../components/PropertyInformation';
import OfferCard from '../../components/OfferCard';

import { postPropertyAction } from '../../actions/offers';
import './offerPage.css';

export class OfferPage extends React.Component {
    state = {
        emailAddress: '',
        address: {
            address1: '',
            address2: '',
            city: '',
            state: '',
            zipCode: '',
        },
        numBedrooms: 0,
        numBathrooms: 0,
        sqFt: '',
    };

    handleAddressFieldChange = name => e => {
        this.setState({
            ...this.state,
            address: {
                ...this.state.address,
                [name]: e.target.value,
            },
        });
        return;
    };

    handleChange = name => e => {
        this.setState({
            ...this.state,
            [name]: e.target.value,
        });
        return;
    };

    handleSubmit = () => {
        if (this.props.isLoading) {
            return;
        }
        this.props.onSubmit(this.state);
    };

    render() {
        const {
            address: { address1, address2, city, state, zipCode },
            emailAddress,
            numBathrooms,
            numBedrooms,
            sqFt,
        } = this.state;

        const { formSubmitted, offerAmount, isLoading } = this.props;

        let offer;

        if (formSubmitted) {
            offer = <OfferCard offerAmount={offerAmount} />;
        }

        return (
            <div className="offer-page__container">
                <Grid container justify="center">
                    <Grid item xs={10} md={6} xl={4}>
                        <h2 className="offer-page__title">Get a rental offer for your home!</h2>
                        <p className={'offer-page__subtitle'}>
                            Enter information about your property to see the monthly rent we can offer you.
                        </p>
                        <form>
                            <h3>Your Information</h3>
                            <ContactInformation value={emailAddress} onChange={this.handleChange} />
                            <h3>Property Address</h3>
                            <AddressFields
                                address1={address1}
                                address2={address2}
                                city={city}
                                state={state}
                                zipCode={zipCode}
                                onChange={this.handleAddressFieldChange}
                            />
                            <h3>Property Information</h3>
                            <PropertyInformation
                                numBedrooms={numBedrooms}
                                numBathrooms={numBathrooms}
                                sqFt={sqFt}
                                onChange={this.handleChange}
                            />
                            {offer}
                            <div className="offer-page__submit-button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleSubmit}
                                    disabled={isLoading}
                                    style={{ width: '250px' }}
                                >
                                    {isLoading ? <CircularProgress /> : 'Get Offer'}
                                </Button>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

OfferPage.propTypes = {
    formSubmitted: PropTypes.bool.isRequired,
    offerAmount: PropTypes.number,
    isLoading: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    formSubmitted: state.form.formSubmitted,
    offerAmount: state.form.offerAmount,
    isLoading: state.form.isLoading,
});

const mapDispatchToProps = dispatch => ({
    onSubmit: formData => dispatch(postPropertyAction(formData)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferPage);
