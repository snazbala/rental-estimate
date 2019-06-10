import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './offerCard.css';

const overrideStyles = {
    notQualified: {
        backgroundColor: '#bf4203',
        color: 'white',
    },
    qualified: {
        backgroundColor: '#36a04c',
        color: 'white',
    },
};

const OfferCard = ({ offerAmount }) => {
    let className;
    let style;
    let text;

    if (offerAmount) {
        className = 'offer_card--qualified';
        style = overrideStyles.qualified;
        text = `Congrats! We can offer you a monthly rent of $${offerAmount}.`;
    } else {
        className = 'offer_card--not-qualified';
        style = overrideStyles.notQualified;
        text = 'Sorry, but we are unable to make an offer on this property.';
    }

    return (
        <Card className={className} style={style}>
            <CardContent>{text}</CardContent>
        </Card>
    );
};

OfferCard.propTypes = {
    offerAmount: PropTypes.number,
};

export default OfferCard;
