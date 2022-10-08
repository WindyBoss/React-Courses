import { useEffect, useState } from 'react';

import Chart from './components/Chart';
import SelectEl from './components/SelectEl';

import styles from './ChartContainer.module.css';
import getNecessaryEl from './helpers/getNecessaryEl';

export default function ChartContainer({ data }) {
  const [newData, setNewData] = useState(null);
  const [option, setOption] = useState('daily');

  const handleChange = event => {
    setOption(event.target.value);
  };

  useEffect(() => {
    setNewData(getNecessaryEl(data.list, option));
  }, [data, option]);

  return (
    <div className={styles.chartContainer}>
      <SelectEl handleChange={handleChange} option={option} />
      <Chart data={newData} option={option} />
    </div>
  );
}
