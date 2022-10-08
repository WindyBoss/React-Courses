import AnimatedEl from './AnimatedEl';

const Stories = {
  title: 'AnimatedEl',
  component: AnimatedEl,
  decorators: [
    Story => (
      <div
        style={{
          width: '700px',
          height: '300px',
          background: '#000',
          position: 'relative',
          color: '#fff'
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default Stories;

const Template = args => <AnimatedEl {...args} />;

export const Default = Template.bind({});
