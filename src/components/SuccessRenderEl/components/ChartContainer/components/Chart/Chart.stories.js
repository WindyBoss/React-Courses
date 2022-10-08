import Chart from './Chart';

const Stories = {
  title: 'Chart',
  component: Chart,
};

export default Stories;

const Template = args => <Chart {...args} />;

export const Default = Template.bind({});

const data = [
  {
    dt: 1665252000,
    main: {
      temp: 17.24,
      feels_like: 16.25,
      temp_min: 15.9,
      temp_max: 17.24,
      pressure: 1024,
      sea_level: 1024,
      grnd_level: 1019,
      humidity: 47,
      temp_kf: 1.34,
    },
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02n',
      },
    ],
    clouds: {
      all: 14,
    },
    wind: {
      speed: 2.46,
      deg: 30,
      gust: 5.19,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-10-08 18:00:00',
  },
  {
    dt: 1665338400,
    main: {
      temp: 17.19,
      feels_like: 16.19,
      temp_min: 17.19,
      temp_max: 17.19,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 1010,
      humidity: 47,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01n',
      },
    ],
    clouds: {
      all: 2,
    },
    wind: {
      speed: 1.57,
      deg: 129,
      gust: 1.7,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-10-09 18:00:00',
  },
  {
    dt: 1665424800,
    main: {
      temp: 18.92,
      feels_like: 18.33,
      temp_min: 18.92,
      temp_max: 18.92,
      pressure: 1020,
      sea_level: 1020,
      grnd_level: 1015,
      humidity: 56,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 88,
    },
    wind: {
      speed: 2.5,
      deg: 353,
      gust: 6.09,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-10-10 18:00:00',
  },
  {
    dt: 1665511200,
    main: {
      temp: 16.43,
      feels_like: 15.54,
      temp_min: 16.43,
      temp_max: 16.43,
      pressure: 1023,
      sea_level: 1023,
      grnd_level: 1018,
      humidity: 54,
      temp_kf: 0,
    },
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02n',
      },
    ],
    clouds: {
      all: 24,
    },
    wind: {
      speed: 3.34,
      deg: 26,
      gust: 6.92,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-10-11 18:00:00',
  },
  {
    dt: 1665597600,
    main: {
      temp: 17.8,
      feels_like: 17.05,
      temp_min: 17.8,
      temp_max: 17.8,
      pressure: 1022,
      sea_level: 1022,
      grnd_level: 1017,
      humidity: 54,
      temp_kf: 0,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01n',
      },
    ],
    clouds: {
      all: 1,
    },
    wind: {
      speed: 1.24,
      deg: 5,
      gust: 1.48,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'n',
    },
    dt_txt: '2022-10-12 18:00:00',
  },
];

Default.args = {
  data: data,
  option: 'daily',
};
