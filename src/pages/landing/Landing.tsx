import React from 'react';
import { Select } from '../../component/select/Select';

import styles from './Landing.module.scss';

const OPTIONS = [
  {
    key: 'a',
    value: 'a-long long',
  },
  {
    key: 'b',
    value: 'long long b',
    disabled: true,
  },
  {
    key: 'c',
    value: 'asdkjahsdkjhaskjdhkjashdkjhaskjdhkjsahkjdhkjasjdkd',
  },
  {
    key: 'd',
    value: 'asdkjahsdkjhaskjdhkjashdkjhaskjdhkjsahkjdhkjasjdkd',
  },
  {
    key: 'e',
    value: 'e111',
  },
  {
    key: 'f',
    value: 'f1111',
  },
  {
    key: 'g',
    value: '1111g',
  },
  {
    key: 'h',
    value: '11h11',
  },
  {
    key: 'i',
    value: 'idjashjk',
  },
  {
    key: 'j',
    value: 'j32432',
  },
  {
    key: 'k',
    value: '87687k',
  },
  {
    key: 'l',
    value: '87687k',
  },
  {
    key: 'm',
    value: '87687k',
  },
  {
    key: 'n',
    value: '87687k',
  },
  {
    key: 'o',
    value: '87687k',
  },
  {
    key: 'p',
    value: '87687k',
  },
  {
    key: 'q',
    value: '87687k',
    disabled: true,
  },
];

const Landing = () => (
  <div className={styles.wrap}>
    <Select options={OPTIONS} />
  </div>
);

export { Landing };
