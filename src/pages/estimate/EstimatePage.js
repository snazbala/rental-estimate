import React from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

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

const styles = () => ({
    emailField: {
        margin: '0px 20px 20px 20px',
    },
    submitButton: {
        margin: '27px 20px',
        width: '250px',
    },
    header: {
        margin: '20px',
    },
    title: {
        margin: '40px 20px 40px 20px',
    },
});

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
        const {classes} = this.props;

        return (
            <div className="estimate-page__container">
                <Grid container justify="center">
                    <Grid item xs={10} md={6} xl={4}>
                        <h2 className={classes.title}>Get a rental estimate for your home!</h2>
                        <form>
                            <h3 className={classes.header}>Your Information</h3>
                            <ContactInformation
                                value={this.state.emailAddress}
                                onChange={this._handleChange}
                                classes={classes}
                            />
                            <h3 className={classes.header}>Property Address</h3>
                            <AddressFields
                                address1={this.state.address.address1}
                                address2={this.state.address.address2}
                                city={this.state.address.city}
                                state={this.state.address.state}
                                zipCode={this.state.address.zipCode}
                                onChange={this._handleAddressFieldChange}
                            />
                            <h3 className={classes.header}>Property Information</h3>
                            <PropertyInformation
                                numBedrooms={this.state.numBedrooms}
                                numBathrooms={this.state.numBathrooms}
                                sqFt={this.state.sqFt}
                                onChange={this._handleChange}
                            />
                            <div>
                                <Button
                                    className={classNames(
                                        "estimate-page__submit-button",
                                        classes.submitButton,
                                    )}
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

export default withStyles(styles)(EstimatePage);
