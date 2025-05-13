import React, { FC } from "react";
import { Input, InputProps } from "antd";

const InputUnderline: FC<InputProps> = (props) => {
  return (
    <Input
      className="hover:bg-transparent text-base focus:bg-transparent bg-transparent block py-2.5 px-0 w-full text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
      {...props}
    ></Input>
  );
};

export default InputUnderline;
