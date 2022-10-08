import CurrentWeather from './CurrentWeather';

const Stories = {
  title: 'CurrentWeather',
  component: CurrentWeather,
};

export default Stories;

const Template = args => <CurrentWeather {...args} />;

export const Default = Template.bind({});

const data = {
  coord: {
    lon: 2.32,
    lat: 48.8589,
  },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04n',
    },
  ],
  base: 'stations',
  main: {
    temp: 19.73,
    feels_like: 19.66,
    temp_min: 18.87,
    temp_max: 20.42,
    pressure: 1020,
    humidity: 73,
  },
  visibility: 10000,
  wind: {
    speed: 4.63,
    deg: 230,
  },
  clouds: {
    all: 100,
  },
  dt: 1664993523,
  sys: {
    type: 2,
    id: 2012208,
    country: 'FR',
    sunrise: 1664949337,
    sunset: 1664990551,
  },
  timezone: 7200,
  id: 6545270,
  name: 'Palais-Royal',
  cod: 200,
};

Default.args = {
  data: data,
};
