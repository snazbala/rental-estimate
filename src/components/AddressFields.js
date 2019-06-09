import React from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = () => ({
    inputField: {
        marginBottom: '20px',
    },
});

const Address1 = ({value, onChange, style}) => (
    <TextField
        className={classNames(
            'address-fields__address1',
            style,
        )}
        name="Address 1"
        label="Address 1"
        fullWidth={true}
        value={value}
        placeholder="12 Bagshot Row"
        variant="outlined"
        onChange={onChange('address1')}
        required={true}
    />
);

const Address2 = ({value, onChange, style}) => (
    <TextField
        className={classNames(
            'address-fields__address2',
            style,
        )}
        name="Address 2"
        label="Address 2"
        fullWidth={true}
        value={value}
        placeholder="Hole #2"
        variant="outlined"
        onChange={onChange('address2')}
        required={true}
    />
);

const City = ({value, onChange, style}) => (
    <TextField
        className={classNames(
            'address-fields__city',
            style,
        )}
        name="City"
        label="City"
        fullWidth={true}
        value={value}
        placeholder="Hobbiton"
        variant="outlined"
        onChange={onChange('city')}
        required={true}
    />
);

const State = ({value, onChange, style}) => (
    <TextField
        className={classNames(
            'address-fields__state',
            style,
        )}
        name="State"
        label="State"
        fullWidth={true}
        value={value}
        placeholder="The Shire"
        variant="outlined"
        onChange={onChange('state')}
        required={true}
    />
);

const ZipCode = ({value, onChange, style}) => (
    <TextField
        className={classNames(
            'address-fields__zip-code',
            style,
        )}
        name="Zip Code"
        label="Zip Code"
        fullWidth={true}
        value={value}
        placeholder="12345"
        variant="outlined"
        onChange={onChange('zipCode')}
        required={true}
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
