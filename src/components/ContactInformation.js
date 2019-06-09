import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const ContactInformation = ({value, onChange}) => (
    <TextField
        className="contact-information__email"
        style={{marginBottom: '20px'}}
        type="email"
        name="Email Address"
        label="Email Address"
        fullWidth={true}
        value={value}
        placeholder="bilbo.baggins@bag-end.com"
        variant="outlined"
        onChange={onChange('emailAddress')}
        required={true}
    />
);

ContactInformation.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default ContactInformation;