import React from 'react';
import PropTypes from 'prop-types'

export type Props = {
  onClick: () => void
  children: React.ReactNode
  checked: boolean
  onChange: () => void
}

const Checkbox = ({ checked, onChange, children }: Props) => {
  return (
      <div role="group" aria-labelledby="id-group-label">
        {/*
        wrapping a checkbox in a label makes the text also clickable,
        which is an accessibility requirement
      */}
        <label>
          <input
            type="checkbox"
            onChange={onChange}
            checked={checked}
            tabIndex={0}
            aria-checked={checked}
          />
          {children}
        </label>
      </div>
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
