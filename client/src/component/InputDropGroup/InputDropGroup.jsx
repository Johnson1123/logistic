import React, { useState } from "react";
import { Select, Space } from "antd";

const provinceData = ["June", "July"];

const cityData = ["October", "September", "December"];

function InputDropGroup() {
  const [cities, setCities] = useState();
  const [secondCity, setSecondCity] = useState();
  return (
    <Space>
      <Select
        defaultValue={provinceData[0]}
        options={provinceData.map((province) => ({
          label: province,
          value: province,
        }))}
      />
      <Select
        defaultValue={cityData[0]}
        options={cityData.map((city) => ({ label: city, value: city }))}
      />
    </Space>
  );
}

export default InputDropGroup;
