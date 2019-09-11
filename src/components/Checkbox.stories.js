import React from 'react';

// import { Checkbox } from './Checkbox';

// const onChange = action('change');

const Checkbox = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <form>
      <div role="group" aria-labelledby="id-group-label">
        {/*
        wrapping a checkbox in a label makes the text also clickable,
        which is an accessibility requirement
      */}
        <label>
          <input
            type="checkbox"
            onChange={e => setChecked(e.target.checked)}
            checked={checked}
            tabIndex={0}
            aria-checked={checked}
          />
          Option 1
        </label>
      </div>
    </form>
  );
};

export default {
  title: 'Design System|forms/Checkbox',
  component: Checkbox,
};

// const OneCheckbox = () => {
//   const [checked, setChecked] = useState(false);
//   return (
//     <form>
//       <div role="group" aria-labelledby="id-group-label">
//         {/*
//         wrapping a checkbox in a label makes the text also clickable,
//         which is an accessibility requirement
//       */}
//         <label>
//           <input
//             type="checkbox"
//             onChange={e => setChecked(e.target.checked)}
//             checked={checked}
//             tabIndex={0}
//             aria-checked={checked}
//           />
//           Option 1
//         </label>
//       </div>
//     </form>
//   );
// };

export const DefaultCheckbox = () => {
  return React.createElement(() => {
    // eslint-disable-next-line
    const [checked, setChecked] = React.useState(false);
    return (
      <form>
        <div role="group" aria-labelledby="id-group-label">
          {/*
        wrapping a checkbox in a label makes the text also clickable,
        which is an accessibility requirement
      */}
          <label>
            <input
              type="checkbox"
              onChange={e => setChecked(e.target.checked)}
              checked={checked}
              tabIndex={0}
              aria-checked={checked}
            />
            Option 1
          </label>
        </div>
      </form>
    );
  });
};

// export const DefaultCheckbox = () => {
//   const [checked, setChecked] = React.useState(false);
//   return (
//     <form>
//       <div role="group" aria-labelledby="id-group-label">
//         {/*
//         wrapping a checkbox in a label makes the text also clickable,
//         which is an accessibility requirement
//       */}
//         <label>
//           <input
//             type="checkbox"
//             onChange={e => setChecked(e.target.checked)}
//             checked={checked}
//             tabIndex={0}
//             aria-checked={checked}
//           />
//           Option 1
//         </label>
//       </div>
//     </form>
//   );
// };

// AllCheckboxes.story = {
//   name: 'all checkboxes',
// };

// export const unchecked = () => (
//   <Checkbox id="Unchecked" label="Cats" hideLabel onChange={onChange} />
// );

// export const checked = () => (
//   <Checkbox id="Checked" label="Cats" hideLabel checked onChange={onChange} />
// );
