import React, { FC } from "react";
import { Input, InputProps, Form } from "antd";
import { FormItemProps } from "antd/es/form";

interface AntDFloatingInputProps extends InputProps {
  label: string;
  formItemProps?: FormItemProps;
}

const AntdFloatingInput: FC<AntDFloatingInputProps> = ({
  label,
  formItemProps,
  ...inputProps
}) => {
  return (
    <Form.Item {...formItemProps} style={{ marginBottom: 24 }}>
      <div className="relative z-0 w-full group">
        <Input
          {...inputProps}
          placeholder=" "
          className="hover:bg-transparent focus:bg-transparent bg-transparent block py-2.5 px-0 w-full text-sm text-gray-900  border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
        />
        <label
          htmlFor={inputProps.id}
          className="hover:bg-transparent focus:bg-transparent bg-transparent peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
          {formItemProps?.required && <span className="text-red-500"> *</span>}
        </label>
      </div>
    </Form.Item>
  );
};

export default AntdFloatingInput;
