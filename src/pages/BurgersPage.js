import classes from "./BurgersPage.module.css";
import BurgerItem from "../components/BurgerItem";

function BurgersPage(props) {
  const burgers = props.data;
  return (
    <div className={classes.burgers}>
      <ul>
        {burgers.map((burger) => (
          <li key={burger.id}>
            <BurgerItem data={burger} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BurgersPage;
