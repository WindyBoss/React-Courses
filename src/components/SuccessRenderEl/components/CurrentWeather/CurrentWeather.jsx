import DeviceThermostatRoundedIcon from '@mui/icons-material/DeviceThermostatRounded';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import OpacityRoundedIcon from '@mui/icons-material/OpacityRounded';
import CompressRoundedIcon from '@mui/icons-material/CompressRounded';

import { Table, TableBody, TableCell, TableRow } from '@mui/material';

import styles from './CurrentWeather.module.css';

import getWeatherIcon from 'components/SuccessRenderEl/helpers/getWeatherIcon';

export default function CurrentWeather({ data }) {
  const { name, main, wind, weather } = data;

  const tableData = [
    {
      name: 'Current Temperature',
      data: `${Math.round(main.temp * 10) / 10}°`,
      icon: (
        <DeviceThermostatRoundedIcon fontSize="medium" sx={getIconStyles(10)} />
      ),
    },
    {
      name: 'Feels Like',
      data: `${Math.round(main.feels_like * 10) / 10}°`,
      icon: (
        <DeviceThermostatRoundedIcon fontSize="medium" sx={getIconStyles(10)} />
      ),
    },
    {
      name: 'Max/Min',
      data: `${Math.round(main.temp_max * 10) / 10}°  /
      ${Math.round(main.temp_min * 10) / 10}°`,
      icon: (
        <DeviceThermostatRoundedIcon fontSize="medium" sx={getIconStyles(10)} />
      ),
    },
    {
      name: 'Wind Speed',
      data: `${wind.speed} m/s`,
      icon: <AirRoundedIcon fontSize="medium" sx={getIconStyles(10)} />,
    },
    {
      name: 'Humidity',
      data: `${main.humidity} %`,
      icon: <OpacityRoundedIcon fontSize="medium" sx={getIconStyles(10)} />,
    },
    {
      name: 'Pressure',
      data: `${main.pressure} mbar`,
      icon: <CompressRoundedIcon fontSize="medium" sx={getIconStyles(10)} />,
    },
  ];

  return (
    <div>
      <h2 className={styles.title}>
        Weather in {name}
        {getWeatherIcon(weather[0].main)}
      </h2>
      <Table sx={{ maxWidth: '500px', margin: '30px' }}>
        <TableBody>
          {tableData.map(data => (
            <TableRow key={data.name} sx={getRowStyle()}>
              <TableCell sx={getCellStyle()}>{data.name}</TableCell>
              <TableCell sx={getCellStyle()}>
                {data.data}
                {data.icon}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function getIconStyles(margin) {
  return { marginLeft: `${margin}px` };
}

function getRowStyle(theme) {
  return {
    display: 'flex',
    minWidth: '100%',
    justifyContent: 'space-between',
    borderBottom: `1px solid #000000`,
  };
}

function getCellStyle(theme) {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    color: '#000000',
    fontSize: '20px',
    border: 'none',
  };
}
