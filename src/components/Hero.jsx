import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.sectionHero}>
      <div className={styles.heroRight}>
        <img src="../src/assets/img-hero.jpg" className={styles.imgHero} />
      </div>
      <div className={styles.heroLeft}>
        <h1 className={styles.heroHeading}>Valami nagybetűvel</h1>
        <p className={styles.heroDescription}>
          Máté kitalálja mi legyen ideírva, könyvkeresés, talán két sornyi
          szöveg fog kelleni. Valamit még ideírok, hogy kiadja.
        </p>
        <button className={styles.heroBtn}>cta</button>
      </div>
    </section>
  );
}

export default Hero;
