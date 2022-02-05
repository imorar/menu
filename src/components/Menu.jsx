import MenuItem from './MenuItem';
import Styles from './Styles.module.css';

export const Menu = ({ data }) => {
  return (<div className={Styles.mainMenu}>
    {
      data.map(menuItem => <MenuItem key={menuItem.slug} {...menuItem} />)
    }
  </div>
  );
};