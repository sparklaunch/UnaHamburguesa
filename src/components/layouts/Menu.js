import { Link } from "react-router-dom";
import classes from "./Menu.module.css";

function Menu() {
  return (
    <div className={classes.menu}>
      <ul>
        <li>
          <Link to="/">전체 메뉴</Link>
        </li>
        <li>
          <Link to="/address">찾아오시는 길</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
