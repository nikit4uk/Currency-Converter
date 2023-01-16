import React, { useRef } from 'react';
import './currencys.css';
import currencys from '../../store/currencys';

const Currencys = () => {
    return (
        <ul className='currencys'>
            {currency}
        </ul>
    )
}

let currency = currencys.map((item) => {
    return (
        <li className='currency' key={`currency-${item.id}`}>
            <span className='currency-info'>
                <img src={item.icon} alt={`currency-${item.name}`}/>
                <h3>{item.name}</h3>
            </span>
            <h4 className='currency-amount'></h4>
        </li>
    )
});

export default Currencys;