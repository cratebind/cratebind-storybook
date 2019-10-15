import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import classNames from 'classnames';

// import '../../styles/checkbox.scss';

export type CheckboxHTMLProps = React.InputHTMLAttributes<any>;

export type CustomProps = {
  children?: React.ReactNode;
  onChange: (checked: boolean) => void;
  checked: boolean;
};

export type CheckboxProps = CheckboxHTMLProps & CustomProps;

const Checkbox = ({ checked, onChange, children, ...props }: CheckboxProps) => {
  const toggleChecked = () => {
    onChange(!checked);
  };

  // return (
  //   <Label
  //     onClick={toggleChecked}
  //     onKeyDown={e => {
  //       e.preventDefault();
  //       // toggle when focused and spacebar is hit
  //       if (e.keyCode === 32) {
  //         toggleChecked();
  //       }
  //     }}
  //     tabIndex={0}
  //     role="checkbox"
  //     aria-checked={checked}
  //   >
  //     <CheckboxInput checked={checked} />
  //     <LabelText>{children}</LabelText>
  //   </Label>
  // );

  return (
    <label
      className="checkbox-container"
      onClick={toggleChecked}
      onKeyDown={e => {
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
        className={classNames('checkbox-input', { 'checkbox-active': checked })}
      />
      <span className="checkbox-label">{children}</span>
    </label>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Checkbox.defaultProps = {
  children: null,
};

export default Checkbox;
