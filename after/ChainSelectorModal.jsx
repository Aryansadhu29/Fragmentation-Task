import React from 'react';
import { Modal, Button } from '@material-ui/core';

const ChainSelectorModal = ({ openChainSelector, setOpenChainSelector, receiveChains, suppliesChain, setSuppliesChain }) => {
  const handleClose = () => {
    setOpenChainSelector(false);
  };

  const handleChainSelection = (chain) => {
    setSuppliesChain(chain);
    setOpenChainSelector(false);
  };

  return (
    <Modal
      open={openChainSelector}
      onClose={handleClose}
      aria-labelledby="chain-selector-modal"
      aria-describedby="chain-selector-modal-description"
    >
      <div className="chain-selector-modal">
        <h2 id="chain-selector-modal">Select Chain</h2>
        <div id="chain-selector-modal-description">
          <ul>
            {receiveChains.map((chain, index) => (
              <li key={index}>
                <Button onClick={() => handleChainSelection(chain)}>{chain.name}</Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default ChainSelectorModal;
