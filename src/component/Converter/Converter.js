import React, { useState, useEffect } from 'react';
import getData from '../../services/currency-services';
import './converter.scss';

const Converter = () => {
    const [oldValet, setOldValet] = useState('10');
    const [newValet, setNewValet] = useState('0');
    const [oldCurrency, setOldCurrency] = useState('USD');
    const [newCurrency, setNewCurrency] = useState('EUR');

    useEffect(() => {
        convertValet( oldCurrency, newCurrency,  oldValet)
    }, []);
    
    async function convertValet( currency1, currency2, amount ) {
        const res = await getData( currency1, currency2, amount );
        setNewValet(res.new_amount)
    }
    
    return (
        <div className='converter'>
            <div className='converter-form'>
                <label className='converter-label'>
                    <input type='number'
                        value={oldValet}
                        onChange={(e) => {
                            setOldValet(e.target.value)
                            convertValet( oldCurrency, newCurrency,  oldValet);
                        }}
                    />
                    <select
                        defaultValue={oldCurrency}
                        onChange={(e) => {
                            setOldCurrency(e.target.value);
                            convertValet( oldCurrency, newCurrency,  oldValet);
                        }}
                    >
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                        <option>PLN</option>
                        <option>MDL</option>
                        <option>UAH</option>
                    </select>
                </label>
                <label className='converter-label'>
                    <input type='number' readOnly value={newValet}/>
                    <select
                        defaultValue={newCurrency}
                        onChange={(e) => {
                            setNewCurrency(e.target.value)
                            convertValet( oldCurrency, newCurrency,  oldValet);
                        }}
                    >
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                        <option>PLN</option>
                        <option>MDL</option>
                        <option>UAH</option>
                    </select>
                </label>
            </div>
        </div>
    )
}; 

export default Converter;