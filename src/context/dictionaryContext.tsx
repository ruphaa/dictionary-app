import React from "react";

export type MeaningProp = {
    partOfSpeech?: string;
    definitions?: any[];
    synonyms?: string[];
    antonyms?: string[];
}

type DefinitionProps = {
    word?: string;
    phonetic?: string;
    sourceUrls?: string[];
    meanings?: MeaningProp[];
    phonetics?: any[];
};

type DictionaryContextProps = {
    definition?: DefinitionProps;
    setWordDefinition: (def: DefinitionProps) => void;
}

const DictionaryContext = React.createContext<DictionaryContextProps | undefined>(undefined);

type ProviderProps = {
    children?: React.ReactNode;
}

// type DictionaryResponse = {data: {

// }} | {
//     error: any
// }
const dummyWord: DefinitionProps = {
    word: "Dictionary",
    phonetic: "/ˈdɪkʃən(ə)ri/",
    sourceUrls: ["https://en.wikipedia.org/wiki/Dictionary"],
    meanings: [{
        partOfSpeech: "noun",
        definitions: [{
            definition: "a book or electronic resource that lists the words of a language (typically in alphabetical order) and gives their meaning, or gives the equivalent words in a different language, often also providing information about pronunciation, origin, and usage.",
            example: "I'll look up 'love' in the dictionary"
        }, {
            definition: "a reference book on a particular subject, the items of which are typically arranged in alphabetical order.",
            example: "a dictionary of quotations"
        }],
        synonyms: ["lexicon", "wordbook", "glossary"],
    }],
    phonetics: [{text: "/ˈdɪkʃən(ə)ri/", audio: "//ssl.gstatic.com/dictionary/static/sounds/20220808/dictionary--_gb_3.mp3"}]
};

export const DictionaryProvider = ({ children }: ProviderProps) => {
    const [definition, setDefinition] = React.useState(dummyWord);
    const contextValue = React.useMemo(() => {
    const setWordDefinition = (def: DefinitionProps) => {
        setDefinition(def);
    };
    return { definition, setWordDefinition };
    }, [definition, setDefinition]);

    return (
        <DictionaryContext.Provider  value={contextValue}>
            {children}
        </DictionaryContext.Provider>
    );
}

export const useDictionaryContext = () => {
    const context = React.useContext(DictionaryContext);
    if (context === undefined) {
        throw new Error('DictionaryProvider is not wrapped in the tree');
    }
    
    return context;
}
