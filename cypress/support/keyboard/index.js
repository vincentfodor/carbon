const specialKeys = [
  'backspace',
  'del',
  'downarrow',
  'enter',
  'esc',
  'leftarrow',
  'rightarrow',
  'selectall',
  'uparrow',
  'home',
  'end',
];

const allAlpha = 'qwertyuiopasdfghjklzxcvbnm';
const allAlphaCaps = allAlpha.toUpperCase;
const punctuation = '"\'\\?/<>.,;:{[]}+=-_()*&^%@!#±§|';
const currencies = '£$';
const allNumbers = '0123456789';

const specialKeyMap = specialKeys.reduce((acc, keyName) => {
  acc[keyName] = `{${keyName}}`;
  return acc;
}, {});

export default {
  ...specialKeyMap,
  allNumbers,
  currencies,
  punctuation,
  allAlpha,
  allAlphaCaps,
};

// export keyMap;
