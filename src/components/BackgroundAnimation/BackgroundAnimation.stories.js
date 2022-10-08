import BackgroundAnimation from './BackgroundAnimation';

const Stories = {
  title: 'BackgroundAnimation',
  component: BackgroundAnimation,
};

export default Stories;

const Template = args => <BackgroundAnimation {...args} />;

export const Default = Template.bind({});

Default.args = { children: <p>XXX</p> };
