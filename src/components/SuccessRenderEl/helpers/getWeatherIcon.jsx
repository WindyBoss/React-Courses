import CloudRoundedIcon from '@mui/icons-material/CloudRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import ThunderstormRoundedIcon from '@mui/icons-material/ThunderstormRounded';

function getIconStyles(margin) {
  return { marginLeft: `${margin}px` };
}

export default function getWeatherIcon(weather) {
  switch (weather) {
    case 'Clouds':
      return <CloudRoundedIcon fontSize="large" sx={getIconStyles(40)} />;
    case 'Snow':
      return <AcUnitRoundedIcon fontSize="large" sx={getIconStyles(40)} />;
    case 'Rain':
      return (
        <ThunderstormRoundedIcon fontSize="large" sx={getIconStyles(40)} />
      );
    default:
      return <WbSunnyRoundedIcon fontSize="large" sx={getIconStyles(40)} />;
  }
}
