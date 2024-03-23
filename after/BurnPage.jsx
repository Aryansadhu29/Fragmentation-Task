import React from 'react';
import BurnForm from './BurnForm';
import BurnStats from './BurnStats';
import TransactionTable from './TransactionTable';
import ChainSelectorModal from './ChainSelectorModal';

const BurnPage = () => {
  return (
    <div>
      <BurnForm />
      <BurnStats />
      <TransactionTable />
      <ChainSelectorModal />
    </div>
  );
};

export default BurnPage;
