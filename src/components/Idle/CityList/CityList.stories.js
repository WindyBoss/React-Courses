import CityList from './CityList';

const Stories = {
  title: 'CityList',
  component: CityList,
  decorators: [
    Story => (
      <div
        style={{
          width: '400px',
          height: '1200px',
          background: '#000',
          color: '#fff',
          paddingLeft: '20px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default Stories;

const Template = args => <CityList {...args} />;

export const Default = Template.bind({});

Default.args = {
  onClick: () => {
    console.log('onClick');
  },
};
