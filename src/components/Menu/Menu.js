import MenuSummary from "./MenuSummary";
import MenuList from "./MenuList";
import { Fragment } from "react";

const Menu = function (props) {
  return (
    <Fragment>
      <MenuSummary></MenuSummary>
      <MenuList></MenuList>
    </Fragment>
  );
};

export default Menu;
