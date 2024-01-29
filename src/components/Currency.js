import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        const updatedCurrency = event.target.value;

        setNewCurrency(updatedCurrency);
    }

    return (
             <><div className="input-group-prepend" >
            <label className="input-group-text" style={{ backgroundColor: '#13d685', width: '100px'}} htmlFor="inputGroupSelect03">Currency </label>
        </div><select className="custom-select" id="inputGroupSelect02" style={{ backgroundColor: '#13d685' }} onChange={handleCurrencyChange}>
                <option defaultValue value="Dolar" name="Dolar">$ Dolar</option>
                <option value="Pound" name="Pound">£ Pound</option>
                <option value="Euro" name="Euro">€ Euro</option>
                <option value="Rupee" name="Reduce">₹ Rupee</option>
            </select></>

    );
};

export default Currency;
