import SelectEl from './SelectEl';

const Stories = {
  title: 'SelectEl',
  component: SelectEl,
};

export default Stories;

const Template = args => <SelectEl {...args} />;

export const Default = Template.bind({});

Default.args = {
  option: 'daily',
  handleChange: () => console.log('handleChange')
};
