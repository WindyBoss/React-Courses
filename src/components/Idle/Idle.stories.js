import Idle from './Idle';

const Stories = {
  title: 'Idle',
  component: Idle,
};

export default Stories;

const Template = args => <Idle {...args} />;

export const Default = Template.bind({});

Default.args = {
  handleSubmit: () => {
    console.log('handleSubmit');
  },
};
