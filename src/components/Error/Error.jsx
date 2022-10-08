import styles from './Error.module.css';

import { BiError } from 'react-icons/bi';
import { VscSearchStop } from 'react-icons/vsc';


export default function Error({ errorMessage }) {
  const icon = errorMessage.includes('City') ? <VscSearchStop size={90}/> : <BiError size={90}/>

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorImage}></div>
      <h2 className={styles.errorMessage}>
        {icon}
        {errorMessage}
      </h2>
    </div>
  );
}
