import style from './AnimatedEl.module.css';

import SvgContainer from './SvgContainer';

import {
  BsFillCloudDrizzleFill,
  BsCloudSnowFill,
  BsCloudLightningRainFill,
  BsSun,
  BsCloudSun,
} from 'react-icons/bs';

export default function AnimatedEl() {
  const iconList = [
    {
      icon: <BsFillCloudDrizzleFill size={60} className={style.svgContainer} />,
      key: 1,
    },
    {
      icon: <BsCloudSnowFill size={60} className={style.svgContainer} />,
      key: 2,
    },
    {
      icon: (
        <BsCloudLightningRainFill size={60} className={style.svgContainer} />
      ),
      key: 3,
    },
    {
      icon: <BsCloudSun size={60} className={style.svgContainer} />,
      key: 4,
    },
    {
      icon: <BsSun size={60} className={style.svgContainer} />,
      key: 5,
    },
  ];
  return (
    <div className={style.idleSvgContainer}>
      {iconList.map(item => (
        <SvgContainer key={item.key} icon={item.icon} />
      ))}
    </div>
  );
}
