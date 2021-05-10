import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = "May 10 2021";
  const expenseTitle = "Udemy Course";
  const expenseAmount = 294.67;

  return (
    <div className='expense-item'>
      <div> {expenseDate} </div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
