import React from 'react';
// import { action } from '@storybook/addon-actions';
import Checkbox from '../components/Checkbox';

export default {
  title: 'Checkbox',
  parameters: {
    component: Checkbox,
  },
};

export const text = () => (
  <form>
    <Checkbox label="Option 1" />
  </form>
);

// export const emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
