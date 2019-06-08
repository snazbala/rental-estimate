import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddressFields from '../../components/AddressFields';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';

const EMPTY_FORM_STATE = {
    emailAddress: '',
    address: {
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
    },
};

const styles = (theme) => ({
  emailField: {
    margin: '20px',
  },
  submitButton: {
    margin: '20px',
  },
  header: {
    margin: '20px',
    textAlign: 'center',
  },
  root: {
    flexGrow: 1,
  },
});

class EstimatePage extends React.Component {
    state = EMPTY_FORM_STATE;

    _handleChange = (name) => (e) => {
        if (name !== 'emailAddress') {
            this.setState({
                ...this.state,
                address: {
                    ...this.state.address,
                    [name]: e.target.value,
                },
            });
            return;
        }

        this.setState({
            ...this.state,
            [name]: e.target.value,
        });
        return;
    };

    _handleSubmit = () => {
        console.log(this.state.emailAddress);
        console.log(this.state.address.address1);
        console.log(this.state.address.address2);
        console.log(this.state.address.city);
        console.log(this.state.address.state);
        console.log(this.state.address.zipCode);
        this.setState(EMPTY_FORM_STATE);
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classNames("estimate-page__container", classes.root)}>
                <Grid container justify="center">
                    <Grid item xs={10} md={6} lg={4}>
                    <h2 className={classes.header}>Get a rental estimate for your home!</h2>
                        <form>
                            <div>
                                <TextField
                                    className={classNames(
                                        'estimate-page__email',
                                        classes.emailField
                                    )}
                                    type="email"
                                    name="Email Address"
                                    label="Email Address"
                                    fullWidth={true}
                                    value={this.state.emailAddress}
                                    placeholder="bilbobaggins@bagend.com"
                                    variant="outlined"
                                    onChange={this._handleChange('emailAddress')}
                                >
                                </TextField>
                            </div>
                            <AddressFields
                                address1={this.state.address.address1}
                                address2={this.state.address.address2}
                                city={this.state.address.city}
                                state={this.state.address.state}
                                zipCode={this.state.address.zipCode}
                                onChange={this._handleChange}
                            />
                            <div>
                                <Button
                                    className={classNames("estimate-page__submit-button", classes.submitButton)}
                                    variant="contained"
                                    color="primary"
                                    fullWidth={true}
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
