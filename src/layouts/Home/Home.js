import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';

import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';

import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';

import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';

import hmsPreview from 'assets/hms-preview.png';
import cicd from 'assets/cicd.png';
import algoVE from 'assets/algo-ve-preview.png';
import blockchain from 'assets/blockchain.png';
import algoVE2 from 'assets/algoVE2.png';
import stockDash from 'assets/stock-dashboard.png';
import stockDash2 from 'assets/stockDash2.png';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Student', 'Learner'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const projectEight = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour,  projectFive, projectSix, projectSeven, projectEight, details];

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
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Siddharth Mavani - Portfolio"
        description="This is a portfolio created by using the template from Hamish Williams."
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


      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems:'center'
        }}
      >
        <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '200px', textAlign:'center' }}>
          <ProjectSummary
            id="project-1"
            sectionRef={projectOne}
            visible={visibleSections.includes(projectOne.current)}
            index={1}
            title="LoCoML"
            description="A low-code ML platform enabling easy model training and analysis. Has several features including model versioning, data preprocessing, and automated machine learning (AutoML)."
            buttonText="View project"
            buttonLink="https://github.com/siddharth-mavani/LoCoML/"
          />
      </div>
      <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '200px', textAlign:'center' }}>
        <ProjectSummary
          id="project-2"
          alternate
          sectionRef={projectTwo}
          visible={visibleSections.includes(projectTwo.current)}
          index={2}
          title="CineStream: A Video Streaming Platform"
          description="A Microservice architecture based video streaming platform offering a flexible subscription model, personalized recommendations, and the ability to request movies."
          buttonText="View Project"
          buttonLink="https://github.com/siddharth-mavani/video-streaming-microservices"
        />
      </div>
      <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '200px', textAlign:'center'}}>
        <ProjectSummary
          id="project-3"
          sectionRef={projectThree}
          visible={visibleSections.includes(projectThree.current)}
          index={3}
          title="Kubernetes Multi-App"
          description="An application containerised using Docker and deployed on a Kubernetes Cluster."
          buttonText="View project"
          buttonLink="https://github.com/siddharth-mavani/multi-k8s"
        />
      </div>
      <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '200px', textAlign:'center'}}>
        <ProjectSummary
          id="project-4"
          sectionRef={projectFour}
          visible={visibleSections.includes(projectThree.current)}
          index={3}
          title="Multi-Dock"
          description="A Multi-Container application with React for the frontend, Node/Express.js for the backend, Postgres for the database, and Redis for caching."
          buttonText="View project"
          buttonLink="https://github.com/siddharth-mavani/Multi-Docker"
        />
      </div>
      <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '200px', textAlign:'center'}}>
        <ProjectSummary
          id="project-5"
          sectionRef={projectFive}
          visible={visibleSections.includes(projectThree.current)}
          index={3}
          title="Linux C Shell"
          description="A linux based shell implemented in C. Implemented system calls including but not limited to ls, cd, echo, jobs, pinfo. Has advanced features such as input/output redirection, piping and signal handling."
          buttonText="View project"
          buttonLink="https://github.com/siddharth-mavani/Linux-C-Shell"
        />
      </div>
      <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '200px', textAlign:'center'}}>
        <ProjectSummary
          id="project-6"
          sectionRef={projectSix}
          visible={visibleSections.includes(projectThree.current)}
          index={3}
          title="2D Clash-of-Clans"
          description="An interactive terminal based game implemented using Python."
          buttonText="View project"
          buttonLink="https://github.com/siddharth-mavani/2D-Clash-of-Clans"
        />
      </div>
      <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '200px', textAlign:'center'}}>
        <ProjectSummary
          id="project-7"
          sectionRef={projectSeven}
          visible={visibleSections.includes(projectThree.current)}
          index={3}
          title="Food Ordering Portal"
          description="A responsive WebApp developed using MERN to help manage and order food."
          buttonText="View project"
          buttonLink="https://github.com/siddharth-mavani/Food-Ordering-Portal"
        />
      </div>
      <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '200px', textAlign:'center'}}>
        <ProjectSummary
          id="project-8"
          sectionRef={projectEight}
          visible={visibleSections.includes(projectThree.current)}
          index={3}
          title="Python-MySQL based DBMS"
          description="An interactive Python3 CLI that allows users to make changes in the database using functions such as but not limited to create, update, delete, modify and retrieve."
          buttonText="View project"
          buttonLink="https://github.com/siddharth-mavani/Python-Database-Management-System"
        />
      </div>

      </div>
    </div>
  );
};
