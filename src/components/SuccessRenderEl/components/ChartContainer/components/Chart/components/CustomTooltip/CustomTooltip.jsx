import getWeatherIcon from 'components/SuccessRenderEl/helpers/getWeatherIcon';
import styles from './CustomTooltip.module.css';

const CustomTooltip = ({ active, payload, data, label }) => {

  if (active && payload && payload.length) {
    const chosenEl = data.find(el => el.dt_txt === label);
    return (
      <div className={styles.tooltipContainer}>
        <p className="label">{`Temperature : ${payload[0].value}°`}</p>
        {getWeatherIcon(chosenEl.weather[0].main)}
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
