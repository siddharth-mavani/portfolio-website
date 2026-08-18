import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { useState } from 'react';
import styles from './Experience.module.css';

export const experiences = [
  {
    role: 'Member of Technical Staff',
    company: 'Oracle — Cloud Infrastructure Team (OCI)',
    type: 'Full-time',
    period: 'July 2024 – Present',
    location: 'Bangalore, Karnataka, India',
    highlights: [
      `Co-authored and defended the ZPR (Zero Trust Packet Routing) Deny architectural design before principal/staff network architects, then productionized explicit-deny enforcement that strengthens customers’ security posture through finer-grained, least-privilege traffic controls; processes 100K+ evaluations/s globally with a one-minute regional peak of 158K evaluations/s.`,
      `Designed and implemented a distributed heartbeat-based health-check system for packet routing that improves availability by preventing prolonged traffic blackholing; sequence-validated probes detect peer failures within ~6–8s and reroute 1T+ packets/month (~390K/sec) to healthy paths.`,
      `Optimized the health-check system’s dataplane probe communication using a compact binary wire format and direct packet-buffer serialization, reducing packet overhead by ~23%.`,
      `Reduced operational remediation effort by ~78% by developing AI-assisted automation workflows and runbook tooling for Sev-1/Sev-2 incidents, later productized into a reusable operational AI agent skill adopted across the engineering organization.`,
      `Owned customer-facing metrics instrumentation for ZPR Deny, driving cross-timezone coordination with 2 US teams to secure approvals for UI/UX integration, metric whitelisting, publishing, and Grafana dashboarding.`,
      `Mentored an intern and a new-hire engineer on team infrastructure, codebase architecture, and CI/CD pipelines; guided the intern’s test automation initiative, reducing manual testing effort by ~73% (~10 hrs per release), now adopted as part of the team’s standard test suite.`,
    ],
  },
  {
    role: 'Project Intern',
    company: 'Oracle — Cloud Infrastructure Team (OCI)',
    type: 'Full-time',
    period: 'May 2023 – July 2023 · 3 months',
    location: 'Bangalore, Karnataka, India',
    highlights: [
      `Worked on an open-source large language model called GPT4All-J.`,
      `Optimized the LLM’s inference speed using Triton Inference Server with the FasterTransformer backend.`,
      `Containerized and automated the build process using Docker scripts.`,
      `Reduced inference time from 37 seconds to 1.7 seconds with no additional cost, increasing speed by 21×.`,
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Product Labs',
    type: 'Part-time',
    period: 'January 2022 – April 2022 · 4 months',
    location: 'Hyderabad, Telangana, India',
    highlights: [
      `Worked in a team of 4 to develop an end-to-end OCR-based web application using the MERN stack.`,
      `Designed and developed the user authentication portal, where users were verified using JSON Web Tokens (JWT).`,
      `Built RESTful APIs using Node.js and Express.js for the backend server, with MongoDB for the database.`,
      `Containerized the application using Docker.`,
    ],
  },
];

export const Experience = ({ id, visible: sectionVisible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      as="section"
      className={styles.experience}
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <Transition in={sectionVisible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.divider} data-visible={visible} aria-hidden>
              <Divider
                notchWidth="64px"
                notchHeight="8px"
                collapsed={!visible}
                collapseDelay={200}
              />
            </div>
            <Heading
              as="h2"
              className={styles.title}
              data-visible={visible}
              level={3}
              id={titleId}
            >
              Experience
            </Heading>
            <div className={styles.timeline} data-visible={visible}>
              {experiences.map(experience => (
                <article
                  className={styles.role}
                  key={`${experience.company}-${experience.role}`}
                >
                  <div className={styles.roleHeader}>
                    <div>
                      <Heading as="h3" level={3} className={styles.roleTitle}>
                        {experience.role}
                      </Heading>
                      <div className={styles.companyLine}>
                        <Text className={styles.company} size="m" weight="medium">
                          {experience.company}
                        </Text>
                        {experience.type && (
                          <>
                            <span className={styles.separator} aria-hidden>
                              ·
                            </span>
                            <Text size="s" secondary>
                              {experience.type}
                            </Text>
                          </>
                        )}
                      </div>
                    </div>
                    <Text className={styles.period} size="s">
                      {experience.period}
                    </Text>
                  </div>
                  {experience.location && (
                    <Text as="p" className={styles.location} size="s" secondary>
                      {experience.location}
                    </Text>
                  )}
                  <ul className={styles.highlights}>
                    {experience.highlights.map(highlight => (
                      <li key={highlight}>
                        <Text>{highlight}</Text>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
