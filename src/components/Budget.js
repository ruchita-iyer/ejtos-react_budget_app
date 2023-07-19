import React, { useContext, /*useState*/ } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const {dispatch, budget, expenses, currency } = useContext(AppContext);
    const upper_limit_budget = 20000;
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const updateBudget = (newBudget) => {

        if(newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }

        if(newBudget > upper_limit_budget) {
            alert("The value cannot exceed remaining funds  £"+upper_limit_budget);
            newBudget = budget;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(newBudget)
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    step="10"
                    //style={{ marginLeft: '2rem' , size: 10}}
                    style={{width: '65%'}}
                    onChange={(event) => updateBudget(event.target.value)}>
                    </input>
            </span>    
        </div>
    );
};
export default Budget;