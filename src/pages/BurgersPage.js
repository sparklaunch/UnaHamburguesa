import classes from "./BurgersPage.module.css";
import BurgerItem from "../components/BurgerItem";
import Card from "../components/Card";

function BurgersPage(props) {
  const burgers = props.data;
  return (
    <div className={classes.burgers}>
      <ul>
        {burgers.map((burger) => (
          <li key={burger.id}>
            <Card>
              <BurgerItem data={burger} />
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BurgersPage;
