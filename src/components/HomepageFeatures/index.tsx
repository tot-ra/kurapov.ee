import styles from './styles.module.css';

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div style={{textAlign:'center'}}>
          <iframe width="600" height="340" src="https://www.youtube.com/embed/aLRu5WpA1dU" 
          title="О канале" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>


          <iframe 
          src="https://open.spotify.com/embed/album/2lulBSRsNIxUwTQQdlwjwK?utm_source=generator&theme=0" 
          width="100%" height="500" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          
        </div>
      </div>
    </section>
  );
}
