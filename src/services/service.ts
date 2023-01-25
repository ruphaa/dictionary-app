
const getDictionaryURL = `https://api.dictionaryapi.dev/api/v2/entries/en/`

export async function getWordDefinition(word: string) {
    try {
        const response = await fetch(getDictionaryURL+word);
        return await response.json();
    } catch(error) {
        console.log('Error fetching the word', error);
        return []
    }
}
