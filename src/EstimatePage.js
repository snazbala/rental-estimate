import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class EstimatePage extends React.PureComponent {
    constructor(props) {}

    render() {
        return (
            <div className="estimate-page--container">
                <h2>Rent Your Home!</h2>
                <div>
                    <Input variant="outlined" />
                </div>
                <div>
                    <Button variant="contained" color="primary">
                        Get Estimate
                    </Button>
                </div>
            </div>
        );
    }
}

export default EstimatePage;
