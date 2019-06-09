import React from 'react';
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

export default ContactInformation;