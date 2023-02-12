
const getDictionaryURL = `https://api.dictionaryapi.dev/api/v2/entries/en/`

export async function getWordDefinition(word: string) {
    return fetch(getDictionaryURL+word)
        .then(response => response.json())
        .catch(error => []);
}
