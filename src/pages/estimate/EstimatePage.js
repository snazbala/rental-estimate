import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import ContactInformation from '../../components/ContactInformation';
import AddressFields from '../../components/AddressFields';
import PropertyInformation from '../../components/PropertyInformation';
import EstimateCard from '../../components/EstimateCard';

import {getEstimateAction} from '../../actions/estimate';

const EMPTY_FORM_STATE = {
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

const styles = {
    submitButton: {
        margin: '27px 0px 50px 0px',
        width: '250px',
    },
    header: {
    },
    title: {
        margin: '40px 0px 40px 0px',
    },
};

class EstimatePage extends React.Component {
    state = EMPTY_FORM_STATE;

    _handleAddressFieldChange = (name) => (e) => {
        this.setState({
            ...this.state,
            address: {
                ...this.state.address,
                [name]: e.target.value,
            },
        });
        return;
    };

    _handleChange = (name) => (e) => {
        this.setState({
            ...this.state,
            [name]: e.target.value,
        });
        return;
    }

    _handleSubmit = () => {
        this.props.onSubmit(this.state);
        this.setState({...EMPTY_FORM_STATE});
    }

    render() {
        const {
            address: {
                address1,
                address2,
                city,
                state,
                zipCode,
            },
            emailAddress,
            numBathrooms,
            numBedrooms,
            sqFt,
        } = this.state;

        const {
            estimateAmount,
            isQualified,
        } = this.props;

        let estimate;

        if (this.state.estimate) {
            estimate = <EstimateCard isQualified={isQualified} estimateAmount={estimateAmount} />
        }

        return (
            <div className="estimate-page__container">
                <Grid container justify="center">
                    <Grid item xs={10} md={6} xl={4}>
                        <h2 style={styles.title}>Get a rental estimate for your home!</h2>
                        <form>
                            <h3 style={styles.header}>Your Information</h3>
                            <p>Enter information about your property to see the monthly rent we can offer you.</p>
                            <ContactInformation
                                value={emailAddress}
                                onChange={this._handleChange}
                            />
                            <h3 style={styles.header}>Property Address</h3>
                            <AddressFields
                                address1={address1}
                                address2={address2}
                                city={city}
                                state={state}
                                zipCode={zipCode}
                                onChange={this._handleAddressFieldChange}
                            />
                            <h3 style={styles.header}>Property Information</h3>
                            <PropertyInformation
                                numBedrooms={numBedrooms}
                                numBathrooms={numBathrooms}
                                sqFt={sqFt}
                                onChange={this._handleChange}
                            />
                            {estimate}
                            <div>
                                <Button
                                    className="estimate-page__submit-button"
                                    style={styles.submitButton}
                                    variant="contained"
                                    color="primary"
                                    onClick={this._handleSubmit}
                                >
                                    Get Estimate
                                </Button>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
   estimateAmount: state.app.estimateAmount,
   isQualified: state.app.isQualified,
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (formData) => dispatch(getEstimateAction(formData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EstimatePage);
