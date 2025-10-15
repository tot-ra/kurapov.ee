import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.heroContentWrapper}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            Artjom Kurapov
          </Heading>
          <p className="hero__subtitle">Full-Stack Product Engineer based in Estonia 🇪🇪</p>
          <p>Development using Typescript, React, Go, MySQL/Postgres stack with AI superpowers</p>
          <div className={styles.buttons}>
            <Link
                style={{marginRight: '10px'}}
              className="button button--primary"
              to="https://t.me/tot_ra">
              Chat in Telegram
            </Link>

            <Link
                className="button button--secondary"
                to="https://calendly.com/artkurapov/30min">
              Book a meeting
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Блог Артёма Курапова`}
      description="Отец, программист, блогер, пчеловод, любопытный наблюдатель, познающий свет">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
