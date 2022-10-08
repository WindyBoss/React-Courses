import Error from './Error';

const Stories = {
  title: 'Error',
  component: Error,
  decorators: [
    Story => (
      <div
        style={{
          width: '100%',
          height: '1200px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default Stories;

const Template = args => <Error {...args} />;

export const NetErr = Template.bind({});

NetErr.args = {
  errorMessage: 'Sorry Something Went Wrong, Please try Again',
};

export const SearchErr = Template.bind({});

SearchErr.args = {
  errorMessage: 'City or Region with such name was not found, Please try again',
};
