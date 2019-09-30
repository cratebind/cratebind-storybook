import React, { useState } from 'react';
import Checkbox, { CustomCheckbox } from '../components/Checkbox';

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

export const customCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <form>
      <CustomCheckbox checked={checked} onChange={setChecked}>
        Option 1
      </CustomCheckbox>
    </form>
  );
};

// export const emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
