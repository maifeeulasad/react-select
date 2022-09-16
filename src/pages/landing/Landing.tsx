import React from 'react';
import { Select } from '../../component/select/Select';

const OPTIONS = [
  {
    key: 'a',
    value: 'a-long long',
  },
  {
    key: 'b',
    value: 'long long b',
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
];

const Landing = () => (
  <div>

    <header>
      <div className="text-red-600">
        React Select
      </div>
      <div>
        <Select options={OPTIONS} />
      </div>
    </header>
  </div>
);

export { Landing };
