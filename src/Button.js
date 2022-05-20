import React from 'react';
import './Button.css';

const Button = ({
  children,
  className,
  sizes,
  variant,
  disableShadow,
  disabled,
  color,
  size = 'md',
  ...rest
}) => {
  return (
    <button
      className={`button ${className} size-${sizes} ${
        disableShadow ? 'disableShadow' : null
      } ${
        disabled ? 'disabled' : null
      } color-${color} variant-${variant} ${size}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
