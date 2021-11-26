import classes from "./BurgersPage.module.css";
import BurgerItem from "../components/BurgerItem";
import Card from "../components/Card";
import { useContext } from "react";
import { BurgerContext } from "../store/BurgerContext";
import Orders from "../components/Orders";

function BurgersPage(props) {
  const { selectedBurgers, setSelectedBurgers } = useContext(BurgerContext);
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
      <Orders data={selectedBurgers} />
    </div>
  );
}

export default BurgersPage;
