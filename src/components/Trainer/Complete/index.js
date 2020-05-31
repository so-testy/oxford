import React from 'react';
import { withRouter } from 'react-router-dom';

import './index.scss';

const TrainerNavigation = props => {
    return (
        <section className='trainer__test-info'>
            <div className='title'>
                THANK YOU!
            </div>
            <div className='text'>
                Your solution has been sent successfully!
            </div>
        </section>)

}

export default withRouter(TrainerNavigation);