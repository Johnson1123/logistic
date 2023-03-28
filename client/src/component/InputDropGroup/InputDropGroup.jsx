import React, { useState } from 'react';
import { Select, Space } from 'antd';

const provinceData = ['Zhejiang', 'Jiangsu'];

const cityData = ['Nanjing', 'Suzhou', 'Zhenjiang']

function InputDropGroup() {
  const [cities, setCities] = useState();
  const [secondCity, setSecondCity] = useState();
  return (
    <Space wrap>
      <Select
        defaultValue={provinceData[0]}
        style={{ width: 120 }}
        options={provinceData.map((province) => ({ label: province, value: province }))}
      />
      <Select
        style={{ width: 120 }}
        defaultValue={cityData[0]}
        options={cityData.map((city) => ({ label: city, value: city }))}
      />
    </Space>
  );
};

export default InputDropGroup