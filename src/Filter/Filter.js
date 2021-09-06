import { useDispatch } from 'react-redux';
import { changeFilter } from '../redux/actions'; 
import styles from './Filter.module.css'

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = e => dispatch(changeFilter(e.currentTarget.value));
  
  return (
    <label className={styles.label}>
      <span>Let's find somebody</span>
      <input
        className={styles.input}
        type="text"
        onChange={onChange} />
    </label>
  );
};

export default Filter;