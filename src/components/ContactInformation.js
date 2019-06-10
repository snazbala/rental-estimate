import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import './contactInformation.css';

const ContactInformation = ({ value, onChange }) => (
    <div className="contact-information__email">
        <TextField
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
    </div>
);

ContactInformation.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default ContactInformation;
