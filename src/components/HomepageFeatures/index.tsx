import React from 'react'; // Import React
import styles from './styles.module.css';
import Link from '@docusaurus/Link'; // Import Link component
import useBaseUrl from '@docusaurus/useBaseUrl'; // Import useBaseUrl

// Define a type for our project data
type ProjectItem = {
  title: string;
  link: string;
  description: string; // Added a description field for more context
  image?: string; // Optional image path
};

// Example project data - user wants to keep these
const ProjectList: ProjectItem[] = [
  {
    title: '🐝 Gratheon',
    link: 'https://gratheon.com',
    description: 'Startup to save the bees. Modular robotic beehive and app with data analytics.',
    image: '/img/projects/gratheon.png',
  },

  {
    title: 'GraphQL Schema Registry',
    link: 'https://github.com/tot-ra/graphql-schema-registry',
    description: 'The go-to graphql schema registry for your services. Allowing you to manage and version your schemas easily on premise.',
    image: '/img/projects/gql.png',
  },


  {
    title: 'Ka-Ba',
    link: 'https://github.com/tot-ra/ka_ba',
    description: 'AI agent orchestration app with fast runtime',
    image: '/img/projects/kaba.png',
  },

  {
    title: 'Workstation',
    link: 'https://github.com/tot-ra/workstation',
    description: 'CLI-focused scripts to automate the setup of a new workstation',
    image: '/img/projects/work.png',
  },
  
  {
    title: 'Clarifai Docusaurus integration',
    link: 'https://github.com/tot-ra/clarifai-docusaurus',
    description: 'Add AI search capabilities to your docusaurus website.',
  },

  {
    title: 'Clare',
    link: 'https://github.com/tot-ra/clare',
    description: 'A VSCode agentic extension that helps you write better code. Hard fork of Cline',
  },


  {
    title: 'Clarify PR',
    link: 'https://github.com/tot-ra/clarifai-PR',
    description: 'Github workflow to automate your pull request reviewing with LLMs',
  },

  {
    title: 'KidsTV',
    link: 'https://github.com/tot-ra/ktv/',
    description: 'A glorified youtube playlist to get a random cartoon episode for your kids',
  },

  {
    title: 'Telepathy',
    link: 'https://github.com/tot-ra/telepathy/',
    description: 'A contract-testing framework',
  },
  {
    title: 'Grapheon',
    link: 'https://github.com/tot-ra/grapheon/',
    description: 'A graph visualization library in javascript',
  },
];

const Project: React.FC<ProjectItem> = ({title, link, description, image}) => {
  const imageUrl = image ? useBaseUrl(image) : null;
  return (
    <div className={styles.projectItem}>
      {imageUrl && (
        <div className={styles.projectImageContainer}>
          <img src={imageUrl} alt={title} className={styles.projectImage} />
        </div>
      )}
      <h3>
        <Link to={link} target="_blank" rel="noopener noreferrer">
          {title}
        </Link>
      </h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): React.ReactElement {
  return (
    <section className={styles.features}>
      <div className="container">
        <div style={{textAlign:'center', marginBottom: '2rem'}}> {/* Added margin bottom to video container */}
          <iframe width="600" height="340" src="https://www.youtube.com/embed/aLRu5WpA1dU"
          title="О канале"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>

        {/* Add the projects section */}
        <div className={styles.projectsContainer}>
          <h2>My Projects</h2>
          <div className={styles.projectsGrid}>
            {ProjectList.map((project, idx) => (
              <Project key={idx} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
