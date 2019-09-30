import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Label = styled.label`
  cursor: pointer;
  position: relative;
  height: 1em;
  display: flex;
  align-items: center;
`;

const CheckboxInput = styled.div`
  margin: 0 0.4em 0 0;
  width: 14px;
  height: 14px;
  border-radius: 4px;
  background-color: ${(p: { checked: boolean }) => p.checked ? '#007bff' : '#fff'};
  box-shadow: rgb(153, 153, 153) 0px 0px 0px 1px inset;
`;

const LabelText = styled.span``;

export type CheckboxHTMLProps = React.InputHTMLAttributes<any>;

export type CustomProps = {
  children?: React.ReactNode
  onChange: (checked: boolean) => void
  checked: boolean
}

export type CheckboxProps = CheckboxHTMLProps & CustomProps;

const Checkbox = ({ checked, onChange, children, ...props }: CheckboxProps) => {
  const toggleChecked = () => {
    onChange(!checked)
  }

  return (
    <Label
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
      <CheckboxInput
        checked={checked}
      />
      <LabelText>
        {children}
      </LabelText>
    </Label>
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
