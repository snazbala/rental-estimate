import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const styles = {
    selectField: {
        margin: '-15px 15px 15px 0px',
    },
    sqFtField: {
        marginTop: '-15px',
        width: '150px',
    },
};

const getMenuItems = (max, placeholder) => {
    const menuItems = [];

    if (placeholder) {
        menuItems.push(
            <MenuItem value="" disabled key="placeholder">{placeholder}</MenuItem>
        )
    }

    for (let i = 0; i <= max; i++) {
        menuItems.push(
            <MenuItem value={i} key={i}>{i}</MenuItem>
        );
    }

    return menuItems;
}

const NumBedrooms = ({value, onChange}) => {
    const menuItems = getMenuItems(10, "# Bedrooms");

    return (
        <FormControl style={styles.selectField}>
            <h4># of Bedrooms*</h4>
            <Select
                value={value}
                onChange={onChange('numBedrooms')}
                input={<OutlinedInput name="numBedrooms" id="numBedrooms" />}
                required={true}
            >
                {menuItems}
            </Select>
        </FormControl>
    );
};

const NumBathrooms = ({value, onChange}) => {
    const menuItems = getMenuItems(10, "# Bathrooms");

    return (
        <FormControl style={styles.selectField}>
            <h4># of Bathrooms*</h4>
            <Select
                value={value}
                onChange={onChange('numBathrooms')}
                input={<OutlinedInput name="numBathrooms" id="numBathrooms" />}
                required={true}
            >
                {menuItems}
            </Select>
        </FormControl>
    );
};

const SquareFootage = ({value, onChange}) => (
    <FormControl style={styles.sqFtField}>
        <h4>Square Ft*</h4>
        <TextField
            name="Square Footage"
            label="Square Ft"
            value={value}
            placeholder="950"
            variant="outlined"
            onChange={onChange('sqFt')}
            required={true}
        />
    </FormControl>
);

const PropertyInformation = ({numBedrooms, numBathrooms, sqFt, onChange}) => (
    <Grid container className="property-information__container">
        <Grid item xs={12}>
            <NumBedrooms
                className="property-information__num-beds"
                value={numBedrooms}
                onChange={onChange}
            />
            <NumBathrooms
                className="property-information__num-baths"
                value={numBathrooms}
                onChange={onChange}
            />
            <SquareFootage
                className="property-information__sq-ft"
                value={sqFt}
                onChange={onChange}
            />
        </Grid>
    </Grid>
);

PropertyInformation.propTypes = {
    numBedrooms: PropTypes.number.isRequired,
    numBathrooms: PropTypes.number.isRequired,
    sqFt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default PropertyInformation;

