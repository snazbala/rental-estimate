import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import ContactInformation from '../../components/ContactInformation';
import AddressFields from '../../components/AddressFields';
import PropertyInformation from '../../components/PropertyInformation';

const EMPTY_FORM_STATE = {
    emailAddress: '',
    address: {
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
    },
    numBedrooms: '',
    numBathrooms: '',
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
        console.log(this.state.emailAddress);
        console.log(this.state.address.address1);
        console.log(this.state.address.address2);
        console.log(this.state.address.city);
        console.log(this.state.address.state);
        console.log(this.state.address.zipCode);
        console.log(this.state.numBedrooms);
        console.log(this.state.numBathrooms);
        console.log(this.state.sqFt);
        this.setState(EMPTY_FORM_STATE);
    }

    render() {
        return (
            <div className="estimate-page__container">
                <Grid container justify="center">
                    <Grid item xs={10} md={6} xl={4}>
                        <h2 style={styles.title}>Get a rental estimate for your home!</h2>
                        <form>
                            <h3 style={styles.header}>Your Information</h3>
                            <p>Enter information about your property to see the monthly rent we can offer you.</p>
                            <ContactInformation
                                value={this.state.emailAddress}
                                onChange={this._handleChange}
                            />
                            <h3 style={styles.header}>Property Address</h3>
                            <AddressFields
                                address1={this.state.address.address1}
                                address2={this.state.address.address2}
                                city={this.state.address.city}
                                state={this.state.address.state}
                                zipCode={this.state.address.zipCode}
                                onChange={this._handleAddressFieldChange}
                            />
                            <h3 style={styles.header}>Property Information</h3>
                            <PropertyInformation
                                numBedrooms={this.state.numBedrooms}
                                numBathrooms={this.state.numBathrooms}
                                sqFt={this.state.sqFt}
                                onChange={this._handleChange}
                            />
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

export default EstimatePage;
