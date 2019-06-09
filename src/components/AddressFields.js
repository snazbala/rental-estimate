import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

// TODO: Move styles to css
const styles = {
    inputField: {
        marginBottom: '20px',
    },
};

const Address1 = ({value, onChange}) => (
    <TextField
        className="address-fields__address1"
        style={styles.inputField}
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

const Address2 = ({value, onChange}) => (
    <TextField
        className="address-fields__address2"
        style={styles.inputField}
        name="Address 2"
        label="Address 2"
        fullWidth={true}
        value={value}
        placeholder="Hole #2"
        variant="outlined"
        onChange={onChange('address2')}
    />
);

const City = ({value, onChange}) => (
    <TextField
        className="address-fields__city"
        style={styles.inputField}
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

const State = ({value, onChange}) => (
    <TextField
        className="address-fields__state"
        style={styles.inputField}
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

const ZipCode = ({value, onChange}) => (
    <TextField
        className="address-fields__zip-code"
        style={styles.inputField}
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

const AddressFields = ({address1, address2, city, state, zipCode, onChange}) => (
    <div>
        <Address1 value={address1} onChange={onChange} />
        <Address2 value={address2} onChange={onChange} />
        <City value={city} onChange={onChange} />
        <State value={state} onChange={onChange} />
        <ZipCode value={zipCode} onChange={onChange} />
    </div>
);

AddressFields.propTypes = {
    address1: PropTypes.string.isRequired,
    address2: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default AddressFields;
