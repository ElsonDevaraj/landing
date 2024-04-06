import React from "react";

const sizes = {
  xs: "text-xl font-normal",
  lg: "text-[56px] font-normal md:text-5xl sm:text-[42px]",
  s: "text-[26px] font-normal md:text-2xl sm:text-[22px]",
  md: "text-[37px] font-normal md:text-[35px] sm:text-[33px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-baloobhai ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
