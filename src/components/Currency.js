import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
import '../Currency.css';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    //const [name, setName] = useState("");
    const all_currencies = {
        "$":"$ Dollar",
        "£":"£ Pound",
        "€":"€ Euro",
        "₹":"₹ Ruppee"
    };
    
    const updateCurrency = (newCurrency) => {
        
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    }

    return (
        <div className='alert alert-secondary'>
            <div className="dropdown">
                <button  className="btn btn-default dropdown-toggle" type="button" data-bs-toggle="dropdown" >
                    <span>Currency ({all_currencies[currency]}) </span>
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" onClick={(event) => updateCurrency(event.target.value)}>
                    <li><button className="dropdown-item" type="button" value="$" >$ Dollar</button></li>
                    <li><button className="dropdown-item" type="button" value="£">£ Pound</button></li>
                    <li><button className="dropdown-item" type="button" value="€">€ Euro</button></li>
                    <li><button className="dropdown-item" type="button" value="₹">₹ Ruppee</button></li>
                </ul>
            </div>
        </div>
    );
};
export default Currency;

/*
<li name="$ Dollar" value="$" >$ Dollar</li>
                    <li name="£ Pound" value="£" >£ Pound</li>
                    <li name="€ Euro" value="€" >€ Euro</li>
                    <li name="₹ Ruppee" value="₹" >₹ Ruppee</li>
*/