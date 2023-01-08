import React, { useState, useEffect } from "react";
import './header.css';
import USD from '../../img/USA-flag.png';
import EUR from '../../img/EUR-flag.png';
import converter from '../../services/converter-services';

const Header = () => {
    const [ isLoaded, setIsLoaded ] = useState(false);
    let USDtoUAH = 0;
    let EURtoUAH = 0;

    useEffect(() => {
        converter( USDtoUAH, 'USD', 'UAH', 1, setIsLoaded);
        converter( EURtoUAH, 'EUR', 'UAH', 1, setIsLoaded);
        // return () => value = converter( 'USD', 'UAH', 1, setIsLoaded );
    }, [USDtoUAH])

    if(!isLoaded){
        return (
            <header>
                <div className='container'>
                    <div></div>
                    <ul className='currencys'>
                        <li className='currency__USD'>
                            <img src={USD} alt='USD-flag'/>
                            <p></p>
                        </li>
                        <li className='currency__EUR'>
                            <img src={EUR} alt='EUR-flag'/>
                            <p></p>
                        </li>
                    </ul>
                </div>
            </header>
        );
    } else {
        return (
            <header>
                <div className='container'>
                    <div></div>
                    <ul className='currencys'>
                        <li className='currency__USD'>
                            <img src={USD} alt='USD-flag'/>
                            <p>${USDtoUAH}</p>
                        </li>
                        <li className='currency__EUR'>
                            <img src={EUR} alt='EUR-flag'/>
                            <p>€{EURtoUAH}</p>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;