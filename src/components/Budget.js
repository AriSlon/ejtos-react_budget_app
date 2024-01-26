import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value;

        if (updatedBudget > 20000) {
            alert(`The new budget can not be higher than £20000`);
        } 
        
        else if (updatedBudget < 960) {
            alert(`The new budget can not be lower than the spending`);
        } 
        else {
            setNewBudget(updatedBudget);
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            />
        </div>
    );
};

export default Budget;
