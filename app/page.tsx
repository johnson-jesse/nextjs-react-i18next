import styles from "./page.module.css";
import { TranslatedComponent } from "./TranslatedComponent";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>
          An example <code>Nextjs</code> project using <code>i18n</code> and{" "}
          <code>react-i18next</code>. Specifically, this project is configured
          using <code>i18next-http-backend</code> to load translation files from
          <code>public/locales</code> via <code>i18n.use(Backend)</code>.
        </h1>

        <div className={styles.ctas}>
          <p>
            My translated component: <TranslatedComponent />
          </p>
        </div>
      </main>
      <footer className={styles.footer} />
    </div>
  );
}
