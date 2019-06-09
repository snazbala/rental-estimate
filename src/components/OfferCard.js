import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// TODO: Move styles to css
const styles = {
    card: {
        qualified: {
            marginTop: '20px',
            backgroundColor: '#36a04c',
            color: 'white',
            fontWeight: '500'
        },
        notQualified: {
            marginTop: '20px',
            backgroundColor: '#bf4203',
            color: 'white',
            fontWeight: '500'
        },
    },
};

const OfferCard = ({offerAmount}) => {
    let style;
    let text;

    if (offerAmount) {
        style = styles.card.qualified;
        text = `Congrats! We can offer you a monthly rent of $${offerAmount}.`;
    } else {
        style = styles.card.notQualified;
        text = 'Sorry, but we are unable to make an offer on this property.'
    }

    return (
        <Card style={style}>
            <CardContent>
                {text}
            </CardContent>
        </Card>
    );
};

OfferCard.propTypes = {
    offerAmount: PropTypes.number,
};

export default OfferCard;