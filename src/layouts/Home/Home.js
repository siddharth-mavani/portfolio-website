import { Heading } from 'components/Heading';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Experience } from 'layouts/Home/Experience';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Student', 'Learner'];

const projects = [
  {
    title: 'OrbitKV',
    subtitle: 'A Distributed Key-Value Store',
    description:
      'A leaderless Dynamo-style key-value store in Python with a configurable 32-bit consistent-hash ring, N/R/W quorum coordination, and Protocol Buffers/gRPC replica communication. Vector clocks preserve concurrent writes as sibling versions, while tombstones and read repair support eventual consistency across a real three-node REST/gRPC cluster validated by a 36-test unit and integration suite.',
    tags: ['Python', 'Distributed systems', 'gRPC'],
    buttonLink: 'https://github.com/siddharth-mavani/Orbit-KV',
    featured: true,
  },
  {
    title: 'Aurelia Ledger',
    subtitle: 'Double-Entry Token Accounting Service',
    description:
      'A Go/PostgreSQL double-entry ledger service with an immutable journal, database-enforced balancing, rebuildable projections, reconciliation, and paginated history. Concurrency-safe deposit, spend, adjustment, and reservation workflows use atomic transactions, deterministic row locking, scoped idempotency keys, and overdraft protection, backed by a 30-test domain, HTTP, and PostgreSQL integration suite.',
    tags: ['Go', 'PostgreSQL', 'REST APIs'],
    buttonLink: 'https://github.com/siddharth-mavani/Aurelia-Ledger',
    featured: true,
  },
  {
    title: 'LoCoML',
    subtitle: 'A Low-Code Machine Learning Platform',
    description:
      'A low-code machine-learning platform for streamlined model training and analysis, with model versioning, data preprocessing, and automated machine learning workflows.',
    tags: ['Machine learning', 'AutoML', 'Low-code'],
    buttonLink: 'https://github.com/siddharth-mavani/LoCoML/',
  },
  {
    title: 'CineStream',
    subtitle: 'A Video Streaming Platform',
    description:
      'A microservice-based video streaming platform with flexible subscriptions, personalized recommendations, and a workflow for requesting new movies.',
    tags: ['Microservices', 'Streaming', 'Full stack'],
    buttonLink: 'https://github.com/siddharth-mavani/video-streaming-microservices',
  },
  {
    title: 'Linux C Shell',
    subtitle: 'A Unix-Style Command-Line Shell',
    description:
      'A Linux shell implemented in C with built-in commands, job control, process information, input/output redirection, pipelines, and signal handling.',
    tags: ['C', 'Linux', 'Systems programming'],
    buttonLink: 'https://github.com/siddharth-mavani/Linux-C-Shell',
  },
];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const details = useRef();
  const experience = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectRefs = [projectOne, projectTwo, projectThree, projectFour, projectFive];

  useEffect(() => {
    const sections = [intro, details, experience, ...projectRefs];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      if (section.current) sectionObserver.observe(section.current);
    });

    if (intro.current) indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Siddharth Mavani - Portfolio"
        description="This is a portfolio created using next.js"
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />

      <Experience
        sectionRef={experience}
        visible={visibleSections.includes(experience.current)}
        id="experience"
      />

      <Section
        as="section"
        className={styles.projects}
        id="projects"
        aria-labelledby="projects-title"
      >
        <header className={styles.projectsHeader}>
          <Heading as="h2" className={styles.projectsTitle} id="projects-title" level={2}>
            Projects
          </Heading>
          <Text as="p" className={styles.projectsIntro} size="l">
            A focused selection of work across distributed systems, backend engineering,
            machine learning, and systems programming.
          </Text>
        </header>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div
              className={styles.project}
              data-featured={project.featured || undefined}
              key={project.title}
            >
              <ProjectSummary
                {...project}
                id={`project-${index + 1}`}
                index={index + 1}
                sectionRef={projectRefs[index]}
                visible={visibleSections.includes(projectRefs[index].current)}
                buttonText="View project"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
