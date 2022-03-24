interface IWordsObject {
    [key: string]: string;
}

const translateWords = (words: string, lang: string) => {
    const wordsListEn: IWordsObject = {
        author: 'Author',
        title: 'Title',
        publishing: 'Publishing',
        genre: 'Genre',
        price: 'Price',
    };
    const wordsListPl: IWordsObject = {
        author: 'Autor',
        title: 'Tytuł',
        publishing: 'Wydawnictwo',
        genre: 'Gatunek',
        price: 'Cena',
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
