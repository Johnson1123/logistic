import { Select, Space } from "antd";
import React from "react";

function SelectComponent(props) {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  return (
    <>
      <Space wrap>
        <Select
          className={props.className}
          showSearch
          placeholder={props.options[0].label}
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={props.options}
        />
      </Space>
    </>
  );
}

export default SelectComponent;
