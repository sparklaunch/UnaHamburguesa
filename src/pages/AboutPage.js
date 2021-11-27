import classes from "./AboutPage.module.css";

function AboutPage() {
  return (
    <div className={classes.aboutPage}>
      <section className={classes.aboutImage}>
        <img src="resources/about.png" alt="About" />
      </section>
      <section className={classes.content}>
        <h2>
          저희 Una Hamburguesa는 항상 고퀄리티의 수제 버거만을 고집합니다.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
