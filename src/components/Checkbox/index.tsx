import React from 'react';
import PropTypes from 'prop-types'

export type CheckboxHTMLProps = React.InputHTMLAttributes<any>;

export type CustomProps = {
  children?: React.ReactNode
  checked: boolean
}

export type CheckboxProps = CustomProps & CheckboxHTMLProps;

const Checkbox = ({ checked, children, ...props }: CheckboxProps) => {
  return (
    <label>
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

Checkbox.propTypes = {
  appearance: PropTypes.oneOf(['primary', 'secondary']),
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  error: PropTypes.string,
  children: PropTypes.node,
};

Checkbox.defaultProps = {
  appearance: 'primary',
  hideLabel: false,
  error: null,
};

export default Checkbox;