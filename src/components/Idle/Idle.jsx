import style from './Idle.module.css';
import CityList from './CityList';

import AnimatedEl from './AnimatedEl';

export default function Idle({ handleSubmit }) {
  return (
    <div className={style.idleContainer}>
      <h2 className={style.idleMessage}>Search weather by location</h2>
      <CityList onClick={handleSubmit} />
      <AnimatedEl/>
    </div>
  );
}
