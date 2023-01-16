import React, { Component } from "react";
import './header.css';
import USD from '../../img/USA-flag.png';
import EUR from '../../img/EUR-flag.png';
import Converter from "../../services/converter-services";

export default class Header extends Component {

    converter = new Converter();

    state = {
        USDtoUAH: 0,
        EURtoUAH: 0
    }

    componentDidMount() {
        this.updateCurrency( 'USD', 'UAH', 1 );
        this.updateCurrency( 'EUR', 'UAH', 1 );
    }

    updateCurrency( currency1, currency2, amount ) {
        this.converter.getResult( currency1, currency2, amount )
        .then((new_amount) => {
            if(currency1 === 'USD') {
                this.setState({
                    USDtoUAH: new_amount
                })
            } else if(currency1 === 'EUR') {
                this.setState({
                    EURtoUAH: new_amount
                })
            }
        })
    }

    render() {
        return (
            <header>
                <div className='container'>
                    <div></div>
                    <ul className='currencys'>
                        <li className='currency__USD'>
                            <img src={USD} alt='USD-flag'/>
                            <p>${this.state.USDtoUAH}</p>
                        </li>
                        <li className='currency__EUR'>
                            <img src={EUR} alt='EUR-flag'/>
                            <p>€{this.state.EURtoUAH}</p>
                        </li> 
                    </ul>
                </div>
            </header>
        );
    }
}