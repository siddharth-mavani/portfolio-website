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
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm Siddharth Mavani! I recently graduated with a B.Tech in Computer Science and Engineering 
      from the <Link href="https://www.iiit.ac.in/">International Institute of Information Technology, Hyderabad. </Link> 
      During my time there, my passion for programming and solving challenging problems grew immensely.
    </Text>
    
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I currently work as a Member of Technical Staff at <Link href="https://www.oracle.com/">Oracle </Link>
      as part of <Link href="https://www.oracle.com/in/cloud/"> Oracle Cloud Infrastructure (OCI) </Link>
      team. I have a diverse skill set having worked on full-stack, ML/AI as well as DevOps 
      projects. The prospect of using my abilities to positively impact many lives is what 
      fuels my passion for computer science and keeps me motivated.
    </Text>
    
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    When I'm not coding, you can find me on the football pitch, passionately cheering for Real Madrid, or on the cricket field. I’m also trying to balance my love for sports with a newfound commitment to the gym—after all, even programmers need to work on their health and physique!
    </Text>
    
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    So, whether it’s crafting elegant code or discussing the latest match, I’m all about making a difference—one line of code (or goal) at a time!
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
