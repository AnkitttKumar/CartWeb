import React from "react";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCart";
import mealPic from "../../Assest/meal1.jpg";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FOOD Factory</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-img"]}>
        <img src={mealPic} alt="main meal image" />
      </div>
    </Fragment>
  );
};

export default Header;
