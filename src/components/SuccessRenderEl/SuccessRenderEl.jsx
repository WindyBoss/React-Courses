import CurrentWeather from './components/CurrentWeather';
import ChartContainer from './components/ChartContainer';

import styles from './SuccessRenderEl.module.css';

export default function SuccessRenderEl({ data }) {
  return (
    <div className={styles.onSuccessContainer}>
      <CurrentWeather data={data.currentWeather} />
      <ChartContainer data={data.data5Days} />
    </div>
  );
}
