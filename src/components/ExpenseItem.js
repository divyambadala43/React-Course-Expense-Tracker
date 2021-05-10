import React from "react";
import './ExpenseItem.css'

const ExpenseItem = () => {
  return (
    <div className='expense-item'>
      <div>May 10 2021</div>
      <div className='expense-item__description'>
        <h2>Udemy Course</h2>
        <div className='expense-item__price'>$294.67</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
