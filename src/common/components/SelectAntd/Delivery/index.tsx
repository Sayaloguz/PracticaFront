"use client";
import { Form, Select } from "antd";
import { FC } from "react";

interface SelectAntdInterface {
  options: Utility.SelectOption[];
  value: string;
  onChange: (value: string) => void;
}

const SelectAntd: FC<SelectAntdInterface> = ({ options, value, onChange }) => {
  return (
    <Form layout="horizontal">
      <Form.Item label="Buscar por">
        <Select
          value={value}
          style={{ width: 150 }}
          onChange={onChange}
          options={options}
        />
      </Form.Item>
    </Form>
  );
};

export default SelectAntd;
