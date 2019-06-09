import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    card: {
        qualified: {
            marginTop: '20px',
            backgroundColor: '#aad87f',
        },
        notQualified: {
            marginTop: '20px',
            backgroundColor: '#fcf7b3',
        },
    },
};

const EstimateCard = ({isQualified, estimateAmount}) => {
    let style;;
    let text;

    if (isQualified) {
        style = styles.card.qualified;
        text = `Congrats! We can offer you a monthly rent of ${estimateAmount}.`;
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
)
};

EstimateCard.propTypes = {
    isQualified: PropTypes.bool.isRequired,
    estimateAmount: PropTypes.string,
};

export default EstimateCard;