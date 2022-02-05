import { useState } from 'react';
import Styles from './Styles.module.css';

const MenuItem = ({ slug, title, url, children, className }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const renderExpand = () => (
    <div
      className={Styles.expand}
      onClick={() => setShowSubMenu(!showSubMenu)}
    >{(showSubMenu && '-') || '+'}</div>
  );
  return <div className={Styles[className] || Styles.parent} id={slug}>
    <div className={Styles.content}>
      <a
        className={Styles.link}
        title={title}
        href={url}
      >
        {title}
      </a>
      {children && renderExpand()}
    </div>

    {children &&
      showSubMenu &&
      children.map(child => <MenuItem className={"child"} key={child.slug} {...child} />)
    }
  </div>
};

export default MenuItem;