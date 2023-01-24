import React from 'react';
import './currencys.scss';
import Currency from './Currency/Currency';

const Currencys = () => {
    return (
        <ul className='currencys'>
            <Currency />
        </ul>
    )
}

export default Currencys;