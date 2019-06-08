import React from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = (theme) => ({
  inputField: {
    margin: '20px',
  },
});

const Address1 = ({value, onChange, style}) => (
    <TextField
        className={classNames(
            'estimate-page__address1',
            style,
        )}
        name="Address 1"
        label="Address 1"
        fullWidth={true}
        value={value}
        placeholder="123 Main Street"
        variant="outlined"
        onChange={onChange('address1')}
    />
);

const Address2 = ({value, onChange, style}) => (
    <TextField
        className={classNames(
            'estimate-page__address2',
            style,
        )}
        name="Address 2"
        label="Address 2"
        fullWidth={true}
        value={value}
        placeholder="Unit 2"
        variant="outlined"
        onChange={onChange('address2')}
    />
);

const City = ({value, onChange, style}) => (
    <TextField
        className={classNames(
            'estimate-page__city',
            style,
        )}
        name="City"
        label="City"
        fullWidth={true}
        value={value}
        placeholder="Seattle"
        variant="outlined"
        onChange={onChange('city')}
    />
);

const State = ({value, onChange, style}) => (
    <TextField
        className={classNames(
            'estimate-page__state',
            style,
        )}
        name="State"
        label="State"
        fullWidth={true}
        value={value}
        placeholder="Washington"
        variant="outlined"
        onChange={onChange('state')}
    />
);

const ZipCode = ({value, onChange, style}) => (
    <TextField
        className={classNames(
            'estimate-page__zip-code',
            style,
        )}
        name="Zip Code"
        label="Zip Code"
        fullWidth={true}
        value={value}
        placeholder="98296"
        variant="outlined"
        onChange={onChange('zipCode')}
    />
);

const AddressFields = ({address1, address2, city, state, zipCode, onChange, classes}) => (
    <div>
        <Address1 value={address1} onChange={onChange} style={classes.inputField} />
        <Address2 value={address2} onChange={onChange} style={classes.inputField} />
        <City value={city} onChange={onChange} style={classes.inputField} />
        <State value={state} onChange={onChange} style={classes.inputField} />
        <ZipCode value={zipCode} onChange={onChange} style={classes.inputField} />
    </div>
);

export default withStyles(styles)(AddressFields);
