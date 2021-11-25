import classes from "./Brand.module.css";

function Brand() {
  return (
    <div className={classes.brand}>
      <h1>
        <span className={classes.article}>Una</span>{" "}
        <span className={classes.brandName}>Hamburguesa</span>
      </h1>
    </div>
  );
}

export default Brand;
