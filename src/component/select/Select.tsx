import React, { useState } from 'react';

import styles from './Select.module.scss';

const ITEMS = [
  {
    key: 'a',
    value: 'a',
  },
  {
    key: 'b',
    value: 'b',
  },
  {
    key: 'c',
    value: 'd',
  },
];

const Select = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [options, setOptions] = useState(ITEMS);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  const toggleOpened = () => setOpened(!opened);
  const resetSearch = () => setSearchKeyword('');

  const selectItem = (key: string) => setSelectedKeys([...selectedKeys, key]);
  const removeSelectedItem = (key: string) => setSelectedKeys(selectedKeys.filter((selectedKey) => selectedKey !== key));

  return (
    <div>
      <div>Selected Items</div>
      {
          options
            .filter((option) => selectedKeys.includes(option.key))
            .map((option) => (
              <div
                role="presentation"
                onClick={() => { removeSelectedItem(option.key); }}
              >
                {option.value}
              </div>
            ))
      }
      <div onClick={() => { toggleOpened(); resetSearch(); }} role="presentation">Menu</div>
      {opened && <input type="text" onChange={(e) => { setSearchKeyword(e.target.value); }} />}
      {opened &&
        <div className={styles.items}>
            {
                options
                  .filter((option) => option.value.includes(searchKeyword) && !selectedKeys.includes(option.key))
                  .map((option) => (
                    <div
                      role="presentation"
                      onClick={() => { selectItem(option.key); }}
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
