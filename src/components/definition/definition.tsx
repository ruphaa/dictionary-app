import * as React from "react";
import { useDictionaryContext } from "../../context/dictionaryContext";
import type { MeaningProp } from "../../context/dictionaryContext";
import styles from "./definition.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import useSound from 'use-sound';

const Placeholder = () => {
  return (
    <div>
      Start searching, let's learn a new word.
    </div>
  )
}

const Meaning = ({ meaning }: { meaning: MeaningProp }) => {
  return (
    <div className={styles.speech}>
      <h4>{meaning.partOfSpeech}</h4>
      <div className={styles.subtitle}>Meaning</div>
      {meaning.antonyms?.length ? <p>antonyms: {meaning.antonyms}</p> : null}
      <ul>
        {meaning.definitions?.map((definition) => (
          <li>
            <span>{definition.definition}</span>
            <br />
            {definition.example ? <span className={styles.example}>"{definition.example}"</span> : null}
          </li>
        ))}
      </ul>
      {meaning.synonyms?.length ? (
        <p className={styles.subtitle}>
          Synonyms
          <span className={styles.tag}>{meaning.synonyms?.join(", ")}</span>
        </p>
      ) : null}
    </div>
  );
};

const Audio = ({ audio }: { audio: string}) => {
  const [play] = useSound(audio);  
  const handleClick = () => {
    play();
  }
  return (
    <button className={styles.play} onClick={handleClick}>
      <FontAwesomeIcon icon={faPlay}/>
    </button>
  );
}

export const Definition = () => {
  const { definition } = useDictionaryContext();
  return (
    <div className={styles.dictionary}>
      {(definition && Object.keys(definition).length) ? (
        <>
          <div className={styles.titleSection}>
            <div className={styles.title}>
              <h2 className={styles.word}>{definition.word}</h2>
              <p className={styles.phonetic}>{definition.phonetic}</p>
            </div>
            <Audio audio={definition.phonetics?.find(phonetic => (typeof phonetic.audio === "string" && phonetic.audio.length))?.audio}/>
          </div>
          <div>
            {definition.meanings?.map((meaning) => (
              <Meaning meaning={meaning} />
            ))}
          </div>
          {definition.sourceUrls?.length ? (
            <p className={styles.source}>
              Source
              <a
                href={definition.sourceUrls[0]}
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                {definition.sourceUrls[0]}
              </a>
            </p>
          ) : null}
        </>
      ) : (
        <Placeholder/>
      )}
    </div>
  );
};
