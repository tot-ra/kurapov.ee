import styles from './styles.module.css';

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div style={{textAlign:'center'}}>
          <iframe width="600" height="340" src="https://www.youtube.com/embed/aLRu5WpA1dU" 
          title="О канале" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        </div>
      </div>
    </section>
  );
}
