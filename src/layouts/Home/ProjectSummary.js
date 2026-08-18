import { Button } from 'components/Button';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { useState } from 'react';
import styles from './ProjectSummary.module.css';

export const ProjectSummary = ({
  id,
  visible: sectionVisible,
  sectionRef,
  index,
  title,
  subtitle,
  description,
  tags = [],
  buttonText,
  buttonLink,
  featured,
}) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <article
      className={styles.summary}
      data-featured={featured || undefined}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      aria-labelledby={titleId}
      ref={sectionRef}
      id={id}
      tabIndex={-1}
    >
      <Transition in={sectionVisible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div aria-hidden className={styles.index} data-visible={visible}>
              <Text className={styles.indexNumber} size="s" weight="medium">
                {String(index).padStart(2, '0')}
              </Text>
              <Divider
                notchWidth="64px"
                notchHeight="8px"
                collapsed={!visible}
                collapseDelay={200}
              />
            </div>
            <Heading
              level={3}
              as="h3"
              className={styles.title}
              data-visible={visible}
              id={titleId}
            >
              {title}
            </Heading>
            {subtitle && (
              <Text className={styles.subtitle} data-visible={visible} size="s">
                {subtitle}
              </Text>
            )}
            <Text className={styles.description} data-visible={visible} as="p">
              {description}
            </Text>
            <ul className={styles.tags} data-visible={visible} aria-label="Technologies">
              {tags.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className={styles.button} data-visible={visible}>
              <Button iconHoverShift href={buttonLink} iconEnd="arrowRight">
                {buttonText}
              </Button>
            </div>
          </div>
        )}
      </Transition>
    </article>
  );
};
