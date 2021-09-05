import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/actions'; 
import PropTypes from 'prop-types';
import styles from './Filter.module.css'

const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  
  <label className={styles.label}>
    <span>Let's find somebody</span>
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={e=>dispatch(changeFilter(e.target.value))} />
  </label>
};

Filter.propTypes = {
    value: PropTypes.string.isRequired
};

export default Filter;