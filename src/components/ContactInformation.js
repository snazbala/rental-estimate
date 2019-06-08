import React from 'react';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';

const ContactInformation = ({classes, value, onChange}) => (
    <TextField
        className={classNames(
            'contact-information__email',
            classes.emailField,
        )}
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