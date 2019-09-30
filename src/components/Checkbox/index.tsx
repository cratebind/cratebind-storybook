import React from 'react';
// import PropTypes from 'prop-types'

export type CheckboxHTMLProps = React.InputHTMLAttributes<any>;

export type CustomProps = {
  children?: React.ReactNode
  labelClassName?: string
  onChange: (checked: boolean) => void
  checked: boolean
}

export type CheckboxProps = CheckboxHTMLProps & CustomProps;

const Checkbox = ({ checked, children, labelClassName, ...props }: CheckboxProps) => {
  return (
    <label className={labelClassName}>
      <input
        type="checkbox"
        checked={checked}
        aria-checked={checked}
        tabIndex={0}
        {...props}
      />
      {children}
    </label>
  );
};

const CustomCheckbox = ({ checked, onChange, children, labelClassName }: CheckboxProps) => {
  const toggleChecked = () => {
    onChange(!checked)
  }

  return (
    <label
      className={labelClassName}
      onClick={toggleChecked}
      onKeyDown={(e) => {
          e.preventDefault();
          // toggle when focused and spacebar is hit
          if (e.keyCode === 32) {
            toggleChecked();
          }
        }}
        tabIndex={0}
        role="checkbox"
        aria-checked={checked}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: 8,
            backgroundColor: checked ? '#007bff' : '#fff'
          }}
        />
        {children}
      </label>
  )
}

// Checkbox.propTypes = {
//   appearance: PropTypes.oneOf(['primary', 'secondary']),
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   hideLabel: PropTypes.bool,
//   error: PropTypes.string,
//   children: PropTypes.node,
// };

// Checkbox.defaultProps = {
//   appearance: 'primary',
//   hideLabel: false,
//   error: null,
// };

export { CustomCheckbox }
export default Checkbox;
