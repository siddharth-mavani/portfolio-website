import profileImgPlaceholder from 'assets/profile-placeholder.jpg';

import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import styles from './Profile.module.css';

const mailtoURL = `mailto:siddharthamavani2003@gmail.com?subject=${""}&body=${"Hi Siddharth,"}`;

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there 👋" start={visible} delay={500} />
    </Heading>
    
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Siddharth Mavani, a Member of Technical Staff at <Link href="https://www.oracle.com/">Oracle</Link>,
      where I build backend and distributed systems for <Link href="https://www.oracle.com/in/cloud/">Oracle Cloud Infrastructure (OCI)</Link>.
      I like taking on tricky reliability and scale problems and turning them into secure, observable services.
    </Text>
    
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Lately, that has meant productionizing zero-trust controls, building health-check systems that spot failures
      quickly and improve availability at scale, and developing AI-assisted automation and reusable agent skills that
      help engineers respond to critical incidents. I enjoy carrying an idea all the way from design to production—
      making it observable, automating the tedious bits, and building confidence with solid tests.
    </Text>
    
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Away from the day job, I like building projects that I think are cool and fun. Recent projects include OrbitKV, a Dynamo-inspired
      distributed key-value store that explores quorums, vector clocks, tombstones, and read repair; and Aurelia
      Ledger, a Go/PostgreSQL double-entry ledger focused on immutable records, transactional correctness, and
      concurrency-safe financial workflows.
    </Text>
    
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      When I’m not coding, you’ll usually find me following Real Madrid, playing or
      watching cricket, or trying to stay consistent at the gym. I also love getting out of the city—whether that
      means planning a trip somewhere new or spending a weekend trekking and chasing a good view.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href={mailtoURL}
                icon="send"
              >
                Send me a message
              </Button>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
