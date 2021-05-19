import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showButton, setShowButton] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
    setShowButton(false);
  };

  const showButtonHandler = () => {
    setShowButton(true);
  };

  const cancelButtonHandler = () => {
    setShowButton(false);
  };

  return (
    <div className='new-expense'>
      {!showButton && (
        <button onClick={showButtonHandler}>Add New Expense</button>
      )}

      {showButton && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelButtonHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
