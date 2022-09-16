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

  return (
    <div>

      <div onClick={() => { toggleOpened(); resetSearch(); }} role="presentation">
        <div className={styles.selectedItemsWrap}>
          <SelectedItems
            selectedItems={options.filter((option) => selectedKeys.includes(option.key))}
            removeSelectedItem={removeSelectedItem}
          />
          <InputText searchKeyword={searchKeyword} dropdownText={dropdownText} setSearchKeyword={setSearchKeyword} />
          { /* eslint-disable-next-line jsx-a11y/control-has-associated-label */ }
          {selectedKeys.length !== 0 && <button className={styles.close} type="button" onClick={() => { removeAll(); }} />}
          <div className={styles.down} />
        </div>
      </div>

      {opened &&
        <div className={styles.items}>
            {
                options
                  .filter((option) => option.value.includes(searchKeyword) && !selectedKeys.includes(option.key))
                  .map((option) => (
                    <div
                      className={styles.item}
                      role="presentation"
                      onClick={() => { selectItem(option.key); resetSearch(); close(); }}
                    >
                      {option.value}
                    </div>
                  ))
            }
        </div>
        }
    </div>
  );
};

export { Select };
