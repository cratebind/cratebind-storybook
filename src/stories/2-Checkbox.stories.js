import React from 'react';
import Checkbox from '../components/Checkbox';

export default {
  title: 'Checkbox',
  parameters: {
    component: Checkbox,
  },
};

export const nativeBrowserCheckbox = () => (
  <form>
    <Checkbox>Option 1</Checkbox>
  </form>
);

// export const emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
