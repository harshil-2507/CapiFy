import React, { useState, useEffect } from 'react';
import './main.css';

function BalanceTracker({ currentUser, setCurrentUser }) {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedBalance = localStorage.getItem(`${currentUser.username}_balance`);
    const storedTransactions = JSON.parse(localStorage.getItem(`${currentUser.username}_transactions`)) || [];
    
    if (storedBalance) {
      setBalance(parseFloat(storedBalance));
    }
    setTransactions(storedTransactions);
  }, [currentUser]);

  const handleTransaction = (type) => {
    const newBalance = type === 'gain' ? balance + parseFloat(amount) : balance - parseFloat(amount);
    setBalance(newBalance);
    
    const newTransaction = { type, amount: parseFloat(amount), date: new Date().toLocaleString() };
    const newTransactions = [...transactions, newTransaction];
    setTransactions(newTransactions);

    localStorage.setItem(`${currentUser.username}_balance`, newBalance);
    localStorage.setItem(`${currentUser.username}_transactions`, JSON.stringify(newTransactions));
    setAmount('');
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Welcome, {currentUser.username}</h2>
        <h3 className="balance">Current Balance: ${balance.toFixed(2)}</h3>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleTransaction('gain');
        }}
      >
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="add-gain">Add Gain</button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleTransaction('spend');
          }}
          className="add-spend"
        >
          Add Spend
        </button>
      </form>
      <h3>Transaction History:</h3>
      <ul className="transaction-list">
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.date} - {transaction.type} of ${transaction.amount.toFixed(2)}
          </li>
        ))}
      </ul>
      <button onClick={handleLogout} className="logout">Logout</button>
    </div>
  );
}

export default BalanceTracker;
