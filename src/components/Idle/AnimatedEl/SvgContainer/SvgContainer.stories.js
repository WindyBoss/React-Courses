import SvgContainer from './SvgContainer';

import { BsFillCloudDrizzleFill } from 'react-icons/bs';
import style from '../AnimatedEl.module.css';

const Stories = {
  title: 'SvgContainer',
  component: SvgContainer,
  decorators: [
    (Story) => (
      <div style={{ width: '100px', height: '100px', background: '#000', color: '#fff' }}>
        <Story />
      </div>
    ),
  ],
};

export default Stories;

const Template = args => <SvgContainer {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: <BsFillCloudDrizzleFill size={60} className={style.svgContainer} />,
};
