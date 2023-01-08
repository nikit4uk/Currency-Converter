import React from 'react';
import './converter.css';

const Converter = () => {
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
                    <input onChange={() => {
                        let input = document.querySelector('.converter__first-currency input')
                        console.log(input.value)
                    }} type='number'/>
                </div>
                <div className='converter__second-currency'>
                    <select>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBR</option>
                        <option>UAH</option>
                    </select>
                    <input type='number'/>
                </div>
            </div>
        </section>
    )
}; 

export default Converter;