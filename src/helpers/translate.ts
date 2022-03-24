interface IWordsObject {
    [key: string]: string;
}

const translateWords = (words: string, lang: string) => {
    const wordsListEn: IWordsObject = {
        author: 'Author',
    };
    const wordsListPl: IWordsObject = {
        author: 'Autor',
    };

    switch (lang) {
        case 'en':
            return wordsListEn[words.toLowerCase()];
        case 'pl':
            return wordsListPl[words.toLowerCase()];
        default:
            return wordsListEn[words];
    }
};

export default translateWords;
