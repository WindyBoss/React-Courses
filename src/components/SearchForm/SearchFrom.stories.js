import SearchForm from './SearchForm';

const Stories = {
  title: 'SearchForm',
  component: SearchForm,
};

export default Stories;

const Template = args => <SearchForm {...args} />;

export const Default = Template.bind({});

Default.args = {
  handleSubmit: () => console.log('handleSubmit'),
  setQuery: () => console.log('setQuery'),
  searchQuery: () => console.log('searchQuery'),
};
