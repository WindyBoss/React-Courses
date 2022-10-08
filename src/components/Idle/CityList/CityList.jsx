import style from './CityList.module.css';

const cityList = [
  'New York',
  'London',
  'Paris',
  'Warsaw',
  'Madrid',
  'Toronto',
  'Rome',
  'Berlin',
  'Tokyo',
  'Sidney',
];

export default function CityList({ onClick }) {
  return (
    <ul className={style.cityList}>
      <h3>Popular Cities</h3>
      {cityList.map(city => (
        <li
          key={city}
          onClick={() => {
            onClick(city);
          }}
          className={style.cityListItem}
        >
          {city}
        </li>
      ))}
    </ul>
  );
}
