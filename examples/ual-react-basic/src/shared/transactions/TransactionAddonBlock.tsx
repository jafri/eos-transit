import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Dropdown, DropdownContainer, DropdownContent } from '../dropdown';
import { TransactionAddonButton } from './TransactionAddonButton';
import TransactionAddonMenu from './TransactionAddonMenu';

export interface TransactionAddonBlockProps {
  disabled?: boolean;
  success?: boolean;
  onWalletSelect?: (selectedWallet: any) => void;
}

export function TransactionAddonBlock({
  disabled,
  success,
  onWalletSelect
}: TransactionAddonBlockProps) {
  return disabled ? (
    <TransactionAddonButton disabled={true} success={success}>
      <IoIosArrowDown />
    </TransactionAddonButton>
  ) : (
    <Dropdown>
      {({ isExpanded, toggle }) => (
        <DropdownContainer>
          <TransactionAddonButton onClick={toggle}>
            <IoIosArrowDown />
          </TransactionAddonButton>

          <DropdownContent visible={isExpanded} alignRight={true}>
            <TransactionAddonMenu onWalletSelect={onWalletSelect} />
          </DropdownContent>
        </DropdownContainer>
      )}
    </Dropdown>
  );
}

export default TransactionAddonBlock;
