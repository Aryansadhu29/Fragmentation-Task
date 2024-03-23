import React from 'react';

const TransactionTable = ({ burnTransactions, coinData }) => {
  return (
    <div className="transaction-table">
      <h2>Transaction Table</h2>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Chain</th>
          </tr>
        </thead>
        <tbody>
          {burnTransactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.chain}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
