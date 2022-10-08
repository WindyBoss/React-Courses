import Pending from './Pending';

const Stories = {
  title: 'Pending',
  component: Pending,
};

export default Stories;

const Template = args => <Pending {...args} />;

export const Default = Template.bind({});

Default.args = {};
