interface IWordsObject {
    [key: string]: string;
}

const translateWords = (words: string) => {
    const selectLang = 'en';
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

    switch (selectLang) {
        case 'en':
            return wordsListEn[words.toLowerCase()];
        case 'pl':
            return wordsListPl[words.toLowerCase()];
        default:
            return wordsListEn[words];
    }
};

export default translateWords;
