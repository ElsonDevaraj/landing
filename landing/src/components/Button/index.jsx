import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[33px]",
};
const variants = {
  outline: {
    white_A700: "border-white-A700 border-2 border-solid text-white-A700",
  },
};
const sizes = {
  xs: "h-[66px] px-5 text-[26px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "xs",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-white-A700 tracking-[1.17px] text-[26px] border-white-A700 border-2 border-solid min-w-[224px] rounded-[33px] ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["white_A700"]),
};

export { Button };
