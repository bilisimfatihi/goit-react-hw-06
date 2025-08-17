import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type="text"
        placeholder="Ara..."
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
