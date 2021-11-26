import { createContext } from "react";

export const BurgerContext = createContext({
  selectedBurgers: []
});

function BurgerContextProvider(props) {
  return <BurgerContext.Provider>{props.children}</BurgerContext.Provider>;
}

export default BurgerContextProvider;
