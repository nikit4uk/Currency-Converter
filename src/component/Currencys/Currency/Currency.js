import React, { useState, useEffect } from 'react';
import currencys from '../../../store/currencys';
import getData from '../../../services/currency-services'

const Currency = () => {
    const [ amountUSD, setAmountUSD ] = useState(0);
    const [ amountEUR, setAmountEUR ] = useState(0);
    const [ amountPLN, setAmountPLN ] = useState(0);

    useEffect(() => {
        getResult('USD');
        getResult('EUR');
        getResult('PLN');
    },[]);

    async function getResult( currency1 ) {
        const res = await getData( currency1 );
        switch (currency1) {
            case 'USD':
                setAmountUSD(res.new_amount);
                break;
            case 'EUR':
                setAmountEUR(res.new_amount);
                break;
            case 'PLN':
                setAmountPLN(res.new_amount);
                break;
            default: 
                setAmountUSD();
                setAmountEUR();
                setAmountPLN();
        }
    };
    
    let currency = currencys.map((item) => {
        return (
            <li className='currency' key={`currency-${item.id}`}>
                <span className='currency-info'>
                    <img src={item.icon} alt={`currency-${item.name}`}/>
                    <h3>{item.name}</h3>
                </span>
                <h4 className='currency-amount'>
                    {item.name === 'USD' && amountUSD}
                    {item.name === 'EUR' && amountEUR}
                    {item.name === 'PLN' && amountPLN}
                </h4>
            </li>
        )
    });

    return (
        <React.Fragment>
            {currency}
        </React.Fragment>
    )
}
export default Currency;