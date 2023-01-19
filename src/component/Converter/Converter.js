import React, { useState } from 'react';
import './converter.css';

const Converter = () => {
    const [oldValet, setOldValet] = useState(1);
    const [newValet, setNewValet] = useState(0);
    return (
        <section id='converter'>
            <div className='container'>
                <div className='converter__first-currency'>
                    <select>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBR</option>
                        <option>UAH</option>
                    </select>
                    <input type='number' value={oldValet} onChange={(e) => {
                        setOldValet(e.target.value)
                        console.log(oldValet)
                    }}/>
                </div>
                <div className='converter__second-currency'>
                    <select>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBR</option>
                        <option>UAH</option>
                    </select>
                    <input type='number' value={newValet}/>
                </div>
            </div>
        </section>
    )
}; 

export default Converter;