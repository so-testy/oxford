import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './index.scss';
import withRedux from './withRedux';

class ConstructorParams extends Component {

    handleInputChange(e) {
        const { name, value } = e.target;
        const { changeConstructor, constructor } = this.props;

        changeConstructor({
            ...constructor,
            [name]: value
        });
    }

    render() {
        const { constructor } = this.props;

        return (
            <section className='constructor__params'>
                <div className='about'>
                    <div className='title'>
                        <input 
                            type='text' 
                            name='title'
                            value={constructor.title || ''} 
                            onChange={this.handleInputChange.bind(this)}
                        />
                    </div>
                    <div className='description'>
                        <input 
                            type='text'
                            name='description'
                            value={constructor.description || ''} 
                            onChange={this.handleInputChange.bind(this)} />
                    </div>
                </div>
                <div className='color'>
                    <button value='#6D6AFF' style={{background: '#6D6AFF'}}></button>
                    <button value='#EBFF00' style={{background: '#EBFF00'}}></button>
                    <button value='#FF6262' style={{background: '#FF6262'}}></button>
                </div>
            </section>)
    }
}

export default withRouter(withRedux(ConstructorParams));