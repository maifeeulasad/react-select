import React, { useState } from 'react';

import styles from './Select.module.scss';

interface IItem {
  key: string;
  value: string;
}

interface ISelectedItemsProps {
  selectedItems: IItem[]
  removeSelectedItem: (key: string) => void;
}

const SelectedItems = ({ selectedItems, removeSelectedItem }:ISelectedItemsProps) => (
  <>
    {
      selectedItems.map((option) => (
        <div
          className={styles.selectedItemWrap}
          role="presentation"
        >
          <div className={styles.selectedItemtext} title={option.value}>{option.value}</div>
          { /* eslint-disable-next-line jsx-a11y/control-has-associated-label */ }
          <button className={styles.close} type="button" onClick={() => { removeSelectedItem(option.key); }} />
        </div>
      ))
    }
  </>
);

interface IInputTextProps {
  dropdownText?: string;
  searchKeyword: string;
  setSearchKeyword: (keyword: string) => void;
}

const InputText = ({ dropdownText, searchKeyword, setSearchKeyword }: IInputTextProps) => (
  <input
    value={searchKeyword}
    placeholder={dropdownText || 'Please select...'}
    className={styles.inputText}
    type="text"
    onChange={(e) => { setSearchKeyword(e.target.value); }}
  />
);

interface IItemsAvailableProps {
  availableItems: IItem[]
  onItemSelect: (key: string) => void;
}

const ItemsAvailable = ({ availableItems, onItemSelect }: IItemsAvailableProps) => (
  <div className={styles.items}>
    {
    availableItems
      .map((option) => (
        <div
          className={styles.item}
          role="presentation"
          onClick={() => { onItemSelect(option.key); }}
        >
          {option.value}
        </div>
      ))
}
  </div>
);

interface ISelectProps {
  options: IItem[];
  dropdownText?: string;
}

const Select = ({ options, dropdownText }: ISelectProps) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  const toggleOpened = () => setOpened(!opened);
  const close = () => setOpened(false);
  const resetSearch = () => setSearchKeyword('');

  const selectItem = (key: string) => setSelectedKeys([...selectedKeys, key]);
  const removeSelectedItem = (key: string) => setSelectedKeys(selectedKeys.filter((selectedKey) => selectedKey !== key));
  const removeAll = () => setSelectedKeys([]);

  const onItemSelect = (key: string) => {
    selectItem(key); resetSearch(); close();
  };

  return (
    <div>

      <div className={styles.selectionSection} onClick={() => { toggleOpened(); resetSearch(); }} role="presentation">
        <div className={styles.selectedItemsWrap}>
          <SelectedItems
            selectedItems={options.filter((option) => selectedKeys.includes(option.key))}
            removeSelectedItem={removeSelectedItem}
          />
          <InputText searchKeyword={searchKeyword} dropdownText={dropdownText} setSearchKeyword={setSearchKeyword} />
        </div>
        { /* eslint-disable-next-line jsx-a11y/control-has-associated-label */ }
        {selectedKeys.length !== 0 && <button className={styles.close} type="button" onClick={() => { removeAll(); }} />}
        <div className={styles.down} />
      </div>

      {opened && <ItemsAvailable
        availableItems={options
          .filter((option) => option.value.includes(searchKeyword) && !selectedKeys.includes(option.key))}
        onItemSelect={onItemSelect}
      />
      }
    </div>
  );
};

export { Select };
